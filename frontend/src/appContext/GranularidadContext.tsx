import React, { createContext, useContext, useState } from "react";

type GranularidadContextType = {
  granularidad: string;
  setGranularidad: (value: string) => void;
};

const GranularidadContext = createContext<GranularidadContextType | undefined>(
  undefined
);

export const GranularidadProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [granularidad, setGranularidad] = useState<string>("Cluster"); // valor inicial

  return (
    <GranularidadContext.Provider value={{ granularidad, setGranularidad }}>
      {children}
    </GranularidadContext.Provider>
  );
};

export const useGranularidad = () => {
  const context = useContext(GranularidadContext);
  if (!context)
    throw new Error(
      "useGranularidad debe usarse dentro de un GranularidadProvider"
    );
  return context;
};
