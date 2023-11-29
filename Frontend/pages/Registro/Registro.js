import React, { useContext, useState } from 'react';

// Importamos
import { Modal, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Boton } from '../../estilos/Boton';
import { InputStyles } from '../../estilos/Input';
import { Contenedor } from '../../estilos/Container';
import { TituloCabecera } from '../../estilos/Titulo';

// Habilita la navegacion hacia otras pantallas
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

// Import para manejar los temas.
import { ThemeProvider } from 'styled-components';
import { ThemesContext } from '../../Routes';

import { URLregister } from '../../Routes/url';

export default function Registro() {

    // Temas (colores adaptados - Daltonismo)
    const theme = useContext(ThemesContext)

    // Navegacion entre pantallas
    const navigation = useNavigation();

    // UseState para guardar los datos
    const [name, setName] = React.useState('');
    const [lastname, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [age, setAge] = React.useState('');

    // Modal
    // Iniciador 
    const [modalVisible, setModalVisible] = useState(false);
    // Mensaje 
    const [modalMessage, setModalMessage] = useState('');

    const handleRegistro = async () => {

        const data = { name: name, lastname: lastname, email: email, password: password, age: age };

        // Realizar petición fetch
        try {
            const response = await fetch(URLregister, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })

            // Validacion BACKEND
            if (response.status == 400) { // Si el correo ya esta repetido
                const errorData = await response.json();
                for (const error of errorData.msg.errors) {
                    // Set the modal message with the current error message
                    setModalMessage(error.msg);
                    // Show the modal
                    setModalVisible(true);
                  }
            }
            if (response.status == 401) { // Si el correo ya esta repetido
                const errorData = await response.json();{
                    // Set the modal message with the current error message
                    setModalMessage(errorData.msg);
                    // Show the modal
                    setModalVisible(true);
                  }
            }
            // Si no encuentra otro registro con ese mail
            const responseData = await response.json();
            alert('Usuario registrado con éxito');
            // Navega a la siguiente pagina
            navigation.push('Inicio');
        } catch (error) {
        }
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
                    <TextInput
                        style={InputStyles.input}
                        onChangeText={(text) => setAge(text)}
                        value={age}
                        placeholder="Edad"
                        keyboardType="numeric" />
                    <Boton onPress={() => handleRegistro()} > Registrarme </Boton>
                    <Boton onPress={() => navigation.push('Nosotros')}> Ir a Nosotros </Boton>
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

