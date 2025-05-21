import { useGranularidad } from "../appContext/GranularidadContext";

export function SeleccionarGranularidad() {
  const { setGranularidad } = useGranularidad();

  return (
    <div>
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Seleccionar Granularidad:</legend>
        <select
          defaultValue="Cluster"
          className="select"
          onChange={(e) => setGranularidad(e.target.value)}
        >
          <option>Cluster</option>
          <option>Municipio</option>
        </select>
      </fieldset>
    </div>
  );
}
