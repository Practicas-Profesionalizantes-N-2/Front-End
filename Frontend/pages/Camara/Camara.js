import React from 'react'
import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import  Boton  from '../../components/Boton';
import { useNavigation } from '@react-navigation/native';

const image = {uri: 'https://blog.realidad-aumentada.com.co/wp-content/uploads/2020/01/RealidadAumentada-1-scaled.jpg'};

export default function Camara() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>

            <Text style={styles.text}>por ahora te tenes que imaginar que aca aparece la realidad aumentada</Text>
            
            <Boton onPress={() => navigation.navigate('Home')}>volver al inicio </Boton>

            </ImageBackground> 
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 42,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#000000c0',
      },
  });