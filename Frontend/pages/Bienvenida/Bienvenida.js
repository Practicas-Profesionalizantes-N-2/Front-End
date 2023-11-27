import React, {useContext} from 'react';

//habilita la navegacion hacia otras pantallas
import { useNavigation } from '@react-navigation/native';

// para hacer los estilos propios
import styled from 'styled-components/native'

// importamos 
import { Boton } from '../../estilos/Boton';
import { TituloBienvenida, TituloNormal } from '../../estilos/Titulo';
import { Contenedor } from '../../estilos/Container';
import { Logo } from '../../estilos/Logo';

//componentes de react-native que se usan en esta pantalla
import { Text, View } from 'react-native';

//permitimos que sea scrolleable
import { ScrollView } from 'react-native-gesture-handler';

//import para manejar los temas.
import { ThemeProvider } from 'styled-components';
import { ThemesContext } from '../../Routes';

const Bienvenida = () => {
    const theme = useContext(ThemesContext)
    const navigation = useNavigation();
    return (
        <>
            <ThemeProvider theme={theme.theme}>
                <ScrollView style={Contenedor.total}>
                    <View style={Contenedor.containerdentro}>
                        <TituloBienvenida> Mi Educación Sexual Integral</TituloBienvenida>
                        <Logo style={styled.fotos} source={require('../../assets/mesi.jpeg')} />
                        <TituloNormal>Ya tengo un usuario </TituloNormal>
                        <Boton onPress={() => navigation.navigate('Login')}>Iniciar Sesion</Boton>
                        <TituloNormal>Es mi primera vez en la app</TituloNormal>
                        <Boton onPress={() => navigation.navigate('Registro')}>Registrarme</Boton>
                    </View>
                </ScrollView>
            </ThemeProvider>
        </>
    )
}

export default Bienvenida