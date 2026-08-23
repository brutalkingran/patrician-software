import MainComponent from "../components/MainComponent";
import PatricianComponent from "../components/PatricianComponent";
import ExpertsComponents from "../components/ExpertsComponents";
import ChosenUsComponent from "../components/ChosenUsComponent";
import WebsiteComponent from "../components/WebsiteComponent";
import MarketingComponent from "../components/MarketingComponent";
import PricesComponent from "../components/PricesComponent";
import FooterComponent from "../components/FooterComponent";
import ContactComponent from "../components/ContactComponent";
import FooterNico from "../components/FooterNico";

const MainPage = () => {
  return (
    <>
      <MainComponent />
      <PatricianComponent />
      <ExpertsComponents />
      <WebsiteComponent />
      <MarketingComponent />
      <ChosenUsComponent/>
      <PricesComponent />
      <FooterComponent />
      <ContactComponent />
      <FooterNico />
    </>
  )
}

export default MainPage