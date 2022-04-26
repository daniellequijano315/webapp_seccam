import Image from "next/image"
export default function Introduction() {
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
              Introducing
            </span>
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              RFID Surveillance Security Access Control System
            </span>
          </h1>
          <p className="mt-8 text-xl text-gray-500 leading-8 sm:text-left text-center">
            RFID stands for Radio Frequency Identification. It is a technology
            allowing devices to automatically identify information stored in a
            tag through radio waves. An RFID tag consists of an antenna and a
            microchip in order to transmit and receive.
          </p>
        </div>

        <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
          <p>
            There are secured rooms that require privileged, logged, and
            reviewed access. The presenters would like to demonstrate how we
            could implement such secured systems using embedded systems and send
            this information to a remote server for logging and security
            auditing.
          </p>

          {/* 
          Problems */}
          <div className="container mx-auto">
            <div className="grid sm:grid-cols-2 mt-16">
              <div>
                {" "}
                <ul role="list" className="mt-10 space-y-5 w-[75%]">
                  <h1 className="text-[20px] font-bold">
                    Problem/s identified
                  </h1>

                  <li>
                    1. Instances where a typical “lock and key” security is not
                    enough
                  </li>
                  <li>
                    2. Typical RFID security does not have remote backup.{" "}
                  </li>
                  <li>3. Most does not even have logging functionality.</li>
                  <li>
                    4. Lock and Key mechanisms are not enough for security
                    auditing which requires proof and information
                  </li>
                  <p>
                    Cyber Security is becoming a severe issue for individuals,
                    enterprises, and governments alike. In a world where
                    everything is on the internet, from cute kitten videos and
                    our travel diaries to our credit card information, ensuring
                    that our data remains safe is one of the biggest challenges
                    of Cyber Security. Cyber Security challenges come in many
                    forms, such as ransomware, phishing attacks, malware
                    attacks, and more.
                  </p>
                </ul>
              </div>
              <figure className=" w-max-[600px]  items-center rounded-lg px-5 py-5">
                <img
                  className=" items-center rounded-lg px-5 py-5 bg-gray-100 shadow-md "
                  src="https://res.cloudinary.com/tip/image/upload/v1650788649/finalproject_embeddedsystem/bermix-studio-F7DAQIDSk98-unsplash_rz0pv9.jpg"
                  alt=""
                  width={610}
                  height={473}
                />
                <figcaption className=" text-center mt-1 italic">
                  "Don't mess with a hacker"
                </figcaption>
              </figure>
            </div>
          </div>

          <div className="container mx-auto">
            <div className="sm:grid sm:grid-cols-2 mt-16 flex-col-reverse flex">
              <div>
                <figure className=" w-max-[600px]  items-center rounded-lg px-5 py-5">
                  <img
                    className=" items-center rounded-lg px-5 py-5 bg-gray-100 shadow-md "
                    src="https://res.cloudinary.com/tip/image/upload/v1650789612/finalproject_embeddedsystem/john-salvino-bqGBbLq_yfc-unsplash_pmlkkn.jpg"
                    alt=""
                    width={610}
                    height={473}
                  />
                  <figcaption className=" text-center mt-1 italic">
                    "Its better to be safe than sorry."
                  </figcaption>
                </figure>
              </div>
              <div>
                {" "}
                <ul role="list" className="mt-10 ml-10 space-y-5 w-[75%]">
                  <h1 className="text-[20px] font-bold">Objectives</h1>
                  <li>
                    1. Create an embedded system that unlocks a secure door
                    using RFID
                  </li>
                  <li>
                    2. Create an embedded system that logs the access key
                    information, takes a photo of the scene, then sends these
                    information to a remote server{" "}
                  </li>
                  <li>
                    3. Create a remote server that accepts the information in
                    the second objective
                  </li>
                  <li>
                    4. Create an embedded system that provides room access to an
                    authorized access key, and denies entry to an unauthorized
                    one.
                  </li>
                  <li>
                    5. Create a website hosted on a remote server that displays
                    the collected information.
                  </li>
                  <p>
                    The fundamental security problem of RFID is the same as that
                    of any wireless device. It transmits data out in the open
                    where it can be easily sniffed, captured or stolen. Thus, an
                    attacker doesn't even have to find a network or cable for
                    attaching a sniffer. All he or she needs is a laptop with an
                    antenna and a wireless hookup outside the place the device
                    is transmitting, and he or she could obtain confidential
                    customer information leading to financial loss or identity
                    theft.
                  </p>
                </ul>
              </div>
            </div>
          </div>

          <ul role="list" className="mt-10 space-y-5 px-10">
            <h1 className="text-[20px] font-bold text-center pb-5">
              Significance and Importance of the Project
            </h1>
            <figure className="items-center py-4">
            <img
              className="w-[75%] rounded-lg ml-auto mr-auto"
              src="https://res.cloudinary.com/tip/image/upload/v1650790971/finalproject_embeddedsystem/felipe-furtado-2zDXqgTzEFE-unsplash_teyqxy.jpg"
              alt=""
              width={1310}
              height={873}
            />
          
          </figure>
            <li>1. Safety and security is everyone’s priority</li>
            <li>2. Saves time and money through automation</li>
            <li>
              3. Create a remote server that accepts the information in the
              second objective
            </li>
            <li>4. Enhance the traceability of the information</li>
            <li>5. Improve the data accuracy and availability</li>
          </ul>

     
          <p className="mt-10 italic">
            "According to IoT Analytics, there will be about 11.6 billion IoT
            devices by 2021. IoT devices are computing, digital, and mechanical
            devices that can autonomously transmit data over a network. Examples
            of IoT devices include desktops, laptops, mobile phones, smart
            security devices, etc. As the adoption of IoT devices is increasing
            at an unprecedented rate, so are the challenges of Cyber Security.
            Attacking IoT devices can result in the compromise of sensitive user
            data. Safeguarding IoT devices is one of the biggest challenges in
            Cyber Security, as gaining access to these devices can open the
            doors for other malicious attacks."
          </p>
        </div>
      </div>
    </div>
  )
}
