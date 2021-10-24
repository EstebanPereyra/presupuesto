import React, {useState, useEffect} from "react";
import Pregunta from "./components/Pregunta";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import Presupuesto from "./components/Presupuesto";

function App() {

  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [mostrarpregunta, setMostrarpregunta] = useState(true);
  const [gastos, setGastos] = useState([]);
  const [gasto, setGasto] = useState({});
  const [agregargasto, setAgregargasto] = useState(false);

  //Función cuando agregamos un nuevo gasto

  useEffect(() => {
    if(agregargasto) {
    
    //Agrega el nuevo presupuesto
    setGastos([
      ...gastos,
      gasto
    ])

    //muestra el presupuesto restante
    const presupuestoRestante = restante - gasto.cantidad;
    setRestante(presupuestoRestante);

    //Resetear a false
    setAgregargasto(false);

  }
  
  }, [gasto, agregargasto, gastos, restante]);

  

  return (
    <div className="container">
      <header>
          <h1>Gasto mensual</h1>

          <div className="contenido-principal contenido">

            {mostrarpregunta ? 
            (
               <Pregunta
               setPresupuesto={setPresupuesto}
               setRestante={setRestante}
               setMostrarpregunta={setMostrarpregunta}
              />
              
            ) : (

          <div className="row">
            <div className="one-half column">
              <Formulario 
              setGasto={setGasto}
              setAgregargasto={setAgregargasto}
              />
            </div>
         
            <div className="one-half column">
              <Listado
                gastos={gastos}
              />
              <Presupuesto
              presupuesto={presupuesto}
              restante={restante}
              />
            </div>
          </div> )}
          </div> 

         
      </header>
      
    </div>
  );
}

export default App;
