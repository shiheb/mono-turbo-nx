import IconifyIcon from '@/components/wrappers/IconifyIcon'

const PostGenerator = () => {
  return (
    <section
      className="py-20"
      data-aos="zoom-out"
      data-aos-easing="ease"
      data-aos-duration={1000}>
      <div className="container">
        <div className="mb-10 flex items-end justify-between">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-medium capitalize text-white">
              Choose Social Media Post Generator
            </h2>
            <p className="text-sm font-medium text-default-200">
              Start working with Tailwindcss It allows you to compose complex
              designs <br /> by combining and customizing utility classes..
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center rounded-3xl bg-default-950/40 backdrop-blur-3xl">
          <div className="w-auto grow border-b border-white/10 md:w-1/2 md:border-e">
            <div className="p-8 sm:p-10">
              <div className="mb-10 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <IconifyIcon icon="lucide:framer" className="h-10 w-10" />
              </div>
              <h2 className="mb-4 text-2xl font-medium text-white">
                Customize Your post
              </h2>
              <p className="mb-6 text-base text-default-200">
                Customizing your post refers to the process of tailoring your
                content to suit your specific goals, audience, and platform.
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-2 text-white transition-all duration-300 hover:bg-primary-hover">
                More Tools{' '}
                <IconifyIcon icon="lucide:move-right" className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="w-auto grow border-b border-white/10 md:w-1/2">
            <div className="p-8 sm:p-10">
              <div className="mb-10 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <IconifyIcon icon="lucide:codesandbox" className="h-10 w-10" />
              </div>
              <h2 className="mb-4 text-2xl font-medium text-white">
                Instant Content Creation
              </h2>
              <p className="mb-6 text-base text-default-200">
                Instant content creation refers to the process of generating
                high-quality written, visual, or multimedia content quickly and
                efficiently.
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-2 text-white transition-all duration-300 hover:bg-primary-hover">
                More Tools{' '}
                <IconifyIcon icon="lucide:move-right" className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="w-auto grow border-b border-white/10 md:w-1/2 md:border-b-0 md:border-e">
            <div className="p-8 sm:p-10">
              <div className="mb-10 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <IconifyIcon icon="lucide:life-buoy" className="h-10 w-10" />
              </div>
              <h2 className="mb-4 text-2xl font-medium text-white">
                AI-Powered Content Suggestions
              </h2>
              <p className="mb-6 text-base text-default-200">
                AI-powered content suggestions leverage artificial intelligence
                and machine learning algorithms to help content creators
                generate ideas.
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-2 text-white transition-all duration-300 hover:bg-primary-hover">
                More Tools{' '}
                <IconifyIcon icon="lucide:move-right" className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="w-auto grow border-white/10 md:w-1/2">
            <div className="p-8 sm:p-10">
              <div className="mb-10 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <IconifyIcon icon="lucide:package" className="h-10 w-10" />
              </div>
              <h2 className="mb-4 text-2xl font-medium text-white">
                Dedicated Customer Support
              </h2>
              <p className="mb-6 text-base text-default-200">
                Dedicated customer support is a service provided by
                organizations to assist and address the needs, concerns, and
                inquiries of their customers.
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-2 text-white transition-all duration-300 hover:bg-primary-hover">
                More Tools{' '}
                <IconifyIcon icon="lucide:move-right" className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PostGenerator
