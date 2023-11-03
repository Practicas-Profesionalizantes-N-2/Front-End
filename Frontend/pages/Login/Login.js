import React from 'react'
import {  TextInput } from 'react-native'
import { Boton } from '../../estilos/Boton';

//habilita la navegacion hacia otras pantallas
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { Contenedor } from '../../estilos/Container';
import { InputStyles } from '../../estilos/Input';

export default function Login() {
    const navigation = useNavigation();
    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');

    return (
        <ScrollView style={Contenedor.containerdentro}>
            <TextInput style={InputStyles.input}
                onChangeText={onChangeEmail}
                value={email}
                placeholder="Email"
                keyboardType="email-address" />
            <TextInput
                style={InputStyles.input}
                onChangeText={onChangePassword}
                value={password}
                placeholder="Password" />

            <Boton onPress={() => navigation.push('Inicio')}>Iniciar Sesion</Boton>

            <Boton onPress={() => navigation.push('Nosotros')}>Nosotros</Boton>

        </ScrollView>
    )
}

