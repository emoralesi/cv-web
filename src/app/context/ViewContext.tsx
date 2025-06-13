"use client";

import React, { createContext, useContext, useState } from "react";

interface ViewContextProps {
  isInView: boolean;
  setIsInView: (value: boolean) => void;
}

const ViewContext = createContext<ViewContextProps | undefined>(undefined);

export const ViewProvider = ({ children }: { children: React.ReactNode }) => {
  const [isInView, setIsInView] = useState(true); // Valor por defecto

  return (
    <ViewContext.Provider value={{ isInView, setIsInView }}>
      {children}
    </ViewContext.Provider>
  );
};

export const useView = () => {
  const context = useContext(ViewContext);
  if (!context) throw new Error("useView must be used within a ViewProvider");
  return context;
};
