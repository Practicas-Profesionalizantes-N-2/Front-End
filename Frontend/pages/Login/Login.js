import React from 'react'

//componentes de react-native que se usan en esta pantalla
import { TextInput, View } from 'react-native'

//habilita la navegacion hacia otras pantallas
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

// importamos
import { Contenedor } from '../../estilos/Container';
import { InputStyles } from '../../estilos/Input';
import { Boton } from '../../estilos/Boton';
import { TituloCabecera, TituloNormal } from '../../estilos/Titulo';

export default function Login() {
    const navigation = useNavigation();
    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');

    return (
        <ScrollView style={Contenedor.total}>
            <TituloCabecera> LOGIN </TituloCabecera>
            <View style={Contenedor.containerdentro}>
                <TextInput style={InputStyles.input}
                    onChangeText={onChangeEmail}
                    value={email}
                    placeholder="Email"
                    keyboardType="email-address"
                    autoComplete='email' />

                <TextInput
                    style={InputStyles.input}
                    onChangeText={onChangePassword}
                    value={password}
                    placeholder="Password"
                    type="password"
                    secureTextEntry={true} />

                <Boton onPress={() => navigation.push('Inicio')}>Iniciar Sesion</Boton>

                <Boton onPress={() => navigation.push('Nosotros')}>Nosotros</Boton>

            </View>
        </ScrollView>

    )
}

