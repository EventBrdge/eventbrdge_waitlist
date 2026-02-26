const hostBenefits = [
  'Find planners you can actually trust',
  'Pay in stages, not all upfront',
  'Track every milestone in one place',
  'Plan from anywhere -- Lagos, London, or Atlanta',
]

const plannerBenefits = [
  'Receive quality leads, not DM spam',
  'Send structured proposals in minutes',
  'Get paid on time, every time',
  'Build a verified portfolio that works for you',
]

function BenefitList({ items }) {
  return (
    <ul className="space-y-3 sm:space-y-4">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5 sm:gap-3">
          <div className="w-[16px] sm:w-[18px] h-[16px] sm:h-[18px] rounded-full bg-forest-50 dark:bg-forest-800/20 flex items-center justify-center mt-[2px] shrink-0">
            <svg width="9" height="9" viewBox="0 0 16 16" fill="none" className="sm:w-[10px] sm:h-[10px]">
              <path d="M3 8.5L6.5 12L13 4" className="stroke-forest-800 dark:stroke-forest-400" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="text-[13px] sm:text-[14px] text-[#6B6B76] dark:text-[#8B8B96] font-body leading-[1.5] sm:leading-[1.55]">{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function BothSides() {
  return (
    <section className="py-[56px] sm:py-[72px] md:py-[96px] lg:py-[112px] px-5 sm:px-6 lg:px-8 bg-[#F7F7F7] dark:bg-[#111113]">
      <div className="max-w-[1120px] mx-auto">
        <span className="inline-block text-[10px] sm:text-[11px] font-body font-bold uppercase tracking-[1.8px] text-gold-500 mb-4 sm:mb-5">
          Built for both sides
        </span>

        <h2 className="font-display text-[24px] sm:text-[28px] md:text-[36px] text-[#0A0A18] dark:text-[#F0F0F3] leading-[1.1] tracking-[-0.02em] max-w-[560px] mb-8 sm:mb-10 md:mb-[56px]">
          Whether you're hosting or planning, EventBridge works for you.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
          {/* For Hosts */}
          <div className="bg-white dark:bg-[#18181B] border border-[#E5E5EA] dark:border-[#2A2A2E] rounded-[12px] sm:rounded-[16px] p-5 sm:p-7 md:p-10 shadow-[0_1px_2px_rgba(0,0,0,0.04)] dark:shadow-none hover:shadow-[0_2px_12px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_2px_12px_rgba(0,0,0,0.2)] transition-all duration-200">
            <div className="flex items-center gap-3 sm:gap-3.5 mb-5 sm:mb-7 pb-4 sm:pb-6 border-b border-[#F0F0F3] dark:border-[#2A2A2E]">
              <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-[8px] sm:rounded-[10px] bg-forest-50 dark:bg-forest-800/20 text-forest-800 dark:text-forest-400 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-[15px] sm:text-[16px] text-[#0A0A18] dark:text-[#E8E8ED]">For Hosts</h3>
            </div>
            <BenefitList items={hostBenefits} />
          </div>

          {/* For Planners */}
          <div className="bg-white dark:bg-[#18181B] border border-[#E5E5EA] dark:border-[#2A2A2E] rounded-[12px] sm:rounded-[16px] p-5 sm:p-7 md:p-10 shadow-[0_1px_2px_rgba(0,0,0,0.04)] dark:shadow-none hover:shadow-[0_2px_12px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_2px_12px_rgba(0,0,0,0.2)] transition-all duration-200">
            <div className="flex items-center gap-3 sm:gap-3.5 mb-5 sm:mb-7 pb-4 sm:pb-6 border-b border-[#F0F0F3] dark:border-[#2A2A2E]">
              <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-[8px] sm:rounded-[10px] bg-forest-50 dark:bg-forest-800/20 text-forest-800 dark:text-forest-400 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-[15px] sm:text-[16px] text-[#0A0A18] dark:text-[#E8E8ED]">For Professional Planners</h3>
            </div>
            <BenefitList items={plannerBenefits} />
          </div>
        </div>
      </div>
    </section>
  )
}
