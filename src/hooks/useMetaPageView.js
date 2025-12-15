import { useEffect } from "react"
import { useLocation } from "react-router"
import { trackPageView } from "../analytics/metaPixel"

export function useMetaPageView() {
  const location = useLocation()

  useEffect(() => {
    trackPageView()
  }, [location])
}
