import React, { useContext } from 'react';


// para hacer los estilos propios
import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/Feather';

// importamos 
import { BotonNavegation } from '../../estilos/Boton';
import { Contenedor } from '../../estilos/Container';
import { Logo } from '../../estilos/Logo';
import { TituloBienvenida, TituloCabecera } from '../../estilos/Titulo';

//componentes de react-native que se usan en esta pantalla
import { View } from 'react-native';

//permitimos que sea scrolleable
import { ScrollView } from 'react-native-gesture-handler';

//import para manejar los temas.
import { ThemeProvider } from 'styled-components';
import { ThemesContext } from '../../Routes';

const Bienvenida = () => {
    const theme = useContext(ThemesContext)
    return (
        <>
            <ThemeProvider theme={theme.theme}>
                <ScrollView style={Contenedor.total}>
                    <TituloCabecera />
                    <View style={Contenedor.containerdentro}>
                        <TituloBienvenida> Mi Educación Sexual Integral</TituloBienvenida>
                        <Logo style={styled.fotos} source={require('../../assets/mesiLogo.jpeg')} />
                        <BotonNavegation ruta={'Login'} buttonText={"Profesor"}><Icon name="user-plus" size={25} color="white" />    </BotonNavegation>
                        <BotonNavegation ruta={'Metaverso'} buttonText={"Alumno - Metaverso"}><Icon name="user" size={25} color="white" />    </BotonNavegation>
                        <BotonNavegation ruta={'Filtros'} buttonText={"Accesibilidad"}><Icon name="sliders" size={25} color="white" />    </BotonNavegation>
                        <BotonNavegation ruta={'Nosotros'} buttonText={"Nosotros"}><Icon name="users" size={25} color="white" />    </BotonNavegation>
                    </View>
                </ScrollView>
            </ThemeProvider>
        </>
    )
}

export default Bienvenida