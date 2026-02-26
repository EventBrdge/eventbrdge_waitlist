import WaitlistForm from './WaitlistForm'

export default function FinalCTA() {
  return (
    <section className="py-[56px] sm:py-[72px] md:py-[96px] lg:py-[112px] px-5 sm:px-6 lg:px-8 bg-forest-800 dark:bg-[#18181B]">
      <div className="max-w-[600px] mx-auto text-center">
        <div className="w-[32px] sm:w-[40px] h-[2px] bg-gold-500 mx-auto mb-6 sm:mb-8" />

        <h2 className="font-display text-[24px] sm:text-[28px] md:text-[36px] text-white dark:text-[#F0F0F3] leading-[1.1] tracking-[-0.02em] mb-3 sm:mb-4">
          Be first in line.
        </h2>
        <p className="text-white/60 dark:text-[#8B8B96] font-body text-[14px] sm:text-[15px] leading-[1.6] sm:leading-[1.65] mb-8 sm:mb-10 max-w-[360px] sm:max-w-[400px] mx-auto">
          We'll invite you before public launch. No spam. Just early access to a better way to plan events.
        </p>

        <div className="flex justify-center">
          <WaitlistForm variant="footer" />
        </div>

        <p className="mt-4 sm:mt-5 text-[11px] sm:text-[12px] text-white/35 dark:text-[#555560] font-body tracking-[0.02em]">
          No credit card required. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
