import React, { useState, useEffect } from 'react';

import ObtenerPresupuesto from './components/ObtenerPresupuesto';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';

function App() {

  //Definiendo el state 
  const [ gastos, setGastos ] = useState([]) //State principal
  const [ presupuesto, setPresupuesto ] = useState(0)
  const [ restante, setRestante ] = useState(0)
  const [ mostrarPresupuesto, setMostrarPresupuesto ] = useState(true)
  const [ gasto, setGasto ] = useState({})
  const [ mostrarGastos, setMostrarGastos ] = useState(false)

  useEffect(() => {
    if (mostrarGastos) {
      setGastos([...gastos, gasto])

      //Resta del presupuesto actual
      const presupuestoRestante = restante - gasto.cantidad
      setRestante(presupuestoRestante)

      setMostrarGastos(false)
    }
  }, [gastos, gasto, mostrarGastos, restante])


  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          {/* El operador ternario nos ayuda a ocultar el componente de ObtenerPresupuesto cuando ya se le ha agregado un presupuesto válido */}
          {
            mostrarPresupuesto ? (
              <ObtenerPresupuesto
                setPresupuesto={setPresupuesto}
                setRestante={setRestante}
                setMostrarPresupuesto={setMostrarPresupuesto}
              />
            ) : (
                <div className="row">
                  <div className='one-half column'>
                    <Formulario
                      setGasto={setGasto}
                      setMostrarGastos={setMostrarGastos}
                    />
                  </div>
                  <div className='one-half column'>
                    <Listado
                      gastos={gastos}
                    />
                    <ControlPresupuesto
                      presupuesto={presupuesto}
                      restante={restante}
                    />
                  </div>
                </div>
              )
          }
        </div>
      </header>
    </div>
  );
}

export default App;
