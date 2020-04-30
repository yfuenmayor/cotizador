import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import {mostrarUpercase} from '../helper'


const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    color: #FFF;
    background-color: #00838F;
    margin-top: 1rem;
`;

const Resumen = ({datos}) => {
    //Extraemos los elementos de datos
    const {marca,year,plan} = datos;

    //Condicionamos para mostrar el componente de tener datos 
    if(marca === '' || year === '' || plan === '') return null ;

    return (
       <ContenedorResumen>
            <h2>Resumen de Cotizacion</h2>
            <ul>Marca: {mostrarUpercase(marca)}</ul>
            <ul>Plan: {mostrarUpercase(plan)}</ul>
            <ul>Año del Auto: {year}</ul>
       </ContenedorResumen>
    );
};

Resumen.propTypes = {
    datos: PropTypes.object.isRequired
};

export default Resumen;