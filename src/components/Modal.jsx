import { useState, useEffect } from 'react'
import Mensaje from './Mensaje'
import CerrarBtn from '../img/cerrar.svg'

const Modal = ({
    setModal,
    animarModal,
    setAnimarModal,
    guardarGasto,
    gastoEditar,
    setGastoEditar
}) => {

    const [mensaje, setMensaje] = useState('')
    const [concepto, setConcepto] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [categoria, setCategoria] = useState('')
    const [fecha, setFecha] = useState('')
    const [id, setId] = useState('')

    useEffect(() => {
        if( Object.keys(gastoEditar).length > 0 ) {
            setConcepto(gastoEditar.concepto)
            setCantidad(gastoEditar.cantidad)
            setCategoria(gastoEditar.categoria)
            setId(gastoEditar.id)
            setFecha(gastoEditar.fecha)
        }
    }, []);

    const ocultarModal = () => {
        setAnimarModal(false)
        setGastoEditar({})
        setTimeout(() => {
            setModal(false)
        }, 500);
    }

    const handleSubmit = e => {
        e.preventDefault();
        if([ concepto, cantidad, categoria ].includes('')) {
            setMensaje('Todos los campos son obligatorios')
            return;
        }

        guardarGasto({concepto, cantidad, categoria, id, fecha})
    }

    return (
        <div className="modal">
            <div className='cerrar-modal'>
                <img 
                    src={CerrarBtn} 
                    alt="cerrar boton"
                    onClick={ocultarModal} 
                />
            </div>
            <form
                onSubmit={handleSubmit}
                className={`formulario ${animarModal ? "animar" : 'cerrar'}`}
            >
                <legend>{gastoEditar.concepto ? 'Editar Gasto' : 'Nuevo Gasto'}</legend>
                {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}
                <div className='campo'>
                    <label htmlFor="concepto">Concepto</label>
                    <input
                        id="concepto" 
                        type="text"
                        placeholder='Concepto del gasto'
                        value={concepto}
                        onChange={ e => setConcepto(e.target.value) }
                    />
                </div>
                <div className='campo'>
                    <label htmlFor="cantidad">Cantidad</label>
                    <input
                        id="cantidad" 
                        type="number"
                        placeholder='Defina una cantidad. ej.300'
                        value={cantidad}
                        onChange={ e => setCantidad(Number(e.target.value)) }
                    />
                </div>
                <div className='campo'>
                    <label htmlFor="categoria">Categoria</label>
                    <select
                        id="categoria"
                        value={categoria}
                        onChange={ e => setCategoria(e.target.value) }
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
                <input 
                    type="submit"
                    value={gastoEditar.concepto ? 'Guardar Cambio' : 'Agregar Gasto'}            
                />
            </form>
        </div>
    )
}

export default Modal