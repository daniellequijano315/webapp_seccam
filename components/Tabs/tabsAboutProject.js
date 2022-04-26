/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
const tabs = [
  { name: "I. Introduction", href: "#introduction", current: true },
  {
    name: "II. Project Requirements and Specifications",
    href: "#specifications",
    current: false,
  },
  { name: "III. System Architecture", href: "#architecture", current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function TabsAboutProject() {
  return (
    <div>
        
      <div className="text-center -mt-20">
        <h1 className="pb-2" >
          Table of Content
        </h1>
        <nav
          className="relative z-30 rounded-lg shadow flex divide-x divide-gray-200 border-2 0"
          aria-label="Tabs"
        >
          {tabs.map((tab, tabIdx) => (
            <a
              key={tab.name}
              href={tab.href}
              className={classNames(
                tabIdx === 0 ? "rounded-l-lg" : "",
                tabIdx === tabs.length - 1 ? "rounded-r-lg" : "",
                "group relative min-w-0 flex-1 bg-[#FFD450] overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"
              )}
              aria-current={tab.current ? "page" : undefined}
            >
              <span>{tab.name}</span>
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}
