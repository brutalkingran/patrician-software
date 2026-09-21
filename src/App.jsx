import { HelmetProvider } from "react-helmet-async";
import MetaPixel from "./components/tracking/MetaPixel";
import AppRouter from "./router/AppRouter";
import WhatsAppFloatingButton from "./components/WhatsAppFloatingButton";
import ImageLightbox from "./components/ImageLightbox";
import { LightboxProvider } from "./context/LightboxContext";
import { useEffect } from "react";
import { initMetaPixel } from "./analytics/metaPixel";

function App() {
  useEffect(() => {
    initMetaPixel();
  }, []);

  return (
    <HelmetProvider>
      <LightboxProvider>
        <MetaPixel />
        <AppRouter />
        <WhatsAppFloatingButton />
        <ImageLightbox />
      </LightboxProvider>
    </HelmetProvider>
  )
}

export default App
