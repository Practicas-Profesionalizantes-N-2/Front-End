import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text, Image } from 'react-native';

// para hacer los estilos propios
import styled from 'styled-components/native'

// importamos los elementos que creamos en componentes
<<<<<<< HEAD
import TituloInicio from '../../components/TituloInicio';
import Login from '../Login/Login'
import TituloNormal from '../../components/Boton';
import TituloBienvenida from '../../components/TituloBienvenida';
import Boton from '../../components/Boton';
=======
import Boton from '../../components/Boton';
import TituloBienvenida from '../../components/TituloBienvenida';
import { ScrollView } from 'react-native-gesture-handler';
>>>>>>> Facundo

export const MyImage = styled(Image)
    `margin: 5%;
    marginTop:10%;
    marginBottom:40%;
        height: 20%;
        width:90%;
        padding:20%;
`;
//definimos que estilos le aplicamos
const estilos = StyleSheet.create({
<<<<<<< HEAD
    container: {
        marginLeft: "5%",
        marginRight: "5%",
        marginTop: "30%",
=======
    containerdentro: {
        marginLeft: "5%",
        marginRight: "5%",
>>>>>>> Facundo
    },
})
const Bienvenida = () => {
<<<<<<< HEAD

    return (
        <View style={estilos.container}>
=======
    const navigation = useNavigation();
    return (<>
        
            <ScrollView style={estilos.containerdentro}>
>>>>>>> Facundo
            <TituloBienvenida> Mi Educación Sexual Integral</TituloBienvenida>
            <MyImage
                style={styled.fotos}
                source={require('../../assets/mesi.jpeg')} />
<<<<<<< HEAD
            <Boton onPress={() => Alert.alert("¡Iniciaste!")}>Iniciar Aplicación </Boton>

        </View>


=======
                <Text>Es mi primera vez en la app</Text>
            <Boton
          title="Registrate"
          onPress={() => navigation.navigate('Login')}
          >Iniciar Sesion</Boton>
        <Text>Ya tengo un usuario</Text>
            <Boton
          title="Ingresa"
          onPress={() => navigation.navigate('Registro')}
        >Registrarse</Boton>
        </ScrollView>
    
    </>
>>>>>>> Facundo
    )
}

export default Bienvenida