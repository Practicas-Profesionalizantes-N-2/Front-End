import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import Boton from '../../components/Boton';
import { useNavigation } from '@react-navigation/native';


export default function Registro() {
    const navigation = useNavigation();
    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    const [edad, onChangeEdad] = React.useState('');

    return (
        <View>
            <TextInput style={styles.input}
                onChangeText={onChangeEmail}
                value={email}
                placeholder="Email" />
            <TextInput
                style={styles.input}
                onChangeText={onChangePassword}
                value={password}
                placeholder="Password" />
            <TextInput
                style={styles.input}
                onChangeText={onChangeEdad}
                value={edad}
                placeholder="Edad"
                keyboardType="numeric"
            />
            <Boton
                title="Inicio"
                onPress={() => navigation.push('Inicio')}>Iniciar Sesion</Boton>

            <Boton
                title="Nosotros"
                onPress={() => navigation.push('Nosotros')}>Nosotros</Boton>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});