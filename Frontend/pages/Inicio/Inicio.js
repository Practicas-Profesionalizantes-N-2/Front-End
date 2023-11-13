import React, {useContext} from 'react';

//permitimos que se pueda hacer "scroll" si es necesario 
import { ScrollView, View } from 'react-native';

//habilita la navegacion hacia otras pantallas
import { useNavigation } from '@react-navigation/native';

// importamos los elementos que creamos en componentes
import { TituloCabecera, TituloInicio } from '../../estilos/Titulo';
import { Boton, themeDefault, themeDeuteranopia } from '../../estilos/Boton';
import { Contenedor } from '../../estilos/Container';

//import para manejar los temas.
import { ThemeProvider } from 'styled-components';
import { ThemesContext } from '../../App';

const Inicio = () => {
    const navigation = useNavigation();
    const theme = useContext(ThemesContext)
    function handleTheme(value) {
        theme.setTheme(value)
    }
    return (
        <ThemeProvider theme={theme.theme}>
            <ScrollView style={Contenedor.total}>
                <TituloCabecera> BIENVENIDO </TituloCabecera>
                <View style={Contenedor.containerdentro}>
                    <TituloInicio>Mi ESI</TituloInicio>
                    <TituloInicio> Apunta con tu celular para empezar a EXPLORAR</TituloInicio>
                    <Boton onPress={() => navigation.navigate('AR')}>Iniciar </Boton>
                    <Boton value="themeDefault" onPress={() => handleTheme(themeDefault)}>Sin filtro</Boton>
                    <Boton value="themeDeuteranopia" onPress={() => handleTheme(themeDeuteranopia)}>Deuteranopia</Boton>
                </View>
            </ScrollView>
        </ThemeProvider>
    )
}

export default Inicio