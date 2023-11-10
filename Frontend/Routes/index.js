import * as React from 'react';

// importaciones para el funcionamiento de "React Navigation Native"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//importamos todas las pantallas para agregarlas al "React Navigation Native"
import Bienvenida from '../pages/Bienvenida/Bienvenida';
import Login from '../pages/Login/Login';
import Nosotros from '../pages/Nosotros/Nosotros';
import Registro from '../pages/Registro/Registro';
import Inicio from '../pages/Inicio/Inicio';
import AR from '../pages/Camara/Camara';

//la constante stack contiene todas las Pantallas (componentes)
const Stack = createNativeStackNavigator();

//la app se inica en la "Screen" que este primera
function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen name="Home" component={Bienvenida} options={{ headerShown: false }} />
                <Stack.Screen name="Nosotros" component={Nosotros} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="Registro" component={Registro} options={{ headerShown: false }} />
                <Stack.Screen name="Inicio" component={Inicio} options={{ headerShown: false }} />
                <Stack.Screen name="AR" component={AR} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;