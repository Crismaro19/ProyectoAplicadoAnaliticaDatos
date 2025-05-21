import { useEffect, useState } from "react";
import { whereCluster } from "../db/filtrarCluster";
import axios from "axios";

interface consulta {
  Cantidad: number;
}

export function CantidadMunicipiosCluster() {
  const [info, setinfo] = useState<consulta[]>([]);
  const where = whereCluster();
  const query = `SELECT count(*) as Cantidad FROM dataSetMIAD ${where}`;

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/bd/${query}`)
      .then((res) => setinfo(res.data))
      .catch((err) => console.error(err));
  }, [where]);

  return (
    <div className="card card-border bg-base-100 w-130 h-40 shadow-md">
      <div className="card-body flex flex-col justify-center">
        <h2 className="card-title mb-4">Municipios en Cluster</h2>
        <p className="text-2xl font-bold">🏙️ {info?.[0]?.Cantidad}</p>
      </div>
    </div>
  );
}
