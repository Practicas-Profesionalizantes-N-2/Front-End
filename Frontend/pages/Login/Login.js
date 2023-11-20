import React, { useContext } from 'react';

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
        alert('La contraseña no cumple los mínimos');
        return false;
    }
    return true;
};

export default function Login() {
    const theme = useContext(ThemesContext)
    const navigation = useNavigation();
    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');

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

                    <Boton onPress={() => handleRegistro()}>Iniciar Sesion</Boton>
                    <Boton onPress={() => navigation.push('Nosotros')}>Nosotros</Boton>
                </View>
            </ScrollView>
        </ThemeProvider>
    )
}

