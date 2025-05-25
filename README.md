# 📊 Proyecto Aplicado - Maestría en Inteligencia Analítica de Datos (MIAD)

Este repositorio contiene el proyecto final desarrollado como parte del curso Proyecto aplicado en analítica de datos de la Maestría en Inteligencia Analítica de Datos (MIAD) de la Universidad de los Andes. El objetivo del proyecto es analizar y visualizar patrones de adopción digital en los municipios de Colombia, utilizando técnicas de analisis de datos y modelos de inteligencia artirficial.

## 🏅 Link de Presentación Ejecutiva Caso Apropiación digital

[Presentación Ejecutiva Caso Apropiación digital](https://www.youtube.com/watch?v=OJITuIRtieI)


## ✅ ¿Qué es y qué hace el artefacto?

El sistema desarrollado es una plataforma interactiva compuesta por:

- 🖥️ **Backend**: API REST desarrollada en Python con FastAPI que se conecta a una base de datos MySQL.
- 🌐 **Frontend**: Aplicación en React para visualizar los municipios agrupados en un mapa.
- 🗃️ **Base de datos**: Sistema MySQL con un script automatizado que carga el dataset inicial.
- ⚙️ **Orquestación con Docker**: Facilita la ejecución y despliegue local del sistema completo.

### ✅ Ventajas

- Visualización clara e interactiva de los municipios por nivel de digitalización.
- Agrupamientos (clusters) generados con algoritmos de aprendizaje no supervisado.
- Interfaz intuitiva y accesible desde navegador.
- Dockerizado para una instalación y ejecución sencilla.

### ⚠️ Limitaciones

- El análisis está optimizado para el conjunto de datos actual.
- Requiere tener Docker instalado y cierta familiaridad básica con comandos de terminal.
- El sistema se ejecuta en entorno local; no está desplegado en la nube por defecto.

---

## 🛠️ ¿Cómo ponerlo en funcionamiento?

### 1. Prerrequisitos

- Tener instalado:
  - [Docker](https://www.docker.com/)
  - [Docker Compose](https://docs.docker.com/compose/)
- Puertos disponibles:
  - `3306` (Base de datos)
  - `8000` (Backend)
  - `5173` (Frontend)

### 2. Clonar el repositorio

```bash
git clone https://github.com/Crismaro19/ProyectoAplicadoAnaliticaDatos.git
cd ProyectoAplicadoAnaliticaDatos
```


### 3. Ejecutar el sistema completo

```bash
docker compose up --build
```

Esto construirá las imágenes necesarias y levantará los tres servicios:

  - mysql: Base de datos con el esquema y los datos iniciales.

  - backend: API de FastAPI para la lógica de negocio y consultas.

  - frontend: Interfaz en React para visualización.



### 4. Acceder a la aplicación

Una vez iniciado el sistema, abre tu navegador y ve a:
```
http://localhost:5173/
```
---

👤 Casos de uso y pasos para el usuario

    1 Inicio del sistema: el usuario ejecuta docker compose up para levantar la aplicación.

    2 Visualización inicial: se presenta un mapa de Colombia con municipios agrupados por color.

    3 Filtrar municipios: se puede elegir un cluster desde el menú desplegable y explorar qué municipios lo conforman.

    4 Consulta avanzada: el backend permite construir nuevas visualizaciones a partir del dataset si se desea extender.

    5 Actualizar datos: reemplazando el archivo DataSetFinalProyectoGradoMIAD.csv y reiniciando los contenedores se puede trabajar con nuevos datos.

---

📁 Estructura del repositorio
```
ProyectoAplicadoAnaliticaDatos/
├── backend/                            # API REST con FastAPI
├── frontend/                           # Visualización en React
├── db/
│   └── cargarbd.py                     # Script para cargar los datos a MySQL
├── modelo/
│   ├── Codigo
│   │   └── EntregaFinal_PAAD.ipynb     # Análisis exploratorio y clustering
│   └── data/                           # Carpeta de datos
├── docs/                               # Anexos técnicos (ver más abajo)
├── docker-compose.yml                  # Orquestación de servicios
└── README.md
```




