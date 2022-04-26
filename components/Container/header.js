export default function Header() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="relative pb-32 bg-gray-800">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
            alt=""
          />
          <div
            className="absolute inset-0 bg-gray-800 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
            RFID Surveillance Security Access Control System
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
            There are secured rooms that require privileged, logged, and
            reviewed access. The presenters would like to demonstrate how we
            could implement such secured systems using embedded systems and send
            this information to a remote server for logging and security
            auditing.
          </p>
        </div>
      </div>
      
    </div>
  )
}
