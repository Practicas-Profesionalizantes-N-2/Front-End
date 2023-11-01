import React from 'react'
import { View, Text } from 'react-native'
import TituloInicio from '../../components/TituloInicio'
import Boton from '../../components/Boton'

const Nosotros = () => {
    return (
        <View>
            <TituloInicio>
                Nosotros
              

            </TituloInicio>
            <Boton onPress={() => Alert.alert("¡Iniciaste!")}>Iniciar </Boton>
        </View>
    )
}

export default Nosotros