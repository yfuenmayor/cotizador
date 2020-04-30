import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Mensaje = styled.p`
    padding: 1rem;
    margin-top: 2rem;
    text-align: center;
    background-color: rgb(127,224,237);
`;

const ResultadoCotizacion = styled.div`
    text-align: center;
    padding: .5rem;
    border: 1px solid #26C6DA;
    position: relative;
    margin-top: 1rem;
    background-color: rgb(127,224,237);
`;

const TextoCotizacion = styled.p`
   color: #00838F;
   padding: 1rem;
   text-transform: uppercase;
   margin: 0 ;
   font-weight: bold;                                                               
`;

const Resultado = ({cotizacion}) => {

    return (
        (cotizacion === 0) ? 
        <Mensaje>Elije marca, año y tipo de seguro</Mensaje> :
        (
            <ResultadoCotizacion>
                <TransitionGroup
                    component="span"
                    className="resultado"
                >
                    <CSSTransition
                        key={cotizacion}
                        timeout={{ enter: 500, exit: 500}}
                        classNames="resultado"
                    >
                        <TextoCotizacion>El total es: <span>{cotizacion}</span></TextoCotizacion> 
                    </CSSTransition>
                </TransitionGroup>
            </ResultadoCotizacion>
        )
    );
};

Resultado.propTypes = {
    cotizacion: PropTypes.number.isRequired
};

export default Resultado;