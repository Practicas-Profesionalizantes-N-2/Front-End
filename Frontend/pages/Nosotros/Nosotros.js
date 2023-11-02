import React from 'react'
import { View, Text } from 'react-native'
import Boton from '../../components/Boton'
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import TituloBienvenida from '../../components/TituloBienvenida';


const Nosotros = () => {
    const navigation = useNavigation();

    return (
        <View>
            <TituloBienvenida>
                Somos grupo el 10
            </TituloBienvenida>
            <TituloBienvenida>
                M.E.S.I
            </TituloBienvenida>
            <TituloBienvenida>
                Mi Educación Sexual Integral
            </TituloBienvenida>

        </View>
    )
}

export default Nosotros