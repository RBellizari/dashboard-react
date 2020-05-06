import { createGlobalStyle } from 'styled-components';
import Roboto from './fonts/Roboto.woff';
import RobotoWoff2 from './fonts/Roboto.woff2'

const GlobalStyle = createGlobalStyle`
    body{
        margin:0;
        background-color:#fff;
    }

    @font-face {
        font-family: 'Roboto';
        src: local('Robot'), local('Robto'),
        url(${RobotoWoff2}) format('woff2'),
        url(${Roboto}) format('woff');
        font-weight: 300;
        font-style: normal;
    }

    
`;

export default GlobalStyle;