import { useEffect, useState } from "react";
import { whereCluster } from "../db/filtrarCluster";
import axios from "axios";

interface consulta {
  Municipio: string;
}

export function NombresMunicipiosCluster() {
  const [info, setinfo] = useState<consulta[]>([]);
  const where = whereCluster();
  const query = `SELECT Municipio FROM dataSetMIAD ${where} order by Municipio asc`;

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/bd/${query}`)
      .then((res) => setinfo(res.data))
      .catch((err) => console.error(err));
  }, [where]);

  return (
    <div className="card card-border bg-base-100 w-130 h-40 shadow-md">
      <div className="card-body overflow-y-auto">
        <h2 className="card-title">Municipios en Cluster</h2>
        <div className="overflow-y-auto max-h-30 pr-2">
          {info.map((item) => (
            <p className="">🏙️ {item.Municipio} </p>
          ))}
        </div>
      </div>
    </div>
  );
}
