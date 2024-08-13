import React, { useContext } from 'react';

//habilita la navegacion hacia otras pantallas
import { useNavigation } from '@react-navigation/native';

//componentes de react-native que se usan en esta pantalla
import { WebView } from 'react-native-webview'

//import para manejar los temas.
import { ThemeProvider } from 'styled-components';
import { ThemesContext } from '../../Routes';


const Aframe = () => {
    const navigation = useNavigation();
    const theme = useContext(ThemesContext)
    return (
        <ThemeProvider theme={theme.theme}>
            <WebView
          scalesPageToFit={true}
          scrollEnabled={false}
          bounces={false}
          javaScriptEnabled
          style={{ height: 1}}
          source={{
            html: `
            <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Demo</title>
    <script src="https://aframe.io/releases/1.3.0/aframe.js"></script>

</head>

<body>

    <script src="room.js"></script>
    <a-scene>
        <a-assets>
            <!--textures-->
            <img id="brick" src="./textures/walls/brick.jpg">
            <img id="door" src="./textures/wood/bigdoor.jpg">
            <img id="floorboards" src="./textures/wood/floorboards.jpg">
            <img id="floor" src="./textures/wood/floor.jpg">
            <img id="wooddoor" src="./textures/wood/wooddoor.jpg">
            <img id="grunge" src="textures/structures/whiterock.jpg">
            <img id="orangebrick" src="./textures/walls/orangebrick.jpg">
        </a-assets>

        <a-entity light="type: ambient; color: #CCC;intensity: 0.1;"></a-entity>
        <a-entity id="camera" position='0 1 0' camera look-controls wasd-controls touchEnabled></a-entity>
        <a-entity id="room"
            room="mapToLoad:map; wallColor:#FFFFE0; wallTexture:grunge; wallTexture2:grunge; wallTexture3:grunge;floorTexture:wooddoor; indoor:true"></a-entity>
        <a-sky id="sky" color="blue"></a-sky>
    </a-scene>
</body>

</html>
            `,
          }}
          automaticallyAdjustContentInsets={false}
        />
        </ThemeProvider>
    )
}

export default Aframe