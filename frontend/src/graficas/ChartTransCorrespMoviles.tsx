import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import axios from "axios";
import { useEffect, useState } from "react";
import { whereCluster } from "../db/filtrarCluster";
import { useGranularidad } from "../appContext/GranularidadContext";

// Registrar los componentes de Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

interface consulta {
  label: string;
  valor: number;
}

export function ChartTransCorrespMoviles() {
  const [info, setinfo] = useState<consulta[]>([]);
  const where = whereCluster();
  const { granularidad } = useGranularidad();

  const queryCluster = `SELECT cast(Cluster as char) label, sum(Total_Numero_Transacciones_corresponsal_movil ) valor FROM dataSetMIAD ${where} GROUP BY Cluster ORDER BY Cluster asc`;
  const queryMunicipio = `SELECT Municipio label, Total_Numero_Transacciones_corresponsal_movil valor FROM dataSetMIAD ${where} ORDER BY valor desc`;

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
        label: "Transacciones Corresponsal Movil",
        data: info.map((item) => item.valor),
        backgroundColor: info.map(
          (_, i) => `hsl(${(i * 360) / info.length}, 70%, 60%)`
        ), // genera colores HSL distribuidos
        borderColor: "#fff",
        borderWidth: 1,
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
        text: `Transacciones Corresponsal Movil por ${granularidad}`,
        font: {
          size: 24,
          weight: "bold" as const,
        },
        color: "#fff",
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            const value = context.raw;
            const data = context.chart.data.datasets[0].data;
            const total = data.reduce(
              (acc: number, val: number) => acc + val,
              0
            );
            const percentage = ((value / total) * 100).toFixed(1);
            return `${value} (${percentage}%)`;
          },
        },
      },
    },
  };

  return (
    <div className="card bg-base-100 shadow-md p-6">
      <Pie data={chartData} options={chartOptions} />
    </div>
  );
}
