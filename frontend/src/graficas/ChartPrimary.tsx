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

export interface consulta {
  Customer_Age: number;
  sum_trans_amt: number;
}

export function ChartPrimary() {
  const [info, setinfo] = useState<consulta[]>([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/bd/")
      .then((res) => setinfo(res.data))
      .catch((err) => console.error(err));
  }, []);

  // Prepara los datos para Chart.js
  const chartData = {
    labels: info.map((item) => item.Customer_Age),
    datasets: [
      {
        label: "Suma de transacciones por edad",
        data: info.map((item) => item.sum_trans_amt),
        fill: false,
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
        text: "Total de transacciones por edad del cliente",
      },
    },
  };

  return (
    <div className="card bg-base-100 shadow-md p-6">
      <h2 className="text-xl font-bold mb-4">📈 Ventas Mensuales</h2>
      <Line data={chartData} options={chartOptions} />
    </div>
  );
}
