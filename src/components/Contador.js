import React, {useState, Fragment} from 'react';

const Contador = () => {
// Aqui va toda la logica de javaScript
    
    const [numero, setNumero]  = useState(0);

    const aumentar = () => {
        console.log('1 click de Asteroides')
        setNumero(numero + 1)
    }

//Aqui va el retorno o respuesta
    return (
        //meter todo dentro de un -div- Padre
        <Fragment>
            <h5>Astero-ides = { numero } 🔭 </h5>
            <button onClick={aumentar}>Aumentar</button>
        </Fragment>
    );
}

export default Contador;