import { createContext, useContext, useState } from "react";

const MuralContext = createContext();

export const MuralProvider = ({ children }) => {
  // Color por defecto (por ejemplo, el blanco de tu tema)
  const [muralColor, setMuralColor] = useState("var(--color-ps-white)");

  return (
    <MuralContext.Provider value={{ muralColor, setMuralColor }}>
      {children}
    </MuralContext.Provider>
  );
};

export const useMural = () => useContext(MuralContext);