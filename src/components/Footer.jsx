export default function Footer() {
  return (
    <footer className="border-t border-[#E5E5EA] dark:border-[#2A2A2E] py-6 sm:py-8 px-5 sm:px-6 lg:px-8 bg-white dark:bg-[#0C0C0E]">
      <div className="max-w-[1120px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
        <span className="font-heading font-bold text-[13px] sm:text-[14px] text-forest-800 dark:text-gold-400 tracking-[-0.01em]">
          EventBridge
        </span>
        <p className="text-[11px] sm:text-[12px] text-[#A0A0AA] dark:text-[#555560] font-body">
          &copy; {new Date().getFullYear()} EventBridge. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
