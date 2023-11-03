import React from 'react'

//habilita la navegacion hacia otras pantallas
import { useNavigation } from '@react-navigation/native';
import { TituloBienvenida } from '../../estilos/Titulo';
import { Boton } from '../../estilos/Boton';
import { ScrollView } from 'react-native-gesture-handler';
import { Contenedor } from '../../estilos/Container';


const Nosotros = () => {
    const navigation = useNavigation();

    return (
        <ScrollView style={Contenedor.containerdentro}>

            <TituloBienvenida>
                Somos grupo el 10
            </TituloBienvenida>

            <TituloBienvenida>
                M.E.S.I
            </TituloBienvenida>

            <TituloBienvenida>
                Mi Educación Sexual Integral
            </TituloBienvenida>

            <Boton onPress={() => navigation.navigate('Home')}> Volver al inicio </Boton>

        </ScrollView>
    )
}

export default Nosotros