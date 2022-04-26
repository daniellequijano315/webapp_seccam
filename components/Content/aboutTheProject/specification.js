export default function Specifications() {
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
              Project Requirements and Specifications
            </span>
          </h1>
        </div>

        <div className="mt-6 prose pprose-lg text-gray-500 mx-auto">
          <div className="relative py-24 bg-gray-800  ">
            <div className="absolute inset-0 ">
              <img
                className="w-full h-full object-cover"
                src="https://res.cloudinary.com/tip/image/upload/v1650803365/finalproject_embeddedsystem/alexandre-debieve-FO7JIlwjOtU-unsplash_pe9nrf.jpg"
                alt=""
              />
              <div
                className="absolute inset-0 bg-gray-500 mix-blend-multiply"
                aria-hidden="true"
              />
            </div>

            <p className="relative text-[16px] text-center  text-gray-200 px-4 ">
              Specification often refers to a set of documented requirements to
              be satisfied by a material, design, product, or service. A
              specification is often a type of technical standard. There are
              different types of technical or engineering specifications, and
              the term is used differently in different technical contexts.
              echnical specification is a document to outline how we are going
              to tackle technical issues in order to achieve a goal. Usually,
              this document will be written by senior engineers or leads before
              implementation.
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
                    Raspberry Pi Model B+
                  </h1>

                  <li>1. 700 MHz ARM11 processor</li>
                  <li>2. 512 MB of RAM</li>
                  <li>3. Four USB ports</li>
                  <li>4. Ethernet port</li>
                  <li>5. Full-size HDMI output</li>
                  <li>
                    6. Four-pole 3.5 mm jack with audio output and composite
                    video outputt
                  </li>
                  <li>
                    7. 40-pin GPIO header with 0.1″-spaced male pins that are
                    compatible with our 2×20 stackable (Links to an external
                    site.)female headers and the female ends of our premium
                    jumping wirest
                  </li>
                  <li>8. Camera interface (CSI)</li>
                  <li>9. Display interface (DSI)</li>
                  <li>10. Micro SD card slot</li>
                </ul>
              </div>
              <figure className=" w-max-[600px]  items-center rounded-lg px-5 py-5">
                <img
                  className=" items-center rounded-lg px-5 py-5 bg-gray-100 shadow-md "
                  src="https://images.unsplash.com/photo-1610812387871-806d3db9f5aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3NjA3NHwwfDF8c2VhcmNofDJ8fHJhc3BiZXJyeSUyMHBpfGVufDF8fHx8MTY0OTMxNDg2Nw&ixlib=rb-1.2.1&q=80&w=1080"
                  alt=""
                  width={610}
                  height={473}
                />
                <figcaption className=" text-center mt-1 pb-2 italic">
                  Raspberry Pi Model B+
                </figcaption>
                <p>
                  which has 512 MB of RAM, an Ethernet port, HDMI output, audio
                  output, RCA composite video output (through the 3.5 mm jack),
                  four USB ports, and 0.1″-spaced pins that provide access to
                  general purpose inputs and outputs (GPIO). The Raspberry Pi
                  requires a microSD card with an operating system on it (not
                  included).
                </p>
              </figure>
            </div>
          </div>

          <div className="container mx-auto">
            <div className="sm:grid sm:grid-cols-2 mt-16 flex-col-reverse flex">
              <div>
                <figure className=" w-max-[600px]  items-center rounded-lg px-5 py-5 mt-5">
                  <img
                    className=" items-center rounded-lg px-5 py-5 bg-gray-100 shadow-md "
                    src="https://res.cloudinary.com/tip/image/upload/v1650804604/finalproject_embeddedsystem/RC522-RFID-module_t1jqzz.jpg"
                    alt=""
                    width={610}
                    height={473}
                  />
                  <figcaption className=" text-center mt-1 pb-2 italic">
                    MiFARE RFID MFRC522s
                  </figcaption>
                  <p>
                    MiFARE RFID MFRC522s is the high integrated RFID card reader
                    which works on non-contact 13.56mhz communication, is
                    designed by NXP as a low power consumption, low cost and
                    compact size read and write chip, is the best choice in the
                    development of smart meters and portable hand-held devices.
                  </p>
                </figure>
              </div>
              <div>
                {" "}
                <ul role="list" className="mt-10 ml-10 space-y-5 w-[75%]">
                  <h1 className="text-[20px] font-bold">
                    MiFARE RFID MFRC522s
                  </h1>

                  <li>1. Working current：13 - 26mA / DC 3.3V</li>
                  <li>2. Standby current：10 - 13mA / DC 3.3V</li>
                  <li>{"3. Sleep current：<80uA "}</li>
                  <li>{"4. Peak current：<30mA "} </li>
                  <li>5. Working frequency：13.56MHz</li>
                  <li>6. Card reading distance ：0～60mm （Mifare1 card</li>
                  <li>Protocol：SPI</li>
                  <li>8. Data communication speed：10Mbit/s Max.</li>
                  <li>
                    9. Card types supported: Mifare1 S50, Mifare1 S70, Mifare
                    UltraLight, Mifare Pro, Mifare Desfire)
                  </li>
                  <li>10. Dimension：40mm × 60mm</li>
                  <li>11. Working temperature：-20—80 degree</li>
                  <li>12. Storage temperature：-40—85 degree</li>
                  <li>13. Humidity：relevant humidity 5%—95%</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="container mx-auto">
            <div className="grid sm:grid-cols-2 mt-16">
              <div>
                {" "}
                <ul role="list" className="mt-10 space-y-5 w-[75%] text-[16px]">
                  <h1 className="text-[20px] font-bold">
                    QC-3FF-S-Z 5V RelayJ
                  </h1>

                  <li>1. Mounting form: PCB Solderable</li>
                  <li>2.Rated load: 10A 250VAC/28VDC</li>
                  <li> {"3. Contact resistance: <=100m (ohm).s"}</li>
                  <li>4. Coil power: 0.45W.</li>
                  <li> {"5. Coil pick-up voltage: <=75%. "}</li>
                  <li> {"6. Coil drop-out voltage: >=10%. "}</li>
                  <li> {"7. Size: 1.5cm x 1.9cm x 2cm."}</li>
                </ul>
              </div>
              <figure className=" w-max-[600px]  items-center rounded-lg px-5 py-5">
                <img
                  className=" items-center rounded-lg px-5 py-5 bg-gray-100 shadow-md "
                  src="https://res.cloudinary.com/tip/image/upload/v1650806873/finalproject_embeddedsystem/2-CH-Relay-01_v4gu8m.jpg"
                  alt=""
                  width={610}
                  height={473}
                />
                <figcaption className=" text-center mt-1 pb-2 italic">
                  QC-3FF-S-Z 5V RelayJ
                </figcaption>
                <p>
                  is a programmable electrical switch, which can be controlled
                  by Arduino or any micro-controller. It is used to
                  programmatically control on/off the devices, which use the
                  high voltage and/or high current. It is a bridge between
                  Arduino and high voltage devices.
                </p>
              </figure>
            </div>
          </div>
          <div className="container mx-auto">
            <div className="sm:grid sm:grid-cols-2 mt-16 flex-col-reverse flex">
              <div>
                <figure className=" w-max-[600px]  items-center rounded-lg px-5 py-5 mt-5">
                  <img
                    className=" items-center rounded-lg px-5 py-5 bg-gray-100 shadow-md "
                    src="https://res.cloudinary.com/tip/image/upload/v1650807142/finalproject_embeddedsystem/awc001-front-l_buzrzx.jpg"
                    alt=""
                    width={610}
                    height={473}
                  />
                  <figcaption className=" text-center mt-1 pb-2 italic">
                    USB Camera
                  </figcaption>
                </figure>
              </div>
              <div>
                {" "}
                <ul role="list" className="mt-10 ml-10 space-y-5 w-[75%]">
                  <h1 className="text-[20px] font-bold">USB Camera</h1>
                  <p>
                    is a video camera that feeds or streams an image or video in
                    real time to or through a computer network, such as the
                    Internet. Webcams are typically small cameras that sit on a
                    desk, attach to a user's monitor, or are built into the
                    hardware.
                  </p>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}
