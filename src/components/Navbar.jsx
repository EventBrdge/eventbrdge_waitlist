export default function Navbar({ dark, toggleDark }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-3 sm:pt-4 px-3 sm:px-4">
      <nav
        className="flex items-center gap-1.5 sm:gap-2 h-[48px] sm:h-[52px] px-1.5 sm:px-2 rounded-full border border-[#E5E5EA] dark:border-[#2A2A2E] bg-white/80 dark:bg-[#1A1A1E]/80 backdrop-blur-xl shadow-[0_2px_16px_rgba(0,0,0,0.06)] dark:shadow-[0_2px_16px_rgba(0,0,0,0.3)] transition-colors duration-300 max-w-full"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a href="/" className="flex items-center gap-1.5 pl-2.5 sm:pl-3 pr-2 sm:pr-4 shrink-0">
          <div className="w-[24px] h-[24px] sm:w-[26px] sm:h-[26px] rounded-[6px] sm:rounded-[7px] bg-forest-800 dark:bg-gold-500 flex items-center justify-center">
            <span className="text-[10px] sm:text-[11px] font-heading font-bold text-white dark:text-[#0C0C0E] leading-none">E</span>
          </div>
          <span className="hidden sm:inline font-heading font-bold text-[15px] text-[#0A0A18] dark:text-[#E8E8ED] tracking-[-0.02em]">
            EventBridge
          </span>
        </a>

        {/* Separator */}
        <div className="w-px h-4 sm:h-5 bg-[#E5E5EA] dark:bg-[#2A2A2E]" />

        {/* Dark mode toggle */}
        <button
          onClick={toggleDark}
          aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
          className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-[#6B6B76] dark:text-[#8B8B96] hover:bg-[#F0F0F3] dark:hover:bg-[#2A2A2E] transition-colors duration-150 cursor-pointer shrink-0"
        >
          {dark ? (
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          ) : (
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </button>

        {/* CTA */}
        <a
          href="#waitlist"
          className="flex items-center h-8 sm:h-9 px-3 sm:px-4 rounded-full bg-forest-800 dark:bg-gold-500 text-white dark:text-[#0C0C0E] text-[12px] sm:text-[13px] font-body font-semibold hover:opacity-90 transition-opacity duration-150 whitespace-nowrap shrink-0"
        >
          <span className="sm:hidden">Access</span>
          <span className="hidden sm:inline">Request Access</span>
        </a>
      </nav>
    </header>
  )
}
