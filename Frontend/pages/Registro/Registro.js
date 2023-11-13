import React, {useContext} from 'react';

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
import { ThemesContext } from '../../App';

export default function Registro() {
    const theme = useContext(ThemesContext)
    const navigation = useNavigation();
    const [nombre, onChangeNombre] = React.useState('');
    const [apellido, onChangeApellido] = React.useState('');
    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    const [edad, onChangeEdad] = React.useState('');

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
                        secureTextEntry={true} />
                    <TextInput
                        style={InputStyles.input}
                        onChangeText={onChangeEdad}
                        value={edad}
                        placeholder="Edad"
                        keyboardType="numeric" />
                    <Boton onPress={() => navigation.push('Inicio')} >Registrarme</Boton>
                    <Boton onPress={() => navigation.push('Nosotros')}>Ir a Nosotros</Boton>
                </View>
            </ScrollView>
        </ThemeProvider>
    )
}


