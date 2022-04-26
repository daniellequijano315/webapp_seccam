/* This example requires Tailwind CSS v2.0+ */
import {
  UserGroupIcon,
  CameraIcon,
  SupportIcon,
} from "@heroicons/react/outline"
const navigation = {
  nav: [
    { name: "Contact Support", href: "#" },
    { name: "(+632) 8845-1111", href: "#" },
  ],
  socialLink: [
    {
      name: "facebook",
      href: "#",
      icon: "https://res.cloudinary.com/tip/image/upload/v1650698703/finalproject_embeddedsystem/icons8-facebook_yvp1rt.svg",
    },
    {
      name: "instagram",
      href: "#",
      icon: "https://res.cloudinary.com/tip/image/upload/v1650698703/finalproject_embeddedsystem/icons8-instagram_kjbl1q.svg",
    },
    {
      name: "linkedin",
      href: "#",
      icon: "https://res.cloudinary.com/tip/image/upload/v1650698703/finalproject_embeddedsystem/icons8-linkedin-circled_tvvxxj.svg",
    },
  ],
}
const supportLinks = [
  {
    name: "Access Surveillance System",
    href: "#",
    description: "Be secure, be aware. Be security aware.",
    urlname: "Enter the portal",
    icon: CameraIcon,
  },
  {
    name: "About the Project",
    href: "/aboutTheProject",
    description:
      "When it comes to security, the world of RFID access control systems can seem quite complicated and indecipherable.",
    urlname: "Understand more",
    icon: SupportIcon,
  },
  {
    name: "About the Developers",
    href: "/aboutTheDevelopers",
    description:
      "Excellence and innovation built into every design. Securing the world – bit by bit.",
    urlname: "Get to know us",
    icon: UserGroupIcon,
  },
]

export default function Section() {
  return (
    <div className="bg-white">
      {/* Overlapping cards */}
      <section
        className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          {supportLinks.map((link) => (
            <div
              key={link.name}
              className="flex flex-col bg-white rounded-2xl shadow-xl"
            >
              <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                <div className="absolute top-0 p-5 inline-block bg-yellow-400 rounded-xl shadow-lg transform -translate-y-1/2">
                  <link.icon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-xl font-medium text-gray-900">
                  {link.name}
                </h3>
                <p className="mt-4 text-base text-gray-500">
                  {link.description}
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                <a
                  href={link.href}
                  className="text-base font-medium text-yellow-700 hover:text-yellow-600"
                >
                  {link.urlname}
                  <span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      
    </div>
  )
}
