import { connBd, endBd } from "../db/db";

describe("Prueba de consulta MySQL", () => {
  it("probar conexion", async () => {
    // crear conexion con bd
    const conn = await connBd();

    // Consulta simple
    const [results1] = await conn.query(
      "SELECT Customer_Age, sum(Total_Trans_Amt) sum_trans_amt  FROM bank_churners group by Customer_Age order by Customer_Age "
    );
    console.log("Resultados directos:", results1);

    // finalizar connexion con bd
    endBd(conn);

    expect(results1).toBeTruthy();
  });
});
