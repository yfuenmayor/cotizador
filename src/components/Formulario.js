import React, { useState } from 'react'
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { obtenerDifYear, calcularMarca, porcentajePlan } from '../helper'


//Style components
const Campo = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;

const Label = styled.label`
    flex: 0 0 100px;
`;

const ImputRadio = styled.input`
    margin: 0 1rem;
`;

const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;
`;

const Boton = styled.button`
    background-color: #00838F;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    margin-top: 2rem;
    transition: background-color .3s ease;

    &:hover {
        background-color: #26C6DA;
        cursor: pointer;
    }
`;

const Error = styled.div`
    color: white;
    background-color: red;
    width: 100%;
    padding: 1rem;
    text-align: center;
    margin-bottom: 2rem;
`;

//Componente
const Formulario = () => {

    //State de error de formulario  
    const [error, setError] = useState(false)
    //State de datos
    const [datos, setDatos] = useState({
        marca: '',
        year: '',
        plan: ''
    });

    // Extraer valores del state
    const { marca, year, plan } = datos;
                                                                                                                                    
    //Obtener datos del formulario y guardarlos en el state
    const obtenerDatosForm = e => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }
    

    //Funcion para el submit del form
    const enviandoForm = e => {
        e.preventDefault();

        //Validacion de envio de todos los campos
        if (marca.trim() === '' || year.trim() === '' || plan.trim() === '') {
            setError(true);     
            return;
        }

        //Pasando Validacion
        setError(false);

        // Base de precio de Seguro
        let seguro = 2000;

        //obteniendo diferencia de años para calculos usando el helper
        const diferencia  = obtenerDifYear(year);

        //Restar 3% por cada año de antiguedad
        seguro -= ((diferencia * 3) * seguro) / 100;

        //Interes por marcas
        //Europeo 30% - Americano 15% - Asiatico 5% 
        seguro  = calcularMarca(marca) * seguro;

        //Incremento segun plan
        // Completo 50% - Basico 20%
        seguro = parseFloat(porcentajePlan(plan) * seguro).toFixed(2);
        
        //Total
    }
    

    return (
        <form
            onSubmit={enviandoForm}
        >
            { error ? <Error>Todos los campos son requeridos</Error> : null }

            <Campo>
                <Label>Marca</Label>
                <Select
                    name="marca"
                    value={marca}
                    onChange={obtenerDatosForm}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="americano"> Americano </option>
                    <option value="europeo"> Europeo </option>
                    <option value="asiatico"> Asiatico </option>
                </Select>
            </Campo>
            <Campo>
                <Label>Año</Label>
                <Select
                 name="year"
                 value={year}
                 onChange={obtenerDatosForm}
                >      
                    <option value="">-- Seleccione --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Campo>
            <Campo>
                <Label>Plan</Label>
                <ImputRadio
                    type="radio"
                    name="plan"
                    value="basico"
                    checked={plan === 'basico'}
                    onChange={obtenerDatosForm}
                /> Básico

                <ImputRadio
                    type="radio"
                    name="plan"
                    value="completo"
                    checked={plan === 'completo'}
                    onChange={obtenerDatosForm}
                /> Completo
            </Campo>

            <Boton type="submit">Cotizar</Boton>
        </form>
    );
};

Formulario.propTypes = {
    
};

export default Formulario;
