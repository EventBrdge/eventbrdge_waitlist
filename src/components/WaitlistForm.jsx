import { useState } from 'react'

export default function WaitlistForm({ variant = 'default' }) {
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('host')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const inv = variant === 'footer'

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid email address.')
      return
    }

    const entry = { email, role, timestamp: new Date().toISOString() }
    console.log(entry)

    const existing = JSON.parse(localStorage.getItem('eventbridge_waitlist') || '[]')
    existing.push(entry)
    localStorage.setItem('eventbridge_waitlist', JSON.stringify(existing))

    setSubmitted(true)
    setEmail('')
  }

  if (submitted) {
    return (
      <div className={`flex items-center gap-3 py-5 ${inv ? 'justify-center' : ''}`}>
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="shrink-0">
          <circle cx="11" cy="11" r="11" className={inv ? 'fill-gold-500' : 'fill-forest-800 dark:fill-gold-500'} />
          <path d="M6.5 11.5L9.5 14.5L15.5 8" className={inv ? 'stroke-forest-900' : 'stroke-white dark:stroke-[#0C0C0E]'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <p className={`font-body text-[13px] sm:text-[14px] font-medium ${inv ? 'text-white dark:text-gold-400' : 'text-forest-800 dark:text-gold-400'}`}>
          You're on the list. We'll be in touch soon.
        </p>
      </div>
    )
  }

  const toggleActive = inv
    ? 'bg-white dark:bg-gold-500 text-forest-800 dark:text-[#0C0C0E] shadow-sm'
    : 'bg-forest-800 dark:bg-gold-500 text-white dark:text-[#0C0C0E] shadow-sm'

  const toggleInactive = inv
    ? 'text-white/60 dark:text-[#8B8B96] hover:text-white/80 dark:hover:text-[#E8E8ED]'
    : 'text-[#6B6B76] dark:text-[#8B8B96] hover:text-[#0A0A18] dark:hover:text-[#E8E8ED]'

  const toggleTrack = inv
    ? 'bg-white/10 dark:bg-[#111113]'
    : 'bg-[#F0F0F3] dark:bg-[#1A1A1E]'

  const inputClass = inv
    ? 'w-full px-3.5 sm:px-4 py-[11px] sm:py-[12px] text-[13px] sm:text-[14px] font-body rounded-[10px] sm:rounded-[12px] bg-white/10 dark:bg-[#111113] text-white dark:text-[#E8E8ED] placeholder-white/40 dark:placeholder-[#555560] border border-white/20 dark:border-[#2A2A2E] outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all duration-150'
    : 'w-full px-3.5 sm:px-4 py-[11px] sm:py-[12px] text-[13px] sm:text-[14px] font-body rounded-[10px] sm:rounded-[12px] bg-white dark:bg-[#1A1A1E] text-[#0A0A18] dark:text-[#E8E8ED] placeholder-[#A0A0AA] dark:placeholder-[#555560] border border-[#E5E5EA] dark:border-[#2A2A2E] shadow-[0_1px_2px_rgba(0,0,0,0.04)] dark:shadow-none outline-none focus:border-forest-800 dark:focus:border-gold-500 focus:ring-2 focus:ring-forest-800/10 dark:focus:ring-gold-500/20 transition-all duration-150'

  const submitClass = inv
    ? 'w-full sm:w-auto px-5 sm:px-6 py-[11px] sm:py-[12px] bg-gold-500 text-forest-900 dark:text-[#0C0C0E] text-[13px] sm:text-[14px] font-body font-semibold rounded-[10px] sm:rounded-[12px] hover:opacity-90 active:scale-[0.98] transition-all duration-150 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:ring-offset-2 focus:ring-offset-forest-800 dark:focus:ring-offset-[#18181B] whitespace-nowrap'
    : 'w-full sm:w-auto px-5 sm:px-6 py-[11px] sm:py-[12px] bg-forest-800 dark:bg-gold-500 text-white dark:text-[#0C0C0E] text-[13px] sm:text-[14px] font-body font-semibold rounded-[10px] sm:rounded-[12px] shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:opacity-90 active:scale-[0.98] transition-all duration-150 cursor-pointer focus:outline-none focus:ring-2 focus:ring-forest-800/30 dark:focus:ring-gold-500/30 focus:ring-offset-2 dark:focus:ring-offset-[#0C0C0E] whitespace-nowrap'

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-[440px]" noValidate>
      <fieldset className="border-0 p-0 m-0">
        <legend className="sr-only">Join the EventBridge waitlist</legend>

        {/* Role toggle */}
        <div
          className={`flex mb-4 sm:mb-5 rounded-full p-[3px] ${toggleTrack}`}
          role="radiogroup"
          aria-label="Select your role"
        >
          <button
            type="button"
            role="radio"
            aria-checked={role === 'host'}
            onClick={() => setRole('host')}
            className={`flex-1 py-[9px] sm:py-[10px] px-3 sm:px-4 text-[12px] sm:text-[13px] font-body font-semibold rounded-full transition-all duration-200 cursor-pointer ${
              role === 'host' ? toggleActive : toggleInactive
            }`}
          >
            I'm a Host
          </button>
          <button
            type="button"
            role="radio"
            aria-checked={role === 'planner'}
            onClick={() => setRole('planner')}
            className={`flex-1 py-[9px] sm:py-[10px] px-3 sm:px-4 text-[12px] sm:text-[13px] font-body font-semibold rounded-full transition-all duration-200 cursor-pointer ${
              role === 'planner' ? toggleActive : toggleInactive
            }`}
          >
            I'm an Event Planner
          </button>
        </div>

        {/* Email + submit */}
        <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3">
          <div className="flex-1">
            <label htmlFor={`email-${variant}`} className="sr-only">Email address</label>
            <input
              id={`email-${variant}`}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className={inputClass}
              aria-describedby={error ? `error-${variant}` : undefined}
            />
          </div>
          <button type="submit" className={submitClass}>
            Request Early Access
          </button>
        </div>

        {error && (
          <p id={`error-${variant}`} className="mt-2.5 sm:mt-3 text-[12px] sm:text-[13px] text-danger font-body" role="alert">
            {error}
          </p>
        )}
      </fieldset>
    </form>
  )
}
