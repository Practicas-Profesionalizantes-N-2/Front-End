import React, { useContext } from 'react';

//importamos
import { TextInput, View } from 'react-native'
import { Boton } from '../../estilos/Boton';
import { InputStyles } from '../../estilos/Input';

//habilita la navegacion hacia otras pantallas
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { Contenedor } from '../../estilos/Container';
import { TituloCabecera } from '../../estilos/Titulo';

//import para manejar los temas.
import { ThemeProvider } from 'styled-components';
import { ThemesContext } from '../../Routes';

//requerimos el validator
const validator = require('validator');

const validateEmail = (email) => {
    if (!validator.isEmail(email)) {
        alert('El correo electrónico no es válido.');
        return false;
    }
    return true;
};

const validatePassword = (password) => {
    if (!validator.isStrongPassword(password)) {
        alert('La contraseña no cumple los minimos');
        return false;
    }
    return true;
};

export default function Registro() {
    const theme = useContext(ThemesContext)
    const navigation = useNavigation();
    const [nombre, onChangeNombre] = React.useState('');
    const [apellido, onChangeApellido] = React.useState('');
    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    const [edad, onChangeEdad] = React.useState('');

    const handleRegistro = () => {
        // pide el valor del form y valida con validateEmail
        if (!validateEmail(email)) {
            return;
        }
        if (!validatePassword(password)) {
            return;
        }

        //Placeholder para el 'envio de datos' y navega a la siguiente pagina
        console.log('Registro enviado');
        navigation.push('Inicio');
    };

    return (
        <ThemeProvider theme={theme.theme}>
            <ScrollView style={Contenedor.total}>
                <TituloCabecera> REGISTRARME </TituloCabecera>
                <View style={Contenedor.containerdentro}>
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
                        secureTextEntry={true}
                    />
                    <TextInput
                        style={InputStyles.input}
                        onChangeText={onChangeEdad}
                        value={edad}
                        placeholder="Edad"
                        keyboardType="numeric" />
                    <Boton onPress={() => handleRegistro()} >Registrarme</Boton>
                    <Boton onPress={() => navigation.push('Nosotros')}>Ir a Nosotros</Boton>
                </View>
            </ScrollView>
        </ThemeProvider>
    )
}


