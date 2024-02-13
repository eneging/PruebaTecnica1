import axios from "axios";
import { useEffect, useState } from "react";

interface Incidencia {
  id: string;
  usuario_id: string;
  tipo: string;
  descripcion: string | null;
  imagen: string | null;
  estado: string | null;
  fecha_reporte: string;
}

const Card: React.FC<{ estado?: string; fechaInicial?: string; fechaFinal?: string }> = ({ estado, fechaInicial, fechaFinal }) => {
  const [data, setData] = useState<Incidencia[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [dataId, setDataId] = useState<string | number>('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get<Incidencia[]>(`http://localhost:5000/tasks`);
      setData(response.data);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleDelete = async (id: string | number) => {
   
    try {
      
      await axios.delete(`http://localhost:5000/tasks/${id}`);
      fetchData();
    } catch (error) {
      console.error('Error al eliminar:', error);
    }




  };

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
          <button onClick={() => handleDelete(incidencia.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Card;
