import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Bienvenida from './pages/Bienvenida/Bienvenida';
import Login from './pages/Login/Login';
import Nosotros from './pages/Nosotros/Nosotros';
<<<<<<< HEAD
=======
import Registro from './pages/Registro/Registro';
>>>>>>> Facundo
import Inicio from './pages/Inicio/Inicio';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Camara from './pages/Camara/Camara';



const Stack = createNativeStackNavigator();

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
          <Stack.Screen name="Camara" component={Camara} />

        </Stack.Navigator>
      </NavigationContainer>
      
      </GestureHandlerRootView>
    </>
  );
};

