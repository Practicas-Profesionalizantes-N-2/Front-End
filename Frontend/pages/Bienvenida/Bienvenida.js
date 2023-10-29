import React from 'react'
import { StyleSheet, SafeAreaView, Alert, View, Text, Image } from 'react-native';
// para hacer los estilos propios
import styled from 'styled-components/native'
// importamos los elementos que creamos en componentes
import MyButton from '../../components/MyButton';
import TituloInicio from '../../components/TituloInicio';


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
        marginLeft:"5%",
        marginRight:"5%",
       },
})

const Bienvenida = () => {

    return (
        <View  style={estilos.container}>
            <TituloInicio> Mi Educación Sexual Integral</TituloInicio>
            <MyImage
                style={styled.fotos}
                source={require('../../assets/mesi.jpeg')} />
                 <MyButton
        title="INICIAR APLICACIÓN"
        color="#81638B"
        onPress={() => Alert.alert("¡Iniciaste!")}
      />
        </View>

    )
}



export default Bienvenida