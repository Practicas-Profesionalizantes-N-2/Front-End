import { View, Text } from 'react-native'
import TituloInicio from '../../components/TituloInicio'
import Boton from '../../components/Boton'

const Login = () => {
    return (
        <View>
            <TituloInicio>
                Login
                

            </TituloInicio>
            <Boton onPress={() => Alert.alert("¡Iniciaste!")}>Iniciar </Boton>
        </View>
    )
}

export default Login