export default function Architecture() {
  return (
    <div className="relative py-16 bg-white overflow-hidden">
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div
          className="relative h-full text-lg max-w-prose mx-auto"
          aria-hidden="true"
        >
          <svg
            className="absolute top-12 left-full transform translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
            />
          </svg>
          <svg
            className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
          <svg
            className="absolute bottom-12 left-full transform translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="d3eb07ae-5182-43e6-857d-35c643af9034"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
            />
          </svg>
        </div>
      </div>
      <div className="relative px-4 sm:px-6 lg:px-8">
        {/* 
          Introduction */}
        <div className="text-lg max-w-prose mx-auto">
          <h1>
            <span className="block text-base text-center text-yellow-600 font-semibold tracking-wide uppercase">
              System Architecture
            </span>
          </h1>
        </div>

        <div className="mt-6 prose pprose-lg text-gray-500 mx-auto">
          <div className="relative py-24 bg-gray-800  ">
            <div className="absolute inset-0 ">
              <img
                className="w-full h-full object-cover"
                src="https://res.cloudinary.com/tip/image/upload/v1650807622/finalproject_embeddedsystem/kumpan-electric-ut51FSt7VtM-unsplash_osnwyo.jpg"
                alt=""
              />
              <div
                className="absolute inset-0 bg-gray-500 mix-blend-multiply"
                aria-hidden="true"
              />
            </div>

            <p className="relative text-[16px] text-center  text-gray-200 px-4 ">
              A system architecture is the conceptual model that defines the
              structure, behavior, and more views of a system. An architecture
              description is a formal description and representation of a
              system, organized in a way that supports reasoning about the
              structures and behaviors of the system.
            </p>
          </div>

          {/* 
          RASPI*/}
          <div className="container mx-auto">
            <div className="grid sm:grid-cols-2 mt-16">
              <div>
                {" "}
                <ul role="list" className="mt-10 space-y-5 w-[75%] text-[16px]">
                  <h1 className="text-[20px] font-bold">
                    Process flow of the System Architecture
                  </h1>

                  <li>
                    1. The raspberry pi would be the central processing center
                    of the whole system and will be handling the gathering,
                    packaging, and transmission of our data locally and to the
                    cloud.
                  </li>
                  <li>
                    2. A relay would be used to simulate the opening and closing
                    of a security unit.
                  </li>
                  <li>
                    3. MFRC522 would be handling the recognition of the access
                    token (an access key card or access dongle). This data would
                    be transmitted towards the raspberry pi for processing.
                  </li>
                  <li>
                    4. As soon as someone tapped an access key, the data
                    collected would be sent to the cloud regardless if the
                    security unit was opened or not.
                  </li>
                  <li>5. Full-size HDMI output</li>
                  <li>
                    6. The mode of transmission would be through WiFi and must
                    be connected to the internet as the remote server would be
                    hosted on cloud services.
                  </li>
                  <li>
                    7. The remote server would have a database and a web service
                    to present these privileged data
                  </li>
                </ul>
              </div>
              <figure className=" w-max-[600px] mt-20  items-center rounded-lg px-5 py-5">
                <img
                  className=" items-center rounded-lg px-5 py-5 bg-gray-100 shadow-md "
                  src="https://res.cloudinary.com/tip/image/upload/v1650807742/finalproject_embeddedsystem/ONENOTE_XSVA3KI40b_imwpni.png"
                  alt=""
                  width={610}
                  height={473}
                />
                <figcaption className=" text-center mt-1 pb-2 italic">
                  System Architecture of the RFID Surveillance Control System
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
