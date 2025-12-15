import MetaPixel from "./components/tracking/MetaPixel";
import AppRouter from "./router/AppRouter";
import { useEffect } from "react";
import { initMetaPixel } from "./analytics/metaPixel";

function App() {
  useEffect(() => {
    initMetaPixel();
  }, []);

  return (
    <>
      <MetaPixel />
      <AppRouter />
    </>
  )
}

export default App
