

## Cotizador de Seguros

En este proyecto se seguiran usando los conocimientos estudiados anteriormente en 
los proyectos pasados y se agregaran nuevos conocimientos y librerias para obtener
asi una aplicacion mas robusta, las ventajas que tenemos es que no se cargara
una hoja de estilos con miles de ellos, sino que segun el componente mostrado se van cargando
los styles components y ocultando segun sea el caso haciendo una aplicacion mas rapida


### Nuevos Conocimientos

Style Components: Son hojas de estilo especificas para ciertos componentes, para aplicar esto usamos la libreria de Emotion.<br />

Usamos las siguientes Extensions para facilitar la escritura de los Styles:

        - vscode-styled-components
        - styled-components-snippets
        - Styled-Snippets

### Crear Style Components con Emotion

1.- Importamos la libreria en el componente a usar:

    import styled from '@emotion/styled';

2.- Luego creamos una variable despues del import y fuera de la funcion del componente que contendra los estilos del elemento que queramos:

    const StyleName = styled.etiquetaHtml`
        background-color: #26C6DA;
        padding: 10px;
        font-weight: bold;
        color: #FFFFFF;
    `;

3.- Ahora para aplicar el style components en vez de colocar la etiqueta, se coloca el 
nombre del styleComponents y este suplantara la etiqueta como si fuese un componente

        <ContenedorHeader>
            <h1>Hola Mundo</h1>
        </ContenedorHeader>

### Crear transiciones con React-Transition-group

1.- Importamos la libreria en el componente a usar:

    import { TransitionGroup, CSSTransition } from 'react-transition-group';
 
2.- Colocamos el elemento que usara la transicion dentro de los siguientes componentes

    <TransitionGroup
        component="etiquetaHtml"
        className="clase"
    >
        <CSSTransition
            key={keyUnico}
            timeout={{ enter: 500, exit: 500}}
            classNames="clase"
        >
            ## Elementos que usaran la transicion ##
        </CSSTransition>
    </TransitionGroup>

3.- Tenemos que agregar en la hoja CSS del componente o la global los estilos para la transicion que estan en la pagina de la libreria segun sea el tipo

### Crear Spinner

 En este caso usaremos los Spinners que estan en esta web [https://tobiasahlin.com/spinkit/] 

1.- Seleccionamos el spinner deseado
2.- Consultamos su estructura presionando el boton de [Source]
3.- Creamos una hoja de estilos con el Css del spiner que nos dan en la pagina
4.- Creamos un componente con el nombre del Spinner y colocamos dentro su html que nos da la pagina
5.- Importamos el Css al componente del spinner: [import './Spinner.js']

Para usarlo se coloca el componente del Spinner donde se desee y para su uso adecuado se trabaja con un State booleano

### Librerias usadas en el proyecto

Emotion (emotion styled): se usa para generar de una manera muy simple codigo CSS para React.<br />
Se instala desde NPM: [npm i @emotion/styled @emotion/core]
Fuente [https://emotion.sh/docs/introduction]

React-Transition-group: Libreria para hacer transiciones y animaciones 
Se instala desde NPM: [npm i react-transition-group]
Fuente [https://reactcommunity.org/react-transition-group/]

### Helpers

Se creo un helper el cual tiene las funciones de varios calculos 
