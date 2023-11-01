import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
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
    containerdentro: {
        marginLeft: "5%",
        marginRight: "5%",
    },
})
const Bienvenida = () => {
    const navigation = useNavigation();
    return (<>
        <View style={estilos.containerdentro}>
            <TituloInicio> Mi Educación Sexual Integral</TituloInicio>
            <MyImage
                style={styled.fotos}
                source={require('../../assets/mesi.jpeg')} /> 
            <MyButton
          title="Go to Login"
          onPress={() => navigation.navigate('Login')}
        />
    </View>
    </>
    )
}

export default Bienvenida