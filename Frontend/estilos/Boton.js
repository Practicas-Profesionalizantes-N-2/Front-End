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
export const Boton2 = styled.Text
    `
    font-size: 23px;
    color: white;
    font-weight:600;
    background-color: ${(props) => props.theme.background};
    text-align:center;
    margin:1%;
    padding:3%;
    width:190px;
    border-radius: 10px;
    flexDirection: row;
    `
    ;

    export const CameraButton = styled.Text
    `
    color:${(props) => props.theme.background};
    display:flex;
    padding-top:3%;
    padding-left:3.5%;
    background-color: white;

    width:55px;
    height:55px;
    border-radius:100px;
    `
    ;

    export const CentralButton = styled.Text
    `
    color:${(props) => props.theme.background};
    display:flex;
    padding-top:2.5%;
    padding-left:3.8%;
    background-color: white;
    width:80px;
    height:80px;
    border-radius:100px;
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

export const themeTritanopia = {
    background: "#5f4b53",
    color: "#5f4b53",
}

export const themeProtanopia = {
    background: "#444f67",
    color: "#444f67",
}