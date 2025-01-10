import React, { createContext, useContext, ReactNode, useState } from "react";

// Definiamo il tipo del contesto
interface GlobalContextType {
  logged: boolean;
  setLogged: React.Dispatch<React.SetStateAction<boolean>>;
}

// Creiamo il contesto con un valore predefinito di `undefined`
const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

// Creiamo il provider
export function GlobalProvider({ children }: { children: ReactNode }) {
  const [logged, setLogged] = useState(false);

  // Definiamo i valori che vogliamo fornire ai componenti figli
  const values = { logged, setLogged };

  return (
    <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
  );
}

// Hook personalizzato per accedere al contesto
export function useGlobalContext() {
  const context = useContext(GlobalContext);

  // Se il contesto non è stato fornito, lancia un errore
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }

  return context;
}

export default GlobalProvider;
