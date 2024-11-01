import React, { useContext } from 'react';

//habilita la navegacion hacia otras pantallas
import { useNavigation } from '@react-navigation/native';

//componentes de react-native que se usan en esta pantalla
import { WebView } from 'react-native-webview'

//import para manejar los temas.
import { ThemeProvider } from 'styled-components';
import { ThemesContext } from '../../Routes';


const Metaverso = () => {
    const navigation = useNavigation();
    const theme = useContext(ThemesContext)
    return (
        <ThemeProvider theme={theme.theme}>
            <WebView
          scalesPageToFit={false}
          bounces={false}
          javaScriptEnabled
          style={{ height: 1}}
          source={{
            html: `
                  <!DOCTYPE html>
                  <html>
                    <body>
                      <div id="baseDiv"><iframe width="100%" height="100%" style="position:absolute; top: 2rem; left: 0" frameborder="0" allow="camera; microphone; fullscreen; display-capture; autoplay" src="https://vps-4480743-x.dattaweb.com/"/></iframe></div>
                    </body>
                  </html>
            `,
          }}
          automaticallyAdjustContentInsets={false}
        />
        </ThemeProvider>
    )
}

export default Metaverso