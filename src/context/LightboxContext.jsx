import { createContext, useContext, useState, useCallback } from "react";

const LightboxContext = createContext(null);

export const LightboxProvider = ({ children }) => {
  const [image, setImage] = useState(null);

  const openLightbox = useCallback((src, alt = "") => {
    setImage({ src, alt });
  }, []);

  const closeLightbox = useCallback(() => {
    setImage(null);
  }, []);

  return (
    <LightboxContext.Provider value={{ image, openLightbox, closeLightbox }}>
      {children}
    </LightboxContext.Provider>
  );
};

export const useLightbox = () => {
  const ctx = useContext(LightboxContext);
  if (!ctx) {
    throw new Error("useLightbox debe usarse dentro de un LightboxProvider");
  }
  return ctx;
};
