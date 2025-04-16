import { useEffect, useState } from "react";
import axios from "axios";

interface Post {
  message: string;
}

const Modelo: React.FC = () => {
  const [data, setData] = useState<Post>();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  if (!data || error) return <p>Error: {error}</p>;

  return <div>{data.message}</div>;
};

export default Modelo;
