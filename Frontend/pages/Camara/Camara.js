import React, { useContext } from 'react';

//componentes de react-native que se usan en esta pantalla
import { View, Text, ImageBackground } from 'react-native'

// importamos 
import { Boton, CameraButton, CentralButton } from '../../estilos/Boton';
import { CamaraStyles } from '../../estilos/Camara';
import { kitcamera } from '../../estilos/Camara';

//habilita la navegacion hacia otras pantallas
import { useNavigation } from '@react-navigation/native';

//import para manejar los temas.
import { ThemeProvider } from 'styled-components';
import { ThemesContext } from '../../Routes';

//import para manejar la camara
import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';

//import svgs para la camara
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


const image = { uri: 'https://images.squarespace-cdn.com/content/v1/553a5960e4b049578051b95c/1548411479955-G52NRSO581O3VH30U9XB/realidad+aumentada.jpg' };

export default function AR() {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  const theme = useContext(ThemesContext)
  const navigation = useNavigation();

  if (!permission) {
    //No tiene permisos.
    return <View />;
  }

  if (!permission.granted) {
    // Al no tener permisos, los pide. 

    requestPermission()
  }

  return (
    <ThemeProvider theme={theme.theme}>
      <View style={CamaraStyles.container}>
        <Camera type={type} style={{ flex: 1 }}>
          <View style={CamaraStyles.containerButtons}>
            <CameraButton onPress={() => navigation.navigate('Inicio')}>
              <Ionicons name="options" size={42} /></CameraButton>
            <CentralButton onPress={() => navigation.navigate('Inicio')} >
              <FontAwesome name="circle" size={80} />
            </CentralButton>
            <CameraButton onPress={() => navigation.navigate('Inicio')}>
              <Ionicons name="reload" size={42} />
            </CameraButton>
          </View>
        </Camera>
      </View >
    </ThemeProvider >
  )
}