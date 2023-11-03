import React from 'react'

//habilita la navegacion hacia otras pantallas
import { useNavigation } from '@react-navigation/native';

//componentes con sus estilos
import { TituloBienvenida } from '../../estilos/Titulo';
import { Boton } from '../../estilos/Boton';
import { Contenedor } from '../../estilos/Container';
import { Logo } from '../../estilos/Logo';

// habilitacion del "scroll"
import { ScrollView } from 'react-native-gesture-handler';

import styled from 'styled-components';

//componentes de react-native que se usan en esta pantalla
import { Text, View } from 'react-native';


const Nosotros = () => {
    const navigation = useNavigation();

    return (
        
        <ScrollView style={Contenedor.containerdentro}>
<View>
            <TituloBienvenida>
                Somos grupo el 10
            </TituloBienvenida>

            <Logo style={styled.fotos} source={require('../../assets/mesi.jpeg')} />


            <TituloBienvenida>
                Mi Educación Sexual Integral
            </TituloBienvenida>

            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>

            
            <Boton onPress={() => navigation.navigate('Home')}> Volver al inicio </Boton>
            </View>
        </ScrollView>
        
        
    )
}

export default Nosotros