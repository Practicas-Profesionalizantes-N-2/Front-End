import React from 'react'
<<<<<<< HEAD
import { StyleSheet, SafeAreaView, Alert, View, Text, Image } from 'react-native';
// para hacer los estilos propios
import styled from 'styled-components/native'
// importamos los elementos que creamos en componentes

import TituloInicio from '../../components/TituloInicio';
import Login from '../Login/Login'
import TituloNormal from '../../components/Boton';
=======
import { StyleSheet, SafeAreaView, Alert, ScrollView, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// para hacer los estilos propios
import styled from 'styled-components/native'

// importamos los elementos que creamos en componentes
import TituloInicio from '../../components/TituloInicio';
>>>>>>> Facundo
import Boton from '../../components/Boton';


//definimos que estilos le aplicamos
const estilos = StyleSheet.create({
    container: {
        marginLeft: "5%",
        marginRight: "5%",
    },
})

const Inicio = () => {
<<<<<<< HEAD

    return (
        <View style={estilos.container}>
            <TituloInicio> Bienvenido al museo de ESI</TituloInicio>
            <TituloInicio> Apunta con tu celular para empezar a EXPLORAR</TituloInicio>
            <Boton onPress={() => Alert.alert("¡Iniciaste!")}>Iniciar </Boton>

        </View>
=======
    const navigation = useNavigation();

    return (
        <ScrollView style={estilos.container}>
            <TituloInicio> Bienvenido al museo de ESI</TituloInicio>
            <TituloInicio> Apunta con tu celular para empezar a EXPLORAR</TituloInicio>
            <Boton onPress={() => navigation.navigate('Camara')}>Iniciar </Boton>

        </ScrollView>
>>>>>>> Facundo


    )
}



export default Inicio