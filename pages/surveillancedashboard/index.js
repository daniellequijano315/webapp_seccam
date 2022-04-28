import Navbar from "../../components/Container/navbar"
import { Fragment, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"
import ModalImage from "react-modal-image"
/* This example requires Tailwind CSS v2.0+ */

import { CheckIcon } from "@heroicons/react/outline"

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(
    "http://afe47cabd8457497fbc403ec51c1c83a-1958255376.ap-east-1.elb.amazonaws.com:9001/seccam/view"
  )
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}
const list = [
  {
    keyid: "1",
    date: "April 28 12pm",

    rfuid: "HelloHelloPoKamusta",

    image:
      "https://res.cloudinary.com/tip/image/upload/v1650897283/finalproject_embeddedsystem/Quijano_Danielle_Mark_O_11r_jit5m2.jpg",
  },
  {
    keyid: "2",
    date: "April 28 12pm",

    rfuid: "HelloHelloPoKamusta",

    image:
      "https://res.cloudinary.com/tip/image/upload/v1650897221/finalproject_embeddedsystem/278977461_281781630699174_2557961964329566459_n_paytlg.png",
  },
  {
    keyid: "3",
    date: "April 28 12pm",

    rfuid: "HelloHelloPoKamusta",

    image:
      "https://res.cloudinary.com/tip/image/upload/v1650871279/finalproject_embeddedsystem/241782748_10215973074360039_3223906419357501925_n_a0blei.jpg",
  },
]
export default function dashboard(props) {
  const [open, setOpen] = useState(false)
  function closeModalReady() {
    setOpen(false)
  }

  function openModalReady() {
    setOpen(true)
  }
  const raspi = props.data
  console.log("DATA", raspi)
  return (
    <div className="bg-white">
      <Navbar />
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-xl font-semibold text-gray-900">
              Captured Images
            </h1>
            <p className="mt-2 text-sm text-gray-700">
              A list of all the captured images from the RFID including their id
              and image.
            </p>
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-yellow-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 sm:w-auto"
            >
              Add
            </button>
          </div>
        </div>
        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        Key ID
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Date & Time
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Image
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        RFU ID
                      </th>
                      <th
                        scope="col"
                        className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                      >
                        <span className="sr-only">Delete</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {list.map((capture) => (
                      <tr key={capture.email}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0"></div>
                            <div className="ml-4">
                              <div className="font-medium text-gray-900">
                                {capture.keyid}
                              </div>
                              <div className="text-gray-500">
                                {capture.email}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <div className="text-gray-900">{capture.date}</div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                            Active
                          </span>
                        </td>

                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <div className=" items-center grid grid-cols-1">
                            <ModalImage
                              className="h-10 w-10 rounded-full"
                              small={capture.image}
                              large={capture.image}
                              alt={capture.keyid}
                              showRotate={true}
                            ></ModalImage>
                            <div className="text-yellow-600 hover:text-yellow-900 ml-1 ">
                              View
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {capture.rfuid}
                        </td>
                        <td className="relative  whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                          <a
                            href="#"
                            className="text-yellow-600 hover:text-yellow-900 px-2"
                          >
                            Delete{" "}
                            <span className="sr-only">, {capture.name}</span>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
