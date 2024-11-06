import React, { useContext } from 'react';

//permitimos que se pueda hacer "scroll" si es necesario 
import { ScrollView, View } from 'react-native';

//habilita la navegacion hacia otras pantallas
import { useNavigation } from '@react-navigation/native';

// importamos los elementos que creamos en componentes
import { TituloCabecera, TituloInicio } from '../../estilos/Titulo';
import { Contenedor } from '../../estilos/Container';

import {
    Boton, Boton2,
    BotonNavegation,
    themeDefault,
    themeDeuteranopia,
    themeProtanopia,
    themeTritanopia
} from '../../estilos/Boton';



//import para manejar los temas.
import { ThemeProvider } from 'styled-components';
import { ThemesContext } from '../../Routes';
import Icon from 'react-native-vector-icons/Feather';
import { Logo3 } from '../../estilos/Logo3';
import styled from 'styled-components/native'

const Inicio = () => {
    const navigation = useNavigation();
    const theme = useContext(ThemesContext)
    function  handleTheme(value) {
        theme.setTheme(value)
    }
    return (
        <ThemeProvider theme={theme.theme}>
            <ScrollView style={Contenedor.total}>
                <TituloCabecera> Bienvenido </TituloCabecera>
                
                <View style={Contenedor.containerdentro}>
                <Logo3 style={styled.fotos} source={require('../../assets/mta.webp')} />        
                    <TituloInicio> Comenzá la experiencia</TituloInicio>

                    <BotonNavegation ruta={'Metaverso'} buttonText={"Entrar al metaverso"}></BotonNavegation>
                    <BotonNavegation ruta={'Filtros'} buttonText={"Accesibilidad"}></BotonNavegation>

                </View>
            </ScrollView>
        </ThemeProvider>
    )
}

export default Inicio