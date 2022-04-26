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

export default function Footer() {
  return (
    <div className="bg-white">
      <footer
        className="absolute w-full bg-yellow-400 rounded-t-3xl"
        aria-labelledby="footer-heading"
      >
        <div className="bg-cta">
          <div className="grid justify-center gap-6 sm:gap-8 px-6 max-w-7xl mx-auto py-4 sm:py-6">
            <div className="mt-6">
              <img
                src="https://res.cloudinary.com/tip/image/upload/v1650699584/finalproject_embeddedsystem/surveillance-camera-filming-a-robber-svgrepo-com_mqxp9t.svg"
                width={70}
                height={70}
              />
            </div>
          </div>
        </div>
        <div className="text-center text-xs font-semibold text-yellow-900">
          "Your life is under Our Security"
        </div>

        <div className=" mt-4 items-center md:justify-between max-w-7xl mx-auto py-1 text-center ">
          <div className="flex gap-9 justify-center md:order-2">
            {navigation.socialLink.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-gray-300"
              >
                <span className="sr-only">{item.name}</span>
                <img src={item.icon} className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <div className="mt-2 grid md:flex md:justify-center gap-2 sm:gap-4 px-6 max-w-7xl mx-auto py-3 sm:py-2">
            <a
              className="text-center text-xs font-medium text-yellow-900"
              href="/"
            >
              Enter the portal
            </a>
            <a
              className="text-center text-xs font-medium text-yellow-900"
              href="/aboutTheProject"
            >
              Understand more
            </a>
            <a
              className="text-center text-xs font-medium text-yellow-900"
              href="/aboutTheDevelopers"
            >
              Get to know us
            </a>
          </div>
          <div className="mt-2 grid  gap-4  px-6 max-w-7xl mx-auto py-3">
            <div className="footer-border"></div>
            <p className="mt-4 text-center text-xs font-normal text-white md:mt-0 md:order-1">
              © 2022 Quijano-Reyes Partnership, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
