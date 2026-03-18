export default function Footer() {
  return (
    <footer className="border-t border-border dark:border-[#2A2A2E] py-6 sm:py-8 px-5 sm:px-6 lg:px-8 bg-surface dark:bg-[#0C0C0E]">
      <div className="max-w-[1120px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
        <a href="/" className="flex items-center gap-1.5 shrink-0">
          <img
            src="/logo-icon.png"
            alt="EventBridge"
            className="w-[20px] h-[20px] dark:hidden"
          />
          <img
            src="/logo-icon-primary.png"
            alt="EventBridge"
            className="w-[20px] h-[20px] hidden dark:block"
          />
          <span className="font-sans font-bold text-[13px] sm:text-[14px] text-accent-1 dark:text-primary tracking-[-0.01em]">
            EventBridge
          </span>
        </a>
        <div className="flex items-center gap-3 sm:gap-4 text-[11px] sm:text-[12px] text-content-tertiary dark:text-[#555560] font-sans">
          <p>&copy; {new Date().getFullYear()} EventBridge. All rights reserved.</p>
          <span className="hidden sm:inline">·</span>
          <a
            href="http://www.kraftyn.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-content-secondary dark:hover:text-[#8B8B96] transition-colors"
          >
            Powered by Kraftyn
          </a>
        </div>
      </div>
    </footer>
  )
}
