import React from 'react'
import { StyleSheet, SafeAreaView, Alert, View, Text, Image } from 'react-native';
// para hacer los estilos propios
import styled from 'styled-components/native'
// importamos los elementos que creamos en componentes

import TituloInicio from '../../components/TituloInicio';
import Login from '../Login/Login'
import TituloNormal from '../../components/Boton';
import Boton from '../../components/Boton';


//definimos que estilos le aplicamos
const estilos = StyleSheet.create({
    container: {
        marginLeft: "5%",
        marginRight: "5%",
    },
})

const Inicio = () => {

    return (
        <View style={estilos.container}>
            <TituloInicio> Bienvenido al museo de ESI</TituloInicio>
            <TituloInicio> Apunta con tu celular para empezar a EXPLORAR</TituloInicio>
            <Boton onPress={() => Alert.alert("¡Iniciaste!")}>Iniciar </Boton>

        </View>


    )
}



export default Inicio