import React, { useContext } from 'react';

//habilita la navegacion hacia otras pantallas
import { useNavigation } from '@react-navigation/native';

//componentes con sus estilos
import { TituloBienvenida, TituloCabecera, TituloChico, TituloNormal, TituloNosotros } from '../../estilos/Titulo';
import { Boton } from '../../estilos/Boton';
import { Contenedor } from '../../estilos/Container';
import { Logo } from '../../estilos/Logo';

// habilitacion del "scroll"
import { ScrollView } from 'react-native-gesture-handler';

import styled from 'styled-components';

//componentes de react-native que se usan en esta pantalla
import { Text, View } from 'react-native';
import { WebView } from 'react-native-webview'

//import para manejar los temas.
import { ThemeProvider } from 'styled-components';
import { ThemesContext } from '../../Routes';
import Icon from 'react-native-vector-icons/Feather';


const Nosotros = () => {
    const navigation = useNavigation();
    const theme = useContext(ThemesContext)
    return (
        <ThemeProvider theme={theme.theme}>

            <ScrollView style={Contenedor.total}>
                <TituloCabecera> Nosotros </TituloCabecera>
                <View style={Contenedor.containerdentro}>
                    <Logo style={styled.fotos} source={require('../../assets/mesi.jpeg')} />

                    <TituloNosotros>
                        Somos un equipo de estudiantes del ITS Cipolletti, y comenzamos este proyecto en 2023.
                    </TituloNosotros>
                  
                    <TituloChico>
                    <Icon name="users" size={30} color="purple" />      Micaela, Mariano, Facundo, Diego, Jeremias, Tomás, Lorenzo, Agustín, Lucas, Bruno </TituloChico>
                    <Boton onPress={() => navigation.push('Home')}> <Icon name="home" size={30} color="white" />   Volver</Boton>


                </View>
            </ScrollView>



        </ThemeProvider>
    )
}

export default Nosotros