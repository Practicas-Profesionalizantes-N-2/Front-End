import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Bienvenida from './pages/Bienvenida/Bienvenida';
import Login from './pages/Login/Login';
import Nosotros from './pages/Nosotros/Nosotros';
import Registro from './pages/Registro/Registro';

import { NativeViewGestureHandler, ScrollView } from 'react-native-gesture-handler';


const Stack = createNativeStackNavigator();

export default App = () => {
  
  return (
    <>
    
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Bienvenida} />
          <Stack.Screen name="Nosotros" component={Nosotros} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Registro" component={Registro} />

        </Stack.Navigator>
        

       
      </NavigationContainer>
      
    </>
  );
};

