import * as React from 'react';

// importaciones para el funcionamiento de "React Navigation Native"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//importamos todas las pantallas para agregarlas al "React Navigation Native"
import Bienvenida from './pages/Bienvenida/Bienvenida';
import Login from './pages/Login/Login';
import Nosotros from './pages/Nosotros/Nosotros';
import Registro from './pages/Registro/Registro';
import Inicio from './pages/Inicio/Inicio';
import AR from './pages/Camara/Camara';

//En app.js importamos la posibilidad de "scroll"
import { GestureHandlerRootView } from 'react-native-gesture-handler';

//la constante stack contiene todas las Pantallas (componentes)
const Stack = createNativeStackNavigator();

//la app se inica en la "Screen" que este primera
export default App = () => {
  
  return (
    <>
    <GestureHandlerRootView style={{ flex:1 }}>

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Bienvenida} />
          <Stack.Screen name="Nosotros" component={Nosotros} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Registro" component={Registro} />
          <Stack.Screen name="Inicio" component={Inicio} />
          <Stack.Screen name="AR" component={AR} />

        </Stack.Navigator>
      </NavigationContainer>
      
      </GestureHandlerRootView>
    </>
  );
};

