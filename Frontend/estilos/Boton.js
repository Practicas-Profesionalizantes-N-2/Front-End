// para hacer los estilos propios
import styled from 'styled-components/native';

//estilos del boton
export const Boton = styled.Text
    `
    font-size: 23px;
    color: white;
    font-weight:600;
    background-color: ${(props) => props.theme.background};
    text-align:center;
    margin:5%;
    padding:3%;
    border-radius: 10px;
    `
    ;

export const themeDefault = {
    background: "#5F4866",
    color: "#5F4866",
}

export const themeDeuteranopia = {
    background: "#656F8A",
    color: "#656F8A",
}
