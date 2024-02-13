import axios from "axios";
import { useEffect, useState } from "react";



function Card({ estado, fechaInicial, fechaFinal }) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/tasks`);
        setData(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  let filteredData = estado ? data.filter(incidencia => incidencia.estado === estado) : data;


  if (fechaInicial && fechaFinal) {
    filteredData = filteredData.filter(incidencia => {
      const fechaIncidencia = new Date(incidencia.fecha_reporte);
      const fechaIni = new Date(fechaInicial);
      const fechaFin = new Date(fechaFinal);
      return fechaIncidencia >= fechaIni && fechaIncidencia <= fechaFin;
    });
  }

  return (
    <div>
      {filteredData.map((incidencia, index) => (
        <div key={index} className="d-flex gap-5 w-auto p-3 d-flex justify-content-around border">
          <div>{incidencia.usuario_id}</div>
          <div>{incidencia.tipo}</div>
          <div>{incidencia.descripcion ? incidencia.descripcion : "no datos"}</div>
          <div>{incidencia.imagen !== null ? incidencia.imagen : "no datos"}</div>
          <div>{incidencia.estado ? incidencia.estado : "no datos"}</div>
          <div>{incidencia.fecha_reporte}</div>
        </div>
      ))}
    </div>
  );
}

export default Card;
