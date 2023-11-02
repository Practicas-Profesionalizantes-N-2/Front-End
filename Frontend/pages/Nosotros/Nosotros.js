import React from 'react'
import { View, Text } from 'react-native'
<<<<<<< HEAD
import TituloInicio from '../../components/TituloInicio'
import Boton from '../../components/Boton'
=======
import Boton from '../../components/Boton'
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import TituloBienvenida from '../../components/TituloBienvenida';

>>>>>>> Facundo

const Nosotros = () => {
    const navigation = useNavigation();

    return (
        <View>
<<<<<<< HEAD
            <TituloInicio>
                Nosotros
              

            </TituloInicio>
            <Boton onPress={() => Alert.alert("¡Iniciaste!")}>Iniciar </Boton>
=======
            <TituloBienvenida>
                Somos grupo el 10
            </TituloBienvenida>
            <TituloBienvenida>
                M.E.S.I
            </TituloBienvenida>
            <TituloBienvenida>
                Mi Educación Sexual Integral
            </TituloBienvenida>

>>>>>>> Facundo
        </View>
    )
}

export default Nosotros