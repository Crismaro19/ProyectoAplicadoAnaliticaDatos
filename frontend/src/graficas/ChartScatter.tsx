import { Scatter } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import axios from "axios";
import { useEffect, useState } from "react";

// Registrar los componentes de Chart.js
ChartJS.register(PointElement, LinearScale, Title, Tooltip, Legend);

interface consulta {
  Municipio: string;
  CANTIDAD_OPERACIONES: number;
  MONTO_OPERACIONES: number;
}

export function ChartTransacciones() {
  const [info, setinfo] = useState<consulta[]>([]);

  const query =
    "SELECT Municipio, CANTIDAD_OPERACIONES, MONTO_OPERACIONES FROM dataSetMIAD";

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/bd/${query}`)
      .then((res) => {
        const dataFiltrada = res.data.filter(
          (item: consulta) => item.Municipio !== "BOGOTÁ, D.C."
        );
        setinfo(dataFiltrada);
      })
      .catch((err) => console.error(err));
  }, []);

  // Prepara los datos para Chart.js
  const chartData = {
    datasets: [
      {
        label: "Operaciones por municipio",
        data: info.map((item) => ({
          x: item.CANTIDAD_OPERACIONES,
          y: item.MONTO_OPERACIONES,
          municipio: item.Municipio,
        })),
        backgroundColor: "rgba(75, 192, 192, 1)",
        pointRadius: 6,
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
        text: "Cantidad vs Monto de operaciones por municipio",
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            const punto = context.raw;
            return `Municipio: ${punto.municipio} | Cantidad: ${punto.x} | Monto: ${punto.y}`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Cantidad de operaciones",
        },
      },
      y: {
        title: {
          display: true,
          text: "Monto de operaciones",
        },
      },
    },
  };

  return (
    <div className="card bg-base-100 shadow-md p-6">
      <h2 className="text-xl font-bold mb-4">📈 Grafico de Barras</h2>
      <Scatter data={chartData} options={chartOptions} />
    </div>
  );
}
