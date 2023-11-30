<<<<<<< HEAD
import React, { useContext, useState } from 'react';
=======
import React, { useContext } from 'react';
import { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
// Importamos el modal que instale para que podamos reemplazarlo por los alerts 
import Modal from 'react-native-modal';
>>>>>>> Micaela

//componentes de react-native que se usan en esta pantalla
import { Modal, Text, TextInput, TouchableOpacity, View } from 'react-native'

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

<<<<<<< HEAD
import { URLlogin } from '../../Routes/url';
=======

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
>>>>>>> Micaela

export default function Login() {

    // Temas (colores adaptados - Daltonismo)
    const theme = useContext(ThemesContext)

    // Navegacion entre pantallas
    const navigation = useNavigation();

<<<<<<< HEAD
    // UseState para guardar los datos
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    // Modal
    // Iniciador 
    const [modalVisible, setModalVisible] = useState(false);
    // Mensaje 
    const [modalMessage, setModalMessage] = useState('');

    const handleInicioSesion = async () => {

        const data = { email: email, password: password };

        // Realizar petición fetch
        try {
            const response = await fetch(URLlogin, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
            // Validacion BACKEND
            if (response.status == 401) {
                const errorData = await response.json(); {
                    setModalMessage(errorData.msg);
                    setModalVisible(true);
                }
            }
            const responseData = await response.json();
            // Si los datos estan bien navega a la siguiente pagina
            navigation.push('Inicio');
        } catch (error) {
=======

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
>>>>>>> Micaela
        }
    };





    return (
        <ThemeProvider theme={theme.theme}>
            <ScrollView style={Contenedor.total}>
                <TituloCabecera> Inicio de Sesion </TituloCabecera>
                <View style={Contenedor.containerdentro}>
                    <TextInput style={InputStyles.input}
                        onChangeText={setEmail}
                        value={email}
                        placeholder="Email"
                        keyboardType="email-address"
                        autoComplete='email' />
                    <TextInput
                        style={InputStyles.input}
                        onChangeText={setPassword}
                        value={password}
                        placeholder="Contraseña"
                        type="password"
                        secureTextEntry={true} />

                    <Boton onPress={() => handleInicioSesion()}>Iniciar Sesion</Boton>
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

                <Modal visible={modalVisible} transparent={true} animationType="fade">

                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                        <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, alignItems: 'center' }}>
                            <Text>{modalMessage}</Text>

                            <TouchableOpacity onPress={() => setModalVisible(false)} style={{ borderRadius: 10, padding: 10, marginTop: 20, backgroundColor: "lightgrey" }}>
                                <Text>Cerrar</Text>
                            </TouchableOpacity>

                        </View>

                    </View>
                </Modal>

            </ScrollView>
        </ThemeProvider>
    )
}

