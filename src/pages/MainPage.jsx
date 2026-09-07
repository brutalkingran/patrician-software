import MainComponent from "../components/MainComponent";
import ExpertsComponents from "../components/ExpertsComponents";
import ChosenUsComponent from "../components/ChosenUsComponent";
import MarketingSection from "../components/MarketingSection";
import PricesComponent from "../components/PricesComponent";
import FooterComponent from "../components/FooterComponent";
import ContactComponent from "../components/ContactComponent";
import FooterNico from "../components/FooterNico";
import EliteSection from "../components/EliteSection";
import PlanPage from "./PlanPage";
import WebsiteSection from "../components/WebsiteSection";

const MainPage = () => {
  return (
    <>
      <MainComponent />
      <ChosenUsComponent/>

      <EliteSection index={0} />
      <WebsiteSection index={1} />
      <MarketingSection index={0} />

      <PlanPage />
      <PricesComponent />
      <FooterComponent />
      <ContactComponent />
      <FooterNico />
    </>
  )
}

export default MainPage