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
        alert('La contraseña requiere como minimo 8 carácteres, una mayúscula, una minúscula, un número y un símbolo.');
        return false;
    }
    return true;
};

export default function Registro() {
    const theme = useContext(ThemesContext)
    const navigation = useNavigation();
    const [name, setName] = React.useState('');
    const [lastname, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [age, setAge] = React.useState('');

    const URL = 'http://3.15.192.187:3000/api/register'

    const handleRegistro = async () => {

        const data = { name: name, lastname: lastname, email: email, password: password, age: age };

        console.log(data);
        // Realizar petición fetch
        fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            
            .catch(error => {
                console.error('Error en la petición:', error.msg);
            });

        // pide el valor del form y valida con validateEmail
        if (!validateEmail(email)) {
            return;
        }
        // pide el valor del form y valida con validatePassword
        if (!validatePassword(password)) {
            return;
        }

        //Placeholder para el 'envio de datos' y navega a la siguiente pagina

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
            </ScrollView>
        </ThemeProvider>
    )
}

