import { useEffect } from "react"
import { useRouter } from "next/router"
export default function loading() {
  const router = useRouter()
  useEffect(() => {
    setTimeout(() => {
    router.push("/surveillancedashboard")
    }, 6000)
  }, [])
  return (
    <div className="bg-yellow-500 w-full h-screen full ">
      <div className="grid items-center place-items-center">
        <div className="mt-10 pb-5">
          <img
            className="h-20 "
            src="https://res.cloudinary.com/tip/image/upload/v1650699584/finalproject_embeddedsystem/surveillance-camera-filming-a-robber-svgrepo-com_mqxp9t.svg"
          />
        </div>
        <div class="loader "> </div>
        <h1 className="text-[20px] gap-2 flex">
          Loading <div class="dots-3"></div>
        </h1>
      </div>
    </div>
  )
}
