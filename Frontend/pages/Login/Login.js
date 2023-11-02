import { View, Text } from 'react-native'
import  Boton  from '../../components/Boton';
import { useNavigation } from '@react-navigation/native';


export default function Login() {
    const navigation = useNavigation();
    return (

        <View>
            <TituloInicio>
                Login
            </TituloInicio>
            <Boton
          title="Nosotros"
          onPress={() => navigation.push('Nosotros')}
        />
        </View>
    )
}