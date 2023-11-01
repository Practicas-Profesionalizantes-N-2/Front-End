import React from 'react'
import { StyleSheet, SafeAreaView, Alert, View, Text, Image } from 'react-native';
// para hacer los estilos propios
import styled from 'styled-components/native'
// importamos los elementos que creamos en componentes
import TituloInicio from '../../components/TituloInicio';
import Login from '../Login/Login'
import TituloNormal from '../../components/Boton';
import TituloBienvenida from '../../components/TituloBienvenida';
import Boton from '../../components/Boton';


const MyImage = styled(Image)
    `margin: 5%;
    marginTop:10%;
    marginBottom:40%;
        height: 20%;
        width:90%;
        padding:20%;
`;
//definimos que estilos le aplicamos
const estilos = StyleSheet.create({
    container: {
        marginLeft: "5%",
        marginRight: "5%",
        marginTop: "30%",
    },
})

const Bienvenida = () => {

    return (
        <View style={estilos.container}>
            <TituloBienvenida> Mi Educación Sexual Integral</TituloBienvenida>
            <MyImage
                style={styled.fotos}
                source={require('../../assets/mesi.jpeg')} />
            <Boton onPress={() => Alert.alert("¡Iniciaste!")}>Iniciar Aplicación </Boton>

        </View>


    )
}



export default Bienvenida