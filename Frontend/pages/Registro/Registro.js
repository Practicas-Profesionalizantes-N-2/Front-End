import React from 'react'
import { View, Text } from 'react-native'
import  MyButton  from '../../components/MyButton';
import { useNavigation } from '@react-navigation/native';


export default function Registro() {
    const navigation = useNavigation();
    return (
        <View>
            <Text>
                Registro
            </Text>
            <MyButton
          title="Nosotros"
          onPress={() => navigation.push('Nosotros')}
        />
        </View>
    )
}