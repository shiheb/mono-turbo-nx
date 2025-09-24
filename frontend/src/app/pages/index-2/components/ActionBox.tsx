import IconifyIcon from '@/components/wrappers/IconifyIcon'

const ActionBox = () => {
  return (
    <section className="pb-24">
      <div className="container">
        <div className="mb-10 flex items-end justify-between">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-medium capitalize text-white">
              Supercharge your content generation process.
            </h2>
            <p className="mx-auto w-2/3 text-base font-medium text-default-200">
              Join us today and experience the power of AI-powered text creation
              for yourself!
            </p>
            <div className="mt-8">
              <button className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-2 text-white transition-all duration-300 hover:bg-primary-hover">
                Get start free
                <IconifyIcon icon="lucide:move-right" className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ActionBox
