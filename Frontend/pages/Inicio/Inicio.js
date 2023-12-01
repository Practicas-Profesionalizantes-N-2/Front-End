import React, { useContext } from 'react';

//permitimos que se pueda hacer "scroll" si es necesario 
import { ScrollView, View } from 'react-native';

//habilita la navegacion hacia otras pantallas
import { useNavigation } from '@react-navigation/native';

// importamos los elementos que creamos en componentes
import { TituloCabecera, TituloInicio } from '../../estilos/Titulo';
import { Boton, Boton2, themeDefault, themeDeuteranopia, themeProtanopia, themeTritanopia } from '../../estilos/Boton';
import { Contenedor } from '../../estilos/Container';

//import para manejar los temas.
import { ThemeProvider } from 'styled-components';
import { ThemesContext } from '../../Routes';

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
                    <TituloInicio>Mi ESI</TituloInicio>
                    <TituloInicio> Comenzá a explorar </TituloInicio>

                    <Boton onPress={() => navigation.navigate('AR')}>Iniciar </Boton>

                </View>
                <View style={Contenedor.containerdelfiltro}>
                    <View style={Contenedor.contenedorfiltro}>

                        <Boton2 onPress={() => handleTheme(themeDefault)}>Sin filtro</Boton2>
                        <Boton2 onPress={() => handleTheme(themeDeuteranopia)}>Deuteranopía</Boton2>
                        <Boton2 onPress={() => handleTheme(themeTritanopia)}>Tritanopía</Boton2>
                        <Boton2 onPress={() => handleTheme(themeProtanopia)}>Protanopía</Boton2>
                    </View>
                </View>

            </ScrollView>
        </ThemeProvider>
    )
}

export default Inicio