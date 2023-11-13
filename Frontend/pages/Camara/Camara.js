import React from 'react'

//componentes de react-native que se usan en esta pantalla
import { View, Text, ImageBackground } from 'react-native'

// importamos 
import { Boton } from '../../estilos/Boton';
import { CamaraStyles } from '../../estilos/Camara';

//habilita la navegacion hacia otras pantallas
import { useNavigation } from '@react-navigation/native';

//import para manejar los temas.
import { ThemeProvider } from 'styled-components';
import { ThemesContext } from '../../App';

const image = { uri: 'https://blog.realidad-aumentada.com.co/wp-content/uploads/2020/01/RealidadAumentada-1-scaled.jpg' };

export default function AR() {
  const theme = useContext(ThemesContext)
  const navigation = useNavigation();
  return (
    <ThemeProvider theme={theme.theme}>
      <View style={CamaraStyles.container}>
        <ImageBackground source={image} resizeMode="cover" style={CamaraStyles.image}>
          <Text style={CamaraStyles.text}>por ahora, imagina que aca aparece la realidad aumentada</Text>
          <Boton onPress={() => navigation.navigate('Home')}> Volver al inicio </Boton>
        </ImageBackground>
      </View>
    </ThemeProvider>
  )
}