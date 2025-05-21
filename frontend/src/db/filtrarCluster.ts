import { useCluster } from "../appContext/ClusterContext";
import { useMunicipio } from "../appContext/MunicipioContext";

export const whereCluster = () => {
  const { cluster } = useCluster();
  const { municipio } = useMunicipio();

  if (cluster === "Selecciona Cluster" && municipio === "Selecciona Municipio")
    return "";

  if (cluster !== "Selecciona Cluster" && municipio === "Selecciona Municipio")
    return `where Cluster = ${cluster}`;

  if (cluster === "Selecciona Cluster" && municipio !== "Selecciona Municipio")
    return `where Municipio = '${municipio}'`;

  return `where Cluster = ${cluster} and Municipio = '${municipio}'`;
};
