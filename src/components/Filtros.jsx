import { useState, useEffect } from 'react'

const Filtros = ({filtro, setFiltro}) => {
  return (
    <div className='filtros sombra contenedor'>
        <div className="campo">
            <label>Filtrar gastos: </label>
            <select
                value={filtro}
                onChange={e => setFiltro(e.target.value)}
            >    
                <option value="">-- Seleccione --</option>
                <option value="proveedores">Proveedores</option>
                <option value="materiales">Materiales</option>
                <option value="insumos">Insumos</option>
                <option value="empleados">Empleados</option>
                <option value="impuestos">Impuestos</option>
                <option value="personal">Personal</option>
            </select>
        </div>
    </div>
  )
}

export default Filtros