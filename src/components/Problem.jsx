const problems = [
  {
    title: 'Finding trusted planners is hard.',
    description:
      'You rely on Instagram DMs, word of mouth, and hope for the best. There is no structured way to verify who you are hiring.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <line x1="8" y1="11" x2="14" y2="11" />
      </svg>
    ),
  },
  {
    title: 'Payments feel risky.',
    description:
      'You send millions to someone you met online and pray it works out. No escrow. No recourse. No receipts.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: 'Everything lives in WhatsApp chaos.',
    description:
      'Contracts, receipts, mood boards, vendor contacts. Scattered across chats, emails, and voice notes.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
]

export default function Problem() {
  return (
    <section className="py-[56px] sm:py-[72px] md:py-[96px] lg:py-[112px] px-5 sm:px-6 lg:px-8 bg-surface-alt dark:bg-[#111113]">
      <div className="max-w-[1120px] mx-auto">
        <span className="inline-block text-[10px] sm:text-[11px] font-sans font-bold uppercase tracking-[1.8px] text-accent-1 dark:text-primary mb-4 sm:mb-5">
          The problem
        </span>

        <h2 className="font-sans font-bold text-[24px] sm:text-[28px] md:text-[36px] text-content-primary dark:text-[#F0F0F3] leading-[1.1] tracking-[-0.02em] max-w-[520px]">
          Planning events in Nigeria shouldn't feel like a gamble.
        </h2>

        <div className="mt-8 sm:mt-10 md:mt-[56px] grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {problems.map((item, i) => (
            <div
              key={i}
              className="bg-surface dark:bg-[#18181B] rounded-[12px] sm:rounded-[16px] p-5 sm:p-6 md:p-8 border border-border dark:border-[#2A2A2E] shadow-[0_1px_2px_rgba(0,0,0,0.04)] dark:shadow-none hover:shadow-[0_2px_12px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_2px_12px_rgba(0,0,0,0.2)] transition-all duration-200"
            >
              <div className="w-10 sm:w-11 h-10 sm:h-11 rounded-[8px] sm:rounded-[10px] bg-accent-1/10 dark:bg-primary/15 text-accent-1 dark:text-primary flex items-center justify-center mb-4 sm:mb-6">
                {item.icon}
              </div>
              <h3 className="font-sans font-semibold text-[14px] sm:text-[15px] text-content-primary dark:text-[#E8E8ED] mb-2 sm:mb-2.5 leading-[1.35]">
                {item.title}
              </h3>
              <p className="text-[13px] sm:text-[14px] text-content-secondary dark:text-[#8B8B96] font-sans leading-[1.6] sm:leading-[1.65]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
