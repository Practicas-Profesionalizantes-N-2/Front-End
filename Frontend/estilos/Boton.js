// para hacer los estilos propios

//habilita la navegacion hacia otras pantallas
import { useNavigation } from '@react-navigation/native';
import { useContext, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components/native';
import { ThemesContext } from '../Routes';


export const ButtonContainer = styled.TouchableOpacity`
    background-color: ${(props) => props.theme.background};
    padding:3%;
    margin:2%;
    width:94%;
    flex-direction:row;
    justify-content:center;
    border-radius: 10px;
    align-items:center;
    ${(props) => props.pressed && `
        background-color: black;
        transform: scale(0.95);
        elevation:2
        `}`;
export const ButtonContainerChico = styled.TouchableOpacity`
    background-color: ${(props) => props.theme.background};
    padding:3%;
    margin:2%;
    width:40%;
    flex-direction:row;
    justify-content:center;
    border-radius: 10px;
    align-items:center;
    ${(props) => props.pressed && `
        background-color: black;
        transform: scale(0.95);
        elevation:2
        `}`;


export const BotonNavegation = ({ buttonText, ruta }) => {

    //habilita la navegacion hacia otras pantallas

    const theme = useContext(ThemesContext)
    const navigation = useNavigation();

    const [pressed, setPressed] = useState(false);

    const handlePressIn = () => {
        setPressed(true);
    };
    const handlePressOut = () => {
        setPressed(false);
    };

    return (
        <>
            <ThemeProvider theme={theme.theme}>
                <ButtonContainer onPress={() => navigation.navigate(ruta)} onPressIn={handlePressIn} onPressOut={handlePressOut} pressed={pressed}>
                    <Boton>{buttonText}</Boton>
                </ButtonContainer>
            </ThemeProvider>
        </>
    )
}
export const BotonFuncion = ({ buttonText, funciona }) => {

    //habilita la navegacion hacia otras pantallas

    const theme = useContext(ThemesContext)

    const [pressed, setPressed] = useState(false);

    const handlePressIn = () => {
        setPressed(true);
    };
    const handlePressOut = () => {
        setPressed(false);
    };

    return (
        <>
            <ThemeProvider theme={theme.theme}>
                <ButtonContainer onPress={funciona} onPressIn={handlePressIn} onPressOut={handlePressOut} pressed={pressed}>
                    <Boton>{buttonText}</Boton>
                </ButtonContainer>
            </ThemeProvider>
        </>
    )
}
export const BotonFuncionChico = ({ buttonText, funciona }) => {

    //habilita la navegacion hacia otras pantallas

    const theme = useContext(ThemesContext)

    const [pressed, setPressed] = useState(false);

    const handlePressIn = () => {
        setPressed(true);
    };
    const handlePressOut = () => {
        setPressed(false);
    };

    return (
        <>
            <ThemeProvider theme={theme.theme}>
                <ButtonContainerChico onPress={funciona} onPressIn={handlePressIn} onPressOut={handlePressOut} pressed={pressed}>
                    <Boton2>{buttonText}</Boton2>
                </ButtonContainerChico>
            </ThemeProvider>
        </>
    )
}


//estilos del boton
export const Boton = styled.Text
    `
    font-size: 22px;
    color: white;
    font-weight:600;
    text-align:center;
    `;
export const Boton2 = styled.Text
    `
    font-size: 16px;
    color: white;
    font-weight:600;
    text-align:center;
    `
    ;
//botones de daltonismo con sus colores definidos 

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