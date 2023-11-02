import React from 'react'
import { View, Text } from 'react-native'
import MyButton from '../../components/MyButton'
import { useNavigation } from '@react-navigation/native';

const Nosotros = () => {
    const navigation = useNavigation();

    return (
        <View>
            <TituloInicio>
                Nosotros
            </Text>
            <MyButton
          title="Registro"
          onPress={() => navigation.push('Registro')}
        />
        </View>
    )
}

export default Nosotros