import React, { useContext } from 'react';

//permitimos que se pueda hacer "scroll" si es necesario 
import { ScrollView, View } from 'react-native';

//habilita la navegacion hacia otras pantallas
import { useNavigation } from '@react-navigation/native';

// importamos los elementos que creamos en componentes
import {
    BotonFuncionChico,
    themeDefault,
    themeDeuteranopia,
    themeProtanopia,
    themeTritanopia
} from '../../estilos/Boton';
import { Contenedor } from '../../estilos/Container';
import { TituloCabecera, TituloNormal } from '../../estilos/Titulo';

import { Logo2 } from '../../estilos/Logo2';

import styled from 'styled-components/native';

//import para manejar los temas.
import { ThemeProvider } from 'styled-components';
import { ThemesContext } from '../../Routes';

import Icon from 'react-native-vector-icons/Feather';

const Filtros = () => {
    const navigation = useNavigation();
    const theme = useContext(ThemesContext)
    function handleTheme(value) {
        theme.setTheme(value)
    }
    return (
        <ThemeProvider theme={theme.theme}>
            <ScrollView style={Contenedor.total}>
                <TituloCabecera> Filtros de daltonismo </TituloCabecera>
                <TituloNormal>
                    Podes seleccionar el filtro que necesites a continuación:
                </TituloNormal>
                <View style={Contenedor.containerdelfiltro}>
                    <View style={Contenedor.contenedorfiltro}>

                        <Logo2 style={styled.fotos} source={require('../../assets/filtros.jpg')} />

                        <BotonFuncionChico funciona={() => handleTheme(themeDefault)} buttonText={'Sin filtro'}>Sin filtro</BotonFuncionChico>
                        <BotonFuncionChico funciona={() => handleTheme(themeDeuteranopia)} buttonText={'Deuteranopía'}>Deuteranopía</BotonFuncionChico>
                        <BotonFuncionChico funciona={() => handleTheme(themeTritanopia)} buttonText={'Tritanopía'}>Tritanopía</BotonFuncionChico>
                        <BotonFuncionChico funciona={() => handleTheme(themeProtanopia)} buttonText={'Protanopía'}>Protanopía</BotonFuncionChico>
                        <BotonFuncionChico funciona={() => navigation.goBack()} buttonText={'Volver'}><Icon color="white" size={20} name='home' ></Icon></BotonFuncionChico>


                    </View>
                </View>
            </ScrollView>
        </ThemeProvider>
    )
}

export default Filtros