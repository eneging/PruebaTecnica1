import { useState } from "react";
import Card from "./Card"

function dashboardAdmin() {
    const [fechaInicial, setFechaInicial] = useState<string>('');
    const [fechaFinal, setFechaFinal] = useState<string>('');
    const [estado, setEstado] = useState<string>('');
  
    const handleFechaInicialChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFechaInicial(event.target.value);
      };
    
      const handleFechaFinalChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFechaFinal(event.target.value);
      };
  
    const handleEstadoChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setEstado(event.target.value);}

  return (

    <>
    <nav   className="navbar bg-body-tertiary  ">
  <div className="container-fluid ">
    <a className="navbar-brand p-2 d-flex " href="#">
      <img src="data:image/png;base64,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" alt="Logo" width="50" height="50" className="d-inline-block align-text-top "/>
   <h4 className="p-2 " >Edificio Madrid</h4>  
    </a>
  </div>
</nav>
    <main>
<div className="navbar bg-primary text-white p-3 px-5"><h4>Tareas</h4></div>

<div>


     </div>

     <div className="d-flex gap-4 p-4">
    <div className="d-flex gap-4">
    <label>Desde</label>
      <input type="date" value={fechaInicial} onChange={handleFechaInicialChange} />
      </div>
      <div className="d-flex gap-4"><label>Hasta</label>
            <input type="date" value={fechaFinal} onChange={handleFechaFinalChange} />
            </div>

      <select value={estado} onChange  ={handleEstadoChange}>
        <option value="">Seleccionar estado</option>
        <option value="En Progreso">En Progreso</option>
        <option value="Preparado">Preparado</option>
        <option value="Completado">Completado</option>
        <option value="Error">Error</option>
      </select>

     
    </div>

<div className="p-5  h-auto">
    <div >
        <div className="bg-dark text-white p-3 d-flex justify-content-between">

    <div>Usuario_id</div>
    <div>Tipo</div>
    <div>Descripcion</div>
    <div>imagen</div>
    <div>estado</div>
    <div>Fecha reporte</div>


        </div>
        <Card estado = {estado} fechaInicial={fechaInicial}   fechaFinal ={fechaFinal} ></Card>
        
        
        </div>
</div>


    </main>
    <footer></footer>
    </>
  )
}

export default dashboardAdmin