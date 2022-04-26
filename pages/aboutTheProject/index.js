import Header from "../../components/Container/header"
import Section from "../../components/Container/section"
import Footer from "../../components/Container/footer"
import TabsAboutProject from "../../components/Tabs/tabsAboutProject"
import Introduction from "../../components/Content/aboutTheProject/introduction"
import Specifications from "../../components/Content/aboutTheProject/specification"
import Architecture from "../../components/Content/aboutTheProject/architecture"
export default function homepage() {
  return (
    <div className="bg-white">
      {" "}
      <Header />
      <Section />
      <TabsAboutProject />
      <div id="introduction">
        <Introduction />
      </div>{" "}
      <div id="specifications">
        {" "}
        <Specifications />
      </div>
      <div id="architecture">
        <Architecture />
      </div>
      <Footer />
    </div>
  )
}
