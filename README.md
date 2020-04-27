

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

### Crear Style Components

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
    



### Librerias

Emotion (emotion styled): se usa para generar de una manera muy simple codigo CSS para React.<br />
Se instala desde NPM: [npm i @emotion/styled @emotion/core]
Fuente [https://emotion.sh/docs/introduction]

### Helpers

Se creo un helper el cual tiene las funciones de varios calculos 
