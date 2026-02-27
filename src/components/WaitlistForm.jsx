import { useState } from 'react'
import { useWaitlist } from '../context/WaitlistContext'

const API_URL = 'https://eventbrdge-waitlist-production.up.railway.app/waitlist'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

const ROLE_MAP = { host: 'client', planner: 'planner' }

export default function WaitlistForm({ variant = 'default' }) {
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('host')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const { showToast } = useWaitlist()

  const inv = variant === 'footer'

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    const trimmed = email.trim().toLowerCase()
    if (!trimmed || !EMAIL_RE.test(trimmed)) {
      setError('Please enter a valid email address.')
      return
    }

    setSubmitting(true)
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: trimmed, role: ROLE_MAP[role] }),
      })

      if (!res.ok) {
        const body = await res.json().catch(() => null)
        const raw = body?.error?.message || 'Something went wrong. Please try again.'
        throw new Error(raw.charAt(0).toUpperCase() + raw.slice(1))
      }

      setEmail('')
      showToast({
        type: 'success',
        title: "You're on the list",
        message: "We'll be in touch soon.",
      })
    } catch (err) {
      const msg = err.message === 'Failed to fetch'
        ? 'Network error. Check your connection and try again.'
        : err.message
      setError(msg)
      showToast({ type: 'error', title: 'Sign-up failed', message: msg })
    } finally {
      setSubmitting(false)
    }
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
            className={`flex-1 py-[9px] sm:py-[10px] px-3 sm:px-4 text-[12px] sm:text-[13px] font-body font-semibold rounded-full transition-all duration-200 cursor-pointer ${role === 'host' ? toggleActive : toggleInactive
              }`}
          >
            I'm a Host
          </button>
          <button
            type="button"
            role="radio"
            aria-checked={role === 'planner'}
            onClick={() => setRole('planner')}
            className={`flex-1 py-[9px] sm:py-[10px] px-3 sm:px-4 text-[12px] sm:text-[13px] font-body font-semibold rounded-full transition-all duration-200 cursor-pointer ${role === 'planner' ? toggleActive : toggleInactive
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
          <button type="submit" disabled={submitting} className={`${submitClass} disabled:opacity-60 disabled:cursor-not-allowed`}>
            {submitting ? 'Submitting…' : 'Request Early Access'}
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
