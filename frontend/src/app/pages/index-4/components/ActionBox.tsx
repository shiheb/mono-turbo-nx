import IconifyIcon from '@/components/wrappers/IconifyIcon'

const ActionBox = () => {
  return (
    <section
      className="py-20"
      data-aos="fade-up"
      data-aos-easing="ease"
      data-aos-duration={1000}>
      <div className="container">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="mb-4 text-3xl font-medium capitalize text-white">
            Supercharge your content generation process.
          </h2>
          <p className="text-sm font-medium text-default-200">
            Start working with Tailwindcss It allows you to compose complex
            designs <br /> by combining and customizing utility classes..
          </p>
          <form className="mt-6 space-y-2">
            <div className="relative w-full">
              <input
                type="email"
                id="subcribe"
                className="h-14 w-full rounded-lg border-white/10 bg-default-950/40 py-4 pe-32 ps-4 text-white backdrop-blur-3xl focus:border-white/10 focus:ring-0"
                placeholder="Enter your email :"
                name="email"
              />
              <button
                type="submit"
                className="hover:border-primary-700 absolute end-[8px] top-[8px] inline-flex h-10 items-center justify-center gap-2 rounded-md border-primary bg-primary px-6 text-white hover:bg-primary-hover">
                <span className="hidden text-base font-medium text-white md:block">
                  Start for free
                </span>{' '}
                <IconifyIcon
                  icon="lucide:send"
                  className="block h-5 w-5 text-default-300 group-hover:text-white md:hidden"
                />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ActionBox
