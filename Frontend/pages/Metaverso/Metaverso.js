import React, { useContext } from 'react';

//habilita la navegacion hacia otras pantallas
import { useNavigation } from '@react-navigation/native';

//componentes de react-native que se usan en esta pantalla
import { WebView } from 'react-native-webview'
import { View, StyleSheet } from 'react-native';

//import para manejar los temas.
import { ThemeProvider } from 'styled-components';
import { ThemesContext } from '../../Routes';


const Metaverso = () => {
  
    const navigation = useNavigation();
    const theme = useContext(ThemesContext)
    return (
        <ThemeProvider theme={theme.theme}>
        <WebView
    javaScriptEnabled
    originWhitelist={['*']}
    source={{ uri:'https://vps-4480743-x.dattaweb.com/'
    }}
    automaticallyAdjustContentInsets={false}
        style={styles.webview}
        scalesPageToFit={true} 
  />
        </ThemeProvider>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
    width: '100%',
  },
});
export default Metaverso