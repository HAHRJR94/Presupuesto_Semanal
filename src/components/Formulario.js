import React, { useState } from 'react';
import PropTypes from 'prop-types'
import shortid from 'shortid'

import Error from './Error'

const Formulario = ({ setGasto, setMostrarGastos }) => {

    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState(0)
    const [error, setError] = useState(false)

    const handleGasto = e => {
        e.preventDefault()

        //Validar campos del formulario
        if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === '') {
            setError(true)
            return
        }
        setError(false)

        //Crear objeto 
        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }

        //Pasar el gasto al state principal
        setGasto(gasto)
        setMostrarGastos(true)

        // //Resetear el formulario
        setNombre('')
        setCantidad(0)
    }

    return (
        <form onSubmit={handleGasto}>
            <h2>Agrega tus gastos aquí</h2>

            { error ? <Error mensaje="Ambos campos son obligatorios o presupuesto incorrecto" /> : null }

            <div className="campo">
                <label>Nombre Gasto</label>
                <input
                    type="text"
                    className='u-full-width'
                    placeholder='Ej. Transporte'
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                />
                <label>Cantidad Gasto</label>
                <input
                    type="number"
                    className='u-full-width'
                    placeholder='Ej. 300'
                    value={cantidad}
                    onChange={e => setCantidad(parseInt(e.target.value, 10))}
                />
                <input
                    type='submit'
                    className='button-primary u-full-width'
                    value='Agregar Gasto'
                />
            </div>
        </form>
    );
};

Formulario.propTypes = {
    setGasto: PropTypes.func.isRequired,
    setMostrarGastos: PropTypes.func.isRequired
}

export default Formulario;