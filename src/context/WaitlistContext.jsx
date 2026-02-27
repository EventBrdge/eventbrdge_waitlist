import { createContext, useContext, useState, useCallback, useRef } from 'react'

const WaitlistContext = createContext(null)

export function WaitlistProvider({ children }) {
  const [toast, setToast] = useState(null)
  const timerRef = useRef(null)

  const showToast = useCallback(({ type, title, message, duration = 5000 }) => {
    if (timerRef.current) clearTimeout(timerRef.current)
    setToast({ type, title, message, duration, key: Date.now() })
    timerRef.current = setTimeout(() => {
      setToast(null)
      timerRef.current = null
    }, duration)
  }, [])

  const dismissToast = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
    setToast(null)
  }, [])

  return (
    <WaitlistContext.Provider value={{ toast, showToast, dismissToast }}>
      {children}
    </WaitlistContext.Provider>
  )
}

export function useWaitlist() {
  const ctx = useContext(WaitlistContext)
  if (!ctx) throw new Error('useWaitlist must be used within WaitlistProvider')
  return ctx
}
