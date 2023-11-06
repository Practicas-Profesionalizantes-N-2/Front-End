import React from 'react'

//componentes de react-native que se usan en esta pantalla
import { TextInput } from 'react-native'

//habilita la navegacion hacia otras pantallas
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

// importamos
import { Contenedor } from '../../estilos/Container';
import { InputStyles } from '../../estilos/Input';
import { Boton } from '../../estilos/Boton';

export default function Login() {
    const navigation = useNavigation();
    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');

    return (
<<<<<<< HEAD
        <View>
            <TextInput style={styles.input}
=======
        <ScrollView style={Contenedor.containerdentro}>

            <TextInput style={InputStyles.input}
>>>>>>> main
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

<<<<<<< HEAD
        </View>
=======
        </ScrollView>
>>>>>>> main
    )
}

