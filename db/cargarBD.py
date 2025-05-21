# Cargar librerias 
import time
import pandas as pd
from sqlalchemy import create_engine
from sqlalchemy.exc import OperationalError

# Datos de Conexion BD
usuario = 'mi_usuario'
contrasena = 'mi_password'
host = 'mysql'  # nombre del servicio MySQL
# host = 'localhost'
puerto = 3306
base_de_datos = 'mi_base_de_datos'

while True:
    try:
        # Crear conexion BD
        engine = create_engine(f'mysql+pymysql://{usuario}:{contrasena}@{host}:{puerto}/{base_de_datos}')
        with engine.connect():
            print("Conectado a la base de datos")
            break
    except OperationalError:
        print("Esperando a que MySQL esté disponible...")
        time.sleep(5)
# cargar csv
df = pd.read_csv('DataSetFinalProyectoGradoMIAD.csv')
# crear tabla con datos
df.to_sql('dataSetMIAD', con=engine, if_exists='replace', index=False)
print("Datos cargados exitosamente")
