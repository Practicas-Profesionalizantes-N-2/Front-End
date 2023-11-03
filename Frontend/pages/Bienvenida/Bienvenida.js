import * as React from 'react';
//habilita la navegacion hacia otras pantallas
import { useNavigation } from '@react-navigation/native';
import { Text } from 'react-native';

// para hacer los estilos propios
import styled from 'styled-components/native'

// importamos 
import { Boton } from '../../estilos/Boton';
import { TituloBienvenida } from '../../estilos/Titulo';
import { Contenedor } from '../../estilos/Container';
import { Logo } from '../../estilos/Logo';

//permitimos que sea scrolleable
import { ScrollView } from 'react-native-gesture-handler';

const Bienvenida = () => {
    const navigation = useNavigation();
    return (
        <>
            <ScrollView style={Contenedor.containerdentro}>

                <TituloBienvenida> Mi Educación Sexual Integral</TituloBienvenida>

                <Logo style={styled.fotos} source={require('../../assets/mesi.jpeg')} />

                <Text>Ya tengo un usuario </Text>
                <Boton onPress={() => navigation.navigate('Login')}>Iniciar Sesion</Boton>

                <Text>Es mi primera vez en la app</Text>
                <Boton onPress={() => navigation.navigate('Registro')}>Registrarse</Boton>

            </ScrollView>

        </>
    )
}

export default Bienvenida