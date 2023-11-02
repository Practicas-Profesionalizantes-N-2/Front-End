import { View, Text } from 'react-native'
import  MyButton  from '../../components/MyButton';
import { useNavigation } from '@react-navigation/native';


export default function Login() {
    const navigation = useNavigation();
    return (

        <View>
            <TituloInicio>
                Login
            </TituloInicio>
            <MyButton
        title="Nosotros"
        onPress={() => navigation.push('Nosotros')}
        />
        </View>
    )
}