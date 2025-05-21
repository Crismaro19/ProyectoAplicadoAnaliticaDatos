import React, { createContext, useContext, useState } from "react";

type ClusterContextType = {
  cluster: string;
  setCluster: (value: string) => void;
};

const ClusterContext = createContext<ClusterContextType | undefined>(undefined);

export const ClusterProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cluster, setCluster] = useState<string>("Selecciona Cluster"); // valor inicial

  return (
    <ClusterContext.Provider value={{ cluster, setCluster }}>
      {children}
    </ClusterContext.Provider>
  );
};

export const useCluster = () => {
  const context = useContext(ClusterContext);
  if (!context)
    throw new Error("useCluster debe usarse dentro de un ClusterProvider");
  return context;
};
