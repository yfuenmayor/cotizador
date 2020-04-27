
//Obtiene la diferencia de años
export function obtenerDifYear(year) {
    const diferencia = new Date().getFullYear() - year;
    return diferencia;
}

//Obteniendo incremento segun la marca
export function calcularMarca(marca) { 
    let incremento;

    switch (marca) {
        case 'europeo':
            incremento = 1.30;
            break;
        case 'americano':
            incremento = 1.15;
            break;
        case 'asiatico':
            incremento = 1.05;
            break;
    
        default:
            break;
    }

    return incremento;
 }

 //Obeniendo el porcentaje segun el plan 
 export function porcentajePlan(plan) { 
     return (plan === 'basico' ? 1.20 : 1.50)
  }
