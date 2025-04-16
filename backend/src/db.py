import pymysql

def consulta():
    # Configuración de conexión
    conn = pymysql.connect(
        host="mi-mysql",
        user="mi_usuario",
        password="mi_password",
        database="mi_base_de_datos",
        charset="utf8mb4",
        cursorclass=pymysql.cursors.DictCursor  # Para obtener resultados como diccionarios
    )

    # Crear un cursor
    cursor = conn.cursor()

    # Ejecutar una consulta
    cursor.execute("SELECT Customer_Age, sum(Total_Trans_Amt) sum_trans_amt  FROM bank_churners group by Customer_Age order by Customer_Age ")

    res = cursor.fetchall()

    # Cerrar conexión
    cursor.close()
    conn.close()

    return res
