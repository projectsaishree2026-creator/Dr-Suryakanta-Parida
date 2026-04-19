'use client';

import { createContext, useContext, useState, type ReactNode } from 'react';

type AppContextType = {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (v: boolean) => void;
};

const AppContext = createContext<AppContextType>({
  mobileMenuOpen: false,
  setMobileMenuOpen: () => {},
});

export function AppProvider({ children }: { children: ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <AppContext.Provider value={{ mobileMenuOpen, setMobileMenuOpen }}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);
