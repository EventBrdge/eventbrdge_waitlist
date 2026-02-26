import WaitlistForm from './WaitlistForm'

export default function Hero() {
  return (
    <section id="waitlist" className="pt-[120px] sm:pt-[140px] md:pt-[180px] pb-[56px] sm:pb-[80px] md:pb-[112px] px-5 sm:px-6 lg:px-8">
      <div className="max-w-[680px] mx-auto text-center">
        {/* Gold accent */}
        <div className="w-[32px] sm:w-[40px] h-[2px] bg-gold-500 mx-auto mb-6 sm:mb-8" />

        <h1 className="font-display text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] text-[#0A0A18] dark:text-[#F0F0F3] leading-[1.08] tracking-[-0.03em]">
          Plan your event with{' '}
          <span className="text-forest-800 dark:text-gold-400">confidence.</span>
          <br />
          Not chaos.
        </h1>

        <p className="mt-5 sm:mt-7 text-[14px] sm:text-[16px] md:text-[18px] text-[#6B6B76] dark:text-[#8B8B96] font-body leading-[1.65] max-w-[460px] mx-auto">
          Your money deserves protection. Your event deserves a professional.
          We bring both together in one place.
        </p>

        <div className="mt-8 sm:mt-10 flex justify-center">
          <WaitlistForm variant="hero" />
        </div>

        <p className="mt-4 sm:mt-5 text-[11px] sm:text-[12px] text-[#A0A0AA] dark:text-[#555560] font-body tracking-[0.02em]">
          Launching first in Lagos. Limited early access.
        </p>
      </div>
    </section>
  )
}
