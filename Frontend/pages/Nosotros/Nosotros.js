import React from 'react'

//habilita la navegacion hacia otras pantallas
import { useNavigation } from '@react-navigation/native';

//componentes con sus estilos
import { TituloBienvenida, TituloCabecera, TituloNormal } from '../../estilos/Titulo';
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
        <ScrollView style={Contenedor.total}>
             <TituloCabecera> NOSOTROS </TituloCabecera>
        <View style={Contenedor.containerdentro}>
                <TituloBienvenida>
                    Somos el grupo 10
                </TituloBienvenida>

                <Logo style={styled.fotos} source={require('../../assets/mesi.jpeg')} />


         

                <TituloNormal> Esperemos te guste navegar por nuestra aplicación que viene en proceso desde Julio de este año </TituloNormal>

                <Boton onPress={() => navigation.navigate('Home')} options={{headerShown:false}}> Volver al inicio </Boton>
            </View>
        </ScrollView>


    )
}

export default Nosotros