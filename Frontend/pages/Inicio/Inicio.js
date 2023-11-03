import React from 'react'

//permitimos que se pueda hacer "scroll" si es necesario 
import { ScrollView } from 'react-native';

//habilita la navegacion hacia otras pantallas
import { useNavigation } from '@react-navigation/native';

// importamos los elementos que creamos en componentes
import { TituloInicio } from '../../estilos/Titulo';
import { Boton } from '../../estilos/Boton';
import { Contenedor } from '../../estilos/Container';


const Inicio = () => {
    const navigation = useNavigation();

    return (
        <ScrollView style={Contenedor.containerdentro}>
            <TituloInicio> Bienvenido al museo de ESI</TituloInicio>
            <TituloInicio> Apunta con tu celular para empezar a EXPLORAR</TituloInicio>
            <Boton onPress={() => navigation.navigate('AR')}>Iniciar </Boton>

        </ScrollView>


    )
}



export default Inicio