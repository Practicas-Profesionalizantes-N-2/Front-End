import React from 'react'
import { View, Text } from 'react-native'
import Boton from '../../components/Boton'
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

const Nosotros = () => {
    const navigation = useNavigation();

    return (
        <View>
            <Text>
                Nosotros
            </Text>
            <Boton
          title="Registro"
          onPress={() => navigation.push('Registro')}
        />
        </View>
    )
}

export default Nosotros