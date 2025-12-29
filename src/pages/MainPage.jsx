import MainComponent from "../components/MainComponent";
import PatricianComponent from "../components/PatricianComponent";
import ExpertsComponents from "../components/ExpertsComponents";
import ChosenUsComponent from "../components/ChosenUsComponent";
import WebsiteComponent from "../components/WebsiteComponent";
import MarketingComponent from "../components/MarketingComponent";
import PricesComponent from "../components/PricesComponent";

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
    </>
  )
}

export default MainPage