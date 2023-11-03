import React from 'react'

//importamos
import { TextInput } from 'react-native'
import { Boton } from '../../estilos/Boton';
import { InputStyles } from '../../estilos/Input';

//habilita la navegacion hacia otras pantallas
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { Contenedor } from '../../estilos/Container';


export default function Registro() {
    const navigation = useNavigation();
    const [nombre, onChangeNombre] = React.useState('');
    const [apellido, onChangeApellido] = React.useState('');
    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    const [edad, onChangeEdad] = React.useState('');

    return (
        <ScrollView style={Contenedor.containerdentro}>
            <TextInput style={InputStyles.input}
                onChangeText={onChangeNombre}
                value={nombre}
                placeholder="Nombre" />
            <TextInput style={InputStyles.input}
                onChangeText={onChangeApellido}
                value={apellido}
                placeholder="Apellido" />
            <TextInput style={InputStyles.input}
                onChangeText={onChangeEmail}
                value={email}
                placeholder="Email"
                keyboardType="email-address" />
            <TextInput
                style={InputStyles.input}
                onChangeText={onChangePassword}
                value={password}
                placeholder="Password"
                secureTextEntry={true} />
            <TextInput
                style={InputStyles.input}
                onChangeText={onChangeEdad}
                value={edad}
                placeholder="Edad"
                keyboardType="numeric" />

            <Boton onPress={() => navigation.push('Inicio')}>Registrar</Boton>

            <Boton onPress={() => navigation.push('Nosotros')}>Nosotros</Boton>

        </ScrollView>
    )
}

