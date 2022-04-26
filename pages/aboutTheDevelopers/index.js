import Header from "../../components/Container/header"
import Section from "../../components/Container/section"
import Footer from "../../components/Container/footer"
import Danielle from "../../components/Content/aboutTheDevelopers/danielle"
import JonMarco from "../../components/Content/aboutTheDevelopers/jonmarco"
import AboutUs from "../../components/Content/aboutTheDevelopers/aboutus"

export default function homepage() {
  return (
    <div className="bg-white">
      {" "}
      <Header />
      <Section />
      <AboutUs />
      <Danielle />
      <JonMarco />
      <Footer />
    </div>
  )
}
