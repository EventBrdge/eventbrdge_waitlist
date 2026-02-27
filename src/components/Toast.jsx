import { useWaitlist } from '../context/WaitlistContext'

export default function Toast() {
  const { toast, dismissToast } = useWaitlist()

  if (!toast) return null

  const isSuccess = toast.type === 'success'

  return (
    <div className="fixed bottom-6 right-6 z-50 w-full max-w-[380px]">
      <div
        className="relative overflow-hidden bg-white dark:bg-[#1A1A1E] rounded-xl shadow-[0_8px_40px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_40px_rgba(0,0,0,0.5)] border border-[#E5E5EA] dark:border-white/[0.06] animate-[toast-in_0.25s_ease-out]"
        role="alert"
      >
        <div className="flex items-start gap-3 px-4 pt-4 pb-4">
          {/* Icon */}
          {isSuccess ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0 mt-0.5">
              <circle cx="10" cy="10" r="10" className="fill-forest-800 dark:fill-gold-500" />
              <path d="M6 10.5L8.5 13L14 7.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0 mt-0.5">
              <circle cx="10" cy="10" r="10" className="fill-danger" />
              <path d="M10 6v5m0 2.5V14" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          )}

          {/* Text */}
          <div className="flex-1 min-w-0">
            <p className="text-[13px] sm:text-[14px] font-semibold text-[#0A0A18] dark:text-white font-body leading-tight">
              {toast.title}
            </p>
            {toast.message && (
              <p className="mt-1 text-[12px] sm:text-[13px] text-[#6B6B76] dark:text-[#8B8B96] font-body leading-[1.45]">
                {toast.message}
              </p>
            )}
          </div>

          {/* Close */}
          <button
            onClick={dismissToast}
            className="shrink-0 mt-0.5 p-1 text-[#A0A0AA] dark:text-[#555560] hover:text-[#0A0A18] dark:hover:text-white transition-colors cursor-pointer rounded-md hover:bg-black/[0.04] dark:hover:bg-white/[0.06]"
            aria-label="Dismiss"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3.5 3.5L10.5 10.5M10.5 3.5L3.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Progress bar */}
        <div className="h-[3px] bg-black/[0.04] dark:bg-white/[0.04]">
          <div
            key={toast.key}
            className={`h-full ${isSuccess ? 'bg-forest-800 dark:bg-gold-500' : 'bg-danger'} rounded-full`}
            style={{ animation: `toast-progress ${toast.duration}ms linear forwards` }}
          />
        </div>
      </div>
    </div>
  )
}
