export default function AboutUs() {
  return (
    <div className="bg-white">
      <div className="relative pb-32 bg-gray-800">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://res.cloudinary.com/tip/image/upload/v1650898507/finalproject_embeddedsystem/cytonn-photography-n95VMLxqM2I-unsplash_pfjqar.jpg"
            alt=""
          />
          <div
            className="absolute inset-0 bg-blue-400 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-[18px] font-semibold text-yellow-400 tracking-wide uppercase">
            About the team
            </h2>
            <p className="mt-1 text-[38px] font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Together we define.

            </p>
            <p className="max-w-xl mt-5 mx-auto text-[22px] text-gray-200">
            Together we can accomplish a job worth doing, and a success worth reaching.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
