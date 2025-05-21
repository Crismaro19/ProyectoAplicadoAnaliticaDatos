import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import axios from "axios";
import { useEffect, useState } from "react";
import { whereCluster } from "../db/filtrarCluster";
import { useGranularidad } from "../appContext/GranularidadContext";

// Registrar los componentes de Chart.js
ChartJS.register(
  BarElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend
);

interface consulta {
  label: string;
  valor: number;
}

export function ChartProvisionGeneral() {
  const [info, setinfo] = useState<consulta[]>([]);
  const where = whereCluster();
  const { granularidad } = useGranularidad();

  const queryCluster = `SELECT cast(Cluster as char) label, avg(Provision_general) valor FROM dataSetMIAD ${where} GROUP BY Cluster ORDER BY Cluster asc`;
  const queryMunicipio = `SELECT Municipio label, Provision_general valor FROM dataSetMIAD ${where} ORDER BY valor desc`;

  const query = granularidad === "Cluster" ? queryCluster : queryMunicipio;

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/bd/${query}`)
      .then((res) => setinfo(res.data))
      .catch((err) => console.error(err));
  }, [where, granularidad]);

  // Prepara los datos para Chart.js
  const chartData = {
    labels: info.map((item) => item.label),
    datasets: [
      {
        label: "Provision General",
        data: info.map((item) => item.valor),
        fill: false,
        backgroundColor: "rgb(75, 192, 192)",
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
        text: `Provision General por ${granularidad}`,
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
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
}
