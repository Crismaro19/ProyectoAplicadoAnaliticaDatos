import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { FeatureCollection, Feature, Point } from "geojson";
import axios from "axios";
import { whereCluster } from "../db/filtrarCluster";

const municipiosResaltados = ["CHIA"];

interface consulta {
  Municipio: string;
}

const ColombiaMap: React.FC = () => {
  const [geoData, setGeoData] = useState<FeatureCollection<Point> | null>(null);
  const [info, setinfo] = useState<consulta[]>([]);
  const where = whereCluster();

  const query = `SELECT Municipio FROM dataSetMIAD ${where}`;

  useEffect(() => {
    fetch("/colombia.geojson")
      .then((res) => res.json())
      .then((data: FeatureCollection<Point>) => setGeoData(data))
      .catch(console.error);

    axios
      .get(`http://127.0.0.1:8000/bd/${query}`)
      .then((res) => setinfo(res.data))
      .catch((err) => console.error(err));
  }, [where]);

  return (
    <div>
      <h2 className="mb-6 text-2xl"> 🗺️ Grafica Geografica de Clusters</h2>
      <MapContainer
        center={[4.5709, -74.2973]}
        zoom={5.5}
        style={{ height: "90vh", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution="&copy; OpenStreetMap contributors &copy; CARTO"
        />
        {geoData &&
          geoData.features.map((feature, idx) => {
            const nombre = feature.properties?.nombre || "Sin nombre";
            const coords = feature.geometry.coordinates;
            // Leaflet usa [lat, lng] pero GeoJSON usa [lng, lat]
            const position: [number, number] = [coords[1], coords[0]];
            const isResaltado = info
              .map((item) => item.Municipio)
              .includes(nombre);

            return (
              <CircleMarker
                key={idx}
                center={position}
                radius={isResaltado ? 12 : 3}
                pathOptions={{
                  color: isResaltado ? "rgb(75, 192, 192)" : "gray", // color del borde
                  fillColor: isResaltado ? "rgb(75, 192, 192)" : "gray", // color del relleno
                }}
                fillOpacity={0.7}
              >
                <Popup>{nombre}</Popup>
              </CircleMarker>
            );
          })}
      </MapContainer>
    </div>
  );
};

export default ColombiaMap;
