import Modelo from "./modelo/modelo";
import { ClusterProvider } from "./appContext/ClusterContext";
import { SeleccionarCluster } from "./db/seleccionarCluster";
import { ChartSection } from "./graficas/ChartSection";
import { DatosDinamicos } from "./datosDinamicos/datosDinamicos";
import { MunicipioProvider } from "./appContext/MunicipioContext";
import { SeleccionarMunicipio } from "./db/seleccionarMunicipio";
import { GranularidadProvider } from "./appContext/GranularidadContext";
import { SeleccionarGranularidad } from "./db/seleccionarGranularidad";

function App() {
  return (
    <MunicipioProvider>
      <ClusterProvider>
        <GranularidadProvider>
          <div className="flex h-screen bg-base-200 overflow-hidden">
            {/* Contenido principal */}
            <div className="flex flex-col flex-1 overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between mb-6">
                  {/* Sección de titulo */}
                  <h1 className="text-3xl font-bold">
                    Dashboard Apropiación Digital
                  </h1>
                  <Modelo />
                </div>
                {/* Sección de estadísticas */}
                <DatosDinamicos />
                {/* Seleccionar Cluster */}
                <div className="flex gap-5">
                  <SeleccionarCluster />
                  <SeleccionarMunicipio />
                  <SeleccionarGranularidad />
                </div>
                {/* Sección de gráficos */}
                <ChartSection />
              </div>
            </div>
          </div>
        </GranularidadProvider>
      </ClusterProvider>
    </MunicipioProvider>
  );
}

export default App;
