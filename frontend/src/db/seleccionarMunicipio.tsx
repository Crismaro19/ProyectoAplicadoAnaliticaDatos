import axios from "axios";
import { useEffect, useState } from "react";
import { useCluster } from "../appContext/ClusterContext";
import { useMunicipio } from "../appContext/MunicipioContext";

interface consulta {
  Municipio: string;
}

export function SeleccionarMunicipio() {
  const [info, setinfo] = useState<consulta[]>([]);
  const { setMunicipio } = useMunicipio();

  const { cluster } = useCluster();

  useEffect(() => {
    const where =
      cluster === "Selecciona Cluster" ? "" : `WHERE cluster = '${cluster}'`;

    const query = `SELECT Municipio FROM dataSetMIAD ${where} GROUP BY Municipio ORDER BY Municipio asc`;

    axios
      .get(`http://127.0.0.1:8000/bd/${query}`)
      .then((res) => setinfo(res.data))
      .catch((err) => console.error(err));
  }, [cluster]);

  return (
    <div>
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Seleccionar el Municipio:</legend>
        <select
          defaultValue="Selecciona Municipio"
          className="select"
          onChange={(e) => setMunicipio(e.target.value)}
        >
          <option disabled={false}>Selecciona Municipio</option>
          {info.map((item) => (
            <option key={item.Municipio}>{item.Municipio}</option>
          ))}
        </select>
      </fieldset>
    </div>
  );
}
