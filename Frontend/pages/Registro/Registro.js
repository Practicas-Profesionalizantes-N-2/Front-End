import React, { useContext, useState } from 'react';
import { TextInput, View, Modal, Text, TouchableOpacity } from 'react-native';
import { Boton } from '../../estilos/Boton';
import { InputStyles } from '../../estilos/Input';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { Contenedor } from '../../estilos/Container';
import { TituloCabecera } from '../../estilos/Titulo';
import { ThemeProvider } from 'styled-components';
import { ThemesContext } from '../../Routes';
const validator = require('validator');

const validateEmail = (email) => {
    if (!validator.isEmail(email)) {
        return 'El correo electrónico no es válido.';
    }
    return '';
};

const validatePassword = (password) => {
    if (!validator.isStrongPassword(password)) {
        return 'La contraseña requiere 8 caracteres, una mayúscula, una minúscula, un número y un símbolo.';
    }
    return '';
};

export default function Registro() {

    // Temas (colores adaptados - Daltonismo)
    const theme = useContext(ThemesContext)

    // Navegacion entre pantallas
    const navigation = useNavigation();
    const [nombre, onChangeNombre] = React.useState('');
    const [apellido, onChangeApellido] = React.useState('');
    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    const [edad, onChangeEdad] = React.useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    const handleRegistro = () => {
        const emailError = validateEmail(email);
        const passwordError = validatePassword(password);

        if (emailError) {
            setModalMessage(emailError);
            setModalVisible(true);
            return;
        }
        if (passwordError) {
            setModalMessage(passwordError);
            setModalVisible(true);
            return;
        }

        // Placeholder para el 'envío de datos' y navegación a la siguiente página
        console.log('Registro enviado');
        navigation.push('Inicio');
    };



    return (
        <ThemeProvider theme={theme.theme}>
            <ScrollView style={Contenedor.total}>
                <TituloCabecera> REGISTRO </TituloCabecera>
                <View style={Contenedor.containerdentro}>
                    <TextInput style={InputStyles.input}
                        value={name}
                        onChangeText={setName}
                        placeholder="Nombre" />
                    <TextInput style={InputStyles.input}
                        onChangeText={(text) => setLastName(text)}
                        value={lastname}
                        placeholder="Apellido" />
                    <TextInput
                        style={InputStyles.input}
                        onChangeText={onChangeEdad}
                        value={edad}
                        placeholder="Edad"
                        keyboardType="numeric" />
                    <TextInput style={InputStyles.input}
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                        placeholder="Email"
                        keyboardType="email-address" />
                    <TextInput
                        style={InputStyles.input}
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                        placeholder="Contraseña"
                        secureTextEntry={true}
                    />


                    <Boton onPress={() => handleRegistro()}>Registrarme</Boton>
                    <Boton onPress={() => navigation.push('Nosotros')}>Ir a Nosotros</Boton>
                </View>

                <Modal visible={modalVisible} transparent={true} animationType="fade">
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                        <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, alignItems: 'center' }}>
                            <Text>{modalMessage}</Text>
                            <TouchableOpacity onPress={() => setModalVisible(false)}>
                                <Text>Cerrar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </ScrollView>
        </ThemeProvider>
    )
}
