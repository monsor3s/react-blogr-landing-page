import  { createGlobalStyle }  from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    box-sizing: border-box;
    outline: 0;
    font-size: 62.5%;
    font-family: 'Overpass', 'Ubuntu', sans-serif;
    width: 1440px;
}

:root {
    /* Primary */
    --light-red: hsl(356, 100%, 66%);
    --very-light-red: hsl(355, 100%, 74%);
    --very-dark-blue: hsl(208, 49%, 24%);
    /* Neutral */
    --white: hsl(0, 0%, 100%);
    --gray-blue: hsl(240, 2%, 79%);
    --intense-dark-blue: hsl(207, 13%, 34%);
    --black-blue: hsl(240, 10%, 16%);
    /* Gradient */
    --gr-very-light-red: hsl(13, 100%, 72%);
    --gr-light-red: hsl(353, 100%, 62%);
    --gr-very-dark-blue: hsl(237, 17%, 21%);
    --desaturated-blue: hsl(237, 23%, 32%);
}

`;


export default GlobalStyle;