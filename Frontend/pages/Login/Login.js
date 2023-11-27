import React, { useContext } from 'react';
import { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
// Importamos el modal que instale para que podamos reemplazarlo por los alerts 
import Modal from 'react-native-modal';

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
        return false;
    }
    return true;
};

const validatePassword = (password) => {
    if (!validator.isStrongPassword(password)) {
        return false;
    }
    return true;
};

export default function Login() {
    const theme = useContext(ThemesContext)
    const navigation = useNavigation();
    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');


    const [modalVisible, setModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState('');


    const handleRegistro = () => {
        if (!validateEmail(email)) {
            setModalMessage('El correo electrónico no es válido.');
            setModalVisible(true);
            return;
        }

        if (!validatePassword(password)) {
            setModalMessage('La contraseña no cumple los mínimos');
            setModalVisible(true);
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
                        placeholder="Contraseña"
                        type="password"
                        secureTextEntry={true} />

                    <Boton onPress={() => handleRegistro()}>Iniciar Sesion</Boton>
                    <Boton onPress={() => navigation.push('Nosotros')}>Nosotros</Boton>
                    <Modal isVisible={modalVisible}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, alignItems: 'center' }}>
                                <Text>{modalMessage}</Text>
                                <TouchableOpacity onPress={() => setModalVisible(false)}>
                                    <Text>Cerrar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                </View>
            </ScrollView>
        </ThemeProvider>
    )
}

