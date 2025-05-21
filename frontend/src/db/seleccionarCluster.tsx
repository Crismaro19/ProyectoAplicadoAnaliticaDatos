import axios from "axios";
import { useEffect, useState } from "react";
import { useCluster } from "../appContext/ClusterContext";
import { useMunicipio } from "../appContext/MunicipioContext";

interface consulta {
  Cluster: number;
}

export function SeleccionarCluster() {
  const [info, setinfo] = useState<consulta[]>([]);
  const { setCluster } = useCluster();

  const { municipio } = useMunicipio();

  useEffect(() => {
    const where =
      municipio === "Selecciona Municipio"
        ? ""
        : `WHERE Municipio = '${municipio}'`;

    const query = `SELECT Cluster FROM dataSetMIAD ${where} GROUP BY Cluster ORDER BY Cluster asc`;

    axios
      .get(`http://127.0.0.1:8000/bd/${query}`)
      .then((res) => setinfo(res.data))
      .catch((err) => console.error(err));
  }, [municipio]);

  return (
    <div>
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Seleccionar el Cluster:</legend>
        <select
          defaultValue="Selecciona Cluster"
          className="select"
          onChange={(e) => setCluster(e.target.value)}
        >
          <option disabled={false}>Selecciona Cluster</option>
          {info.map((item) => (
            <option key={item.Cluster}>{item.Cluster}</option>
          ))}
        </select>
      </fieldset>
    </div>
  );
}
