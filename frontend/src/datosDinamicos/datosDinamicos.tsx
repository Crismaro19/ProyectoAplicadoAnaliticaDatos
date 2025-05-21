import { CantidadMunicipiosCluster } from "./cantidadMunicipios";
import { NombresMunicipiosCluster } from "./nombreMunicipios";

export function DatosDinamicos() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 mb-2">
        <div className="card card-border bg-base-100 w-130">
          <div className="card-body">
            <h2 className="card-title mb-4">Municipios Encuestados</h2>
            <p className="text-2xl font-bold ">🏙️ 81</p>
          </div>
        </div>

        <CantidadMunicipiosCluster />
        <NombresMunicipiosCluster />
      </div>
    </div>
  );
}
