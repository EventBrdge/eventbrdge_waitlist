const steps = [
  {
    number: '01',
    title: 'Create your event brief.',
    description:
      'Tell us what you are planning -- wedding, birthday, burial, or anything else. We match you with vetted professionals.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="3" width="18" height="22" rx="2" />
        <line x1="9" y1="9" x2="19" y2="9" />
        <line x1="9" y1="13.5" x2="19" y2="13.5" />
        <line x1="9" y1="18" x2="15" y2="18" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Compare verified planners.',
    description:
      'See portfolios, reviews, and transparent pricing side by side. Make informed decisions, not hopeful ones.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
        <circle cx="10" cy="7" r="4" />
        <path d="M25 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M18 0.13a4 4 0 0 1 0 7.74" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Pay securely with milestones.',
    description:
      'Your money is held in escrow and released only when work is done. Pay in stages, never all at once.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="24" height="16" rx="2" />
        <line x1="2" y1="12" x2="26" y2="12" />
        <line x1="7" y1="17.5" x2="13" y2="17.5" />
      </svg>
    ),
  },
]

export default function Solution() {
  return (
    <section className="py-[56px] sm:py-[72px] md:py-[96px] lg:py-[112px] px-5 sm:px-6 lg:px-8 bg-white dark:bg-[#0C0C0E]">
      <div className="max-w-[1120px] mx-auto">
        <span className="inline-block text-[10px] sm:text-[11px] font-body font-bold uppercase tracking-[1.8px] text-gold-500 mb-4 sm:mb-5">
          How it works
        </span>

        <h2 className="font-display text-[24px] sm:text-[28px] md:text-[36px] text-[#0A0A18] dark:text-[#F0F0F3] leading-[1.1] tracking-[-0.02em] max-w-[520px]">
          From brief to celebration, in three steps.
        </h2>

        <div className="mt-8 sm:mt-10 md:mt-[56px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              {/* Icon box */}
              <div className="w-11 sm:w-12 h-11 sm:h-12 rounded-[10px] sm:rounded-[12px] bg-[#F7F7F7] dark:bg-[#18181B] border border-[#E5E5EA] dark:border-[#2A2A2E] text-forest-800 dark:text-forest-400 flex items-center justify-center mb-4 sm:mb-6">
                {step.icon}
              </div>

              <span className="font-heading text-[10px] sm:text-[10px] font-bold text-gold-500 tracking-[1.5px] uppercase">
                Step {step.number}
              </span>

              <h3 className="font-heading font-semibold text-[14px] sm:text-[15px] text-[#0A0A18] dark:text-[#E8E8ED] mt-2 sm:mt-2.5 mb-2 sm:mb-2.5 leading-[1.35]">
                {step.title}
              </h3>

              <p className="text-[13px] sm:text-[14px] text-[#6B6B76] dark:text-[#8B8B96] font-body leading-[1.6] sm:leading-[1.65]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
