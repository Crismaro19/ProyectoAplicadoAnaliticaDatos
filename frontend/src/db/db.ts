// Get the client
import * as mysql from "mysql2/promise";

export async function connBd() {
  // Crear conexión
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "mi_usuario",
    password: "mi_password",
    database: "mi_base_de_datos",
  });

  console.log("Conexión exitosa");

  return connection;
}

export async function endBd(connection: any) {
  await connection.end();
  console.log("Conexión cerrada");
}
