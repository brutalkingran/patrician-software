import { HelmetProvider } from "react-helmet-async";
import MetaPixel from "./components/tracking/MetaPixel";
import AppRouter from "./router/AppRouter";
import WhatsAppFloatingButton from "./components/WhatsAppFloatingButton";
import { useEffect } from "react";
import { initMetaPixel } from "./analytics/metaPixel";

function App() {
  useEffect(() => {
    initMetaPixel();
  }, []);

  return (
    <HelmetProvider>
      <MetaPixel />
      <AppRouter />
      <WhatsAppFloatingButton />
    </HelmetProvider>
  )
}

export default App
