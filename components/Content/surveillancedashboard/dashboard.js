import Router, { useRouter } from "next/router"
import Navbar from "../../Container/navbar"
import Table from "./table"
export default function Dashboard() {
  const router = useRouter()
  return (
    <>
      <div>
        {" "}
        <Navbar />
        <Table />
      </div>
    </>
  )
}
