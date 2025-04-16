import { ChartPrimary } from "./graficas/ChartPrimary";
import Modelo from "./modelo/modelo";

function App() {
  return (
    <div className="flex h-screen bg-base-200">
      {/* Sidebar */}
      <Sidebar />

      {/* Contenido principal */}
      <div className="flex flex-col flex-1">
        <Navbar />

        <div className="p-6">
          <div className="mb-6">
            <Modelo />
          </div>

          <h1 className="text-3xl font-bold">Dashboard</h1>

          {/* Sección de estadísticas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <StatsCard title="Usuarios Activos" value="1,234" icon="👤" />
            <StatsCard title="Ventas" value="$12,345" icon="💰" />
            <StatsCard title="Pedidos" value="456" icon="📦" />
          </div>

          {/* Sección de gráficos */}
          <ChartSection />
        </div>
      </div>
    </div>
  );
}

const Sidebar = () => {
  return (
    <div className="w-64 bg-base-300 h-full p-4">
      <h2 className="text-xl font-bold">📊 Dashboard</h2>
      <ul className="menu mt-4">
        <li>
          <a>🏠 Inicio</a>
        </li>
        <li>
          <a>📈 Estadísticas</a>
        </li>
        <li>
          <a>⚙ Configuración</a>
        </li>
      </ul>
    </div>
  );
};

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-md px-4">
      <div className="flex-1">
        <a className="text-xl font-bold">🚀 Admin Panel</a>
      </div>
    </div>
  );
};

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, icon }) => {
  return (
    <div className="card bg-base-100 shadow-md p-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-2xl font-bold mt-2">
        {icon} {value}
      </p>
    </div>
  );
};

const ChartSection = () => {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold">📊 Reportes</h2>
      <div className="card bg-base-100 shadow-md p-4 mt-2">
        <p>
          Aquí puedes agregar gráficos con librerías como Chart.js o Recharts.
        </p>
        <ChartPrimary />
      </div>
    </div>
  );
};

export default App;
