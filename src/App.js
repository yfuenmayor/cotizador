import React, { useState } from 'react';
import styled from '@emotion/styled';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';

//StyleComponents
const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto; 
`;

const ContenedorFormulario = styled.div`
  background-color: #FFF;
  padding: 3rem;
`;
//Component
function App() {

    //Creamos State del resumen del presupuesto
    const [resumen, setResumen] = useState({
      cotizacion: 0,
      datos: {
        marca: '',
        year: '',
        plan: ''
      }
    });

    //Creamos State para el uso del spinner
    const [loading, setLoading] = useState(false);

    //Tomamos los datos del State
    const { cotizacion, datos } = resumen;

  return (
    <Contenedor>
      <Header 
        titulo="Cotizador de Seguros"
      />
      <ContenedorFormulario>
        <Formulario
            setResumen={setResumen}
            setLoading={setLoading}
        /> 
        
        {/* Mostramos el spinner cuando se debe */}
        { loading ? <Spinner /> : null}

        <Resumen
            datos={datos}
        />

        { !loading ? <Resultado cotizacion={cotizacion} /> : null}
        
        
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
