import pymysql

def consulta(query:str):
    # Configuración de conexión
    conn = pymysql.connect(
        host="mi-mysql",
        # host="localhost",
        user="mi_usuario",
        password="mi_password",
        database="mi_base_de_datos",
        charset="utf8mb4",
        cursorclass=pymysql.cursors.DictCursor 
    )

    # Crear un cursor
    cursor = conn.cursor()

    # Ejecutar una consulta
    cursor.execute(query)

    res = cursor.fetchall()

    # Cerrar conexión
    cursor.close()
    conn.close()

    return res
