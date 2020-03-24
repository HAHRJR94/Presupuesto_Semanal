import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types'
import Error from './Error'

const ObtenerPresupuesto = ({ setPresupuesto, setRestante, setMostrarPresupuesto }) => {
    const [cantidad, setCantidad] = useState(0)
    const [error, setError] = useState(false)

    //
    const handlePresupuesto = e => {
        e.preventDefault()

        //validar los campos del formulario
        if (cantidad < 1 || isNaN(cantidad)) {
            setError(true)
            return
        }
        setError(false)

        //
        setPresupuesto(cantidad)
        setRestante(cantidad)
        setMostrarPresupuesto(false)

    }

    return (
        <Fragment>
            <h2>Ingresa tu presupuesto</h2>

            { error ? <Error mensaje="El presupuesto es incorrecto" /> : null }

            <form onSubmit={handlePresupuesto}>
                <input
                    type="number"
                    className='u-full-width'
                    placeholder='Coloca tu presupuesto'
                    onChange={e => setCantidad(parseInt(e.target.value, 10))}
                />
                <input 
                type="submit"
                    className='button-primary u-full-width'
                    value='Definir presupuesto'
                />
            </form>
        </Fragment>
    );
};

ObtenerPresupuesto.propTypes = {
    setPresupuesto: PropTypes.func.isRequired,
    setRestante: PropTypes.func.isRequired,
    setMostrarPresupuesto: PropTypes.func.isRequired
}

export default ObtenerPresupuesto;