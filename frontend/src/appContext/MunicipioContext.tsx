import React, { createContext, useContext, useState } from "react";

type MunicipioContextType = {
  municipio: string;
  setMunicipio: (value: string) => void;
};

const MunicipioContext = createContext<MunicipioContextType | undefined>(
  undefined
);

export const MunicipioProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [municipio, setMunicipio] = useState<string>("Selecciona Municipio"); // valor inicial

  return (
    <MunicipioContext.Provider value={{ municipio, setMunicipio }}>
      {children}
    </MunicipioContext.Provider>
  );
};

export const useMunicipio = () => {
  const context = useContext(MunicipioContext);
  if (!context)
    throw new Error("useMunicipio debe usarse dentro de un MunicipioProvider");
  return context;
};
