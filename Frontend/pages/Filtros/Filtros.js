import React, { useContext } from 'react';

//permitimos que se pueda hacer "scroll" si es necesario 
import { ScrollView, View, Text } from 'react-native';

//habilita la navegacion hacia otras pantallas
import { useNavigation } from '@react-navigation/native';

// importamos los elementos que creamos en componentes
import { TituloCabecera, TituloInicio, TituloBienvenida, TituloChico, TituloNormal } from '../../estilos/Titulo';
import { Contenedor } from '../../estilos/Container';
import {
    Boton, Boton2,
    themeDefault,
    themeDeuteranopia,
    themeProtanopia,
    themeTritanopia
} from '../../estilos/Boton';

import { Logo2 } from '../../estilos/Logo2';

import styled from 'styled-components/native'

//import para manejar los temas.
import { ThemeProvider } from 'styled-components';
import { ThemesContext } from '../../Routes';

const Filtros = () => {
    const navigation = useNavigation();
    const theme = useContext(ThemesContext)
    function  handleTheme(value) {
        theme.setTheme(value)
    }
    return (
        <ThemeProvider theme={theme.theme}>
            <ScrollView style={Contenedor.total}>
                       
            <TituloBienvenida>
                       Filtros de daltonismo
                    </TituloBienvenida>
                    <TituloNormal>
                     Podes seleccionar el filtro que necesites a continuación:
                    </TituloNormal>
                <View style={Contenedor.containerdelfiltro}>
                    <View style={Contenedor.contenedorfiltro}>
                  
                    <Logo2 style={styled.fotos} source={require('../../assets/filtros.jpg')} />
                  
                        <Boton2 onPress={() => handleTheme(themeDefault)}>Sin filtro</Boton2>
                        <Boton2 onPress={() => handleTheme(themeDeuteranopia)}>Deuteranopía</Boton2>
                        <Boton2 onPress={() => handleTheme(themeTritanopia)}>Tritanopía</Boton2>
                        <Boton2 onPress={() => handleTheme(themeProtanopia)}>Protanopía</Boton2>

                        <Boton onPress={() => navigation.push('Home')}> Volver </Boton>

                    </View>
                </View>

            </ScrollView>
        </ThemeProvider>
    )
}

export default Filtros