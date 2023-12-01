import React, {useContext} from 'react';

//habilita la navegacion hacia otras pantallas
import { useNavigation } from '@react-navigation/native';

//componentes con sus estilos
import { TituloBienvenida, TituloCabecera, TituloChico } from '../../estilos/Titulo';
import { Boton } from '../../estilos/Boton';
import { Contenedor } from '../../estilos/Container';
import { Logo } from '../../estilos/Logo';

// habilitacion del "scroll"
import { ScrollView } from 'react-native-gesture-handler';

import styled from 'styled-components';

//componentes de react-native que se usan en esta pantalla
import { Text, View } from 'react-native';

//import para manejar los temas.
import { ThemeProvider } from 'styled-components';
import { ThemesContext } from '../../Routes';


const Nosotros = () => {
    const navigation = useNavigation();
    const theme = useContext(ThemesContext)
    return (
        <ThemeProvider theme={theme.theme}>
        <ScrollView style={Contenedor.total}>
            <TituloCabecera> Nosotros </TituloCabecera>
            <View style={Contenedor.containerdentro}>
                <TituloBienvenida>
                    Somos un equipo de estudiantes del ITS Cipolletti
                </TituloBienvenida>
                <Logo style={styled.fotos} source={require('../../assets/mesi.jpeg')} />
                 <TituloChico> Integrantes: 
                
                  Aranguiz Micaela, Orozco Mariano, Folatelli Facundo, García Diego, Carrera Jeremias, Quintana Tomás, Tame Lorenzo, Gonzalez Agustín, Saez Lucas, Ruiz Bruno </TituloChico>
                        <Boton onPress={() => navigation.navigate('Home')} options={{ headerShown: false }}> Volver al inicio </Boton>
            </View>
        </ScrollView>
        </ThemeProvider>
    )
}

export default Nosotros