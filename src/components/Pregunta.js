import React, {Fragment, useState} from 'react'
import Error from './Error'


const Pregunta = ({setPresupuesto, setRestante, setMostrarpregunta}) => {

    const [cantidad, setCantidad] = useState(0);

    const [error, setError] = useState(false);

    //Función que define que lee el input

    const definirPresupuesto = e => {
        setCantidad(parseInt(e.target.value, 10));
    }

    //Función que agrega presupuesto

    const agregarPresupuesto = e => {
        e.preventDefault();

        //Validar
        if(cantidad < 1 || isNaN(cantidad)) {
            setError(true);
            return;
        }

        //Si pasa la validación
        setError(false);
        setPresupuesto(cantidad);
        setRestante(cantidad);
        setMostrarpregunta(false);
    }

    return (  
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            {error ? <Error mensaje='El presupuesto es incorrecto'/> : null}

            <form
            onSubmit={agregarPresupuesto}
            >
                <input
                type="number"
                className="u-full-width"
                placeholder="Coloca tu presupuesto"
                onChange={definirPresupuesto}
                ></input>
                <input
                type="submit"
                className="button-primary u-full-width" 
                value="Definir presupuesto"
                ></input>
            </form>
        </Fragment>
    );
}
 
export default Pregunta;