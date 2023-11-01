import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Bienvenida from './pages/Bienvenida/Bienvenida';
import Login from './pages/Login/Login';
import Nosotros from './pages/Nosotros/Nosotros';

const Stack = createNativeStackNavigator();

export default App = () => {
  
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Bienvenida} />
          <Stack.Screen name="Nosotros" component={Nosotros} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
        

       
      </NavigationContainer>
    </>
  );
};

