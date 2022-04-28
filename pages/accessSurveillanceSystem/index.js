import Header from "../../components/Container/header"
import Section from "../../components/Container/section"
import Footer from "../../components/Container/footer"
import Portal from "../../components/Content/acessSurveillanceSystem/portal"
export default function homepage() {
  return (
    <div className="bg-white">
      {" "}
      <Header />
      <Section />
    <Portal />
      <Footer />
    </div>
  )
}
