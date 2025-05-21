import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import axios from "axios";
import { useEffect, useState } from "react";
import { whereCluster } from "../db/filtrarCluster";

// Registrar los componentes de Chart.js
ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend
);

interface consulta {
  Municipio: string;
  Cobertura_edu_total: number;
}

export function ChartLine() {
  const [info, setinfo] = useState<consulta[]>([]);
  const where = whereCluster();
  const query = `SELECT Municipio, Cobertura_edu_total FROM dataSetMIAD ${where} order by Cobertura_edu_total desc`;

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/bd/${query}`)
      .then((res) => setinfo(res.data))
      .catch((err) => console.error(err));
  }, [where]);

  // Prepara los datos para Chart.js
  const chartData = {
    labels: info.map((item) => item.Municipio),
    datasets: [
      {
        label: "Porcentaje de educación",
        data: info.map((item) => item.Cobertura_edu_total * 100),
        fill: true,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Porcentaje de educación por municipio ",
        font: {
          size: 24,
          weight: "bold" as const,
        },
        color: "#fff",
      },
    },
  };

  return (
    <div className="card bg-base-100 shadow-md p-6">
      <Line data={chartData} options={chartOptions} />
    </div>
  );
}
