import { Helmet } from "react-helmet-async";
import MainComponent from "../components/MainComponent";
import ChosenUsComponent from "../components/ChosenUsComponent";
import MarketingSection from "../components/MarketingSection";
import PricesComponent from "../components/PricesComponent";
import ContactComponent from "../components/ContactComponent";
import FooterNico from "../components/FooterNico";
import EliteSection from "../components/EliteSection";
import PlanPage from "./PlanPage";
import WebsiteSection from "../components/WebsiteSection";
import ProjectsSection from "../components/ProjectsSection";
import MobileNavMenu from "../components/MobileNavMenu";

const MainPage = () => {
  return (
    <>
      <Helmet>
        <title>Patrician Software - Desarrollo Web y Marketing Digital en Catamarca y Córdoba</title>
        <meta
          name="description"
          content="Desarrollo web profesional, diseño moderno y soluciones digitales personalizadas. Sitios rápidos, seguros y optimizados para SEO. Atención en Catamarca y Córdoba, Argentina."
        />
        <link rel="canonical" href="https://patrician-software.com/" />
      </Helmet>

      <MobileNavMenu />

      <main>
        <MainComponent />
        <ChosenUsComponent/>

        <EliteSection/>
        <WebsiteSection/>
        <MarketingSection/>
        <ProjectsSection/>

        <PlanPage embedded />
        <PricesComponent />
        <ContactComponent />
      </main>
      <FooterNico />
    </>
  )
}

export default MainPage