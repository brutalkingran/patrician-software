import { createContext, useContext, useState } from "react";

const MuralContext = createContext();

export const MuralProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  return (
    <MuralContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </MuralContext.Provider>
  );
};

export const useMural = () => useContext(MuralContext);