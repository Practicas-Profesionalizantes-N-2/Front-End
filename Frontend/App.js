import React, { useState } from 'react';
import Routes from './Routes/index.js';

//En app.js importamos la posibilidad de "scroll"
import { GestureHandlerRootView } from 'react-native-gesture-handler';

//importamos los temas para el provider 
import { themeDefault, themeDeuteranopia } from './estilos/Boton';

//Context usado para pasar los temas de daltonismo
export const ThemesContext = React.createContext();

export default App = () => {
  const [theme, setTheme] = useState(themeDeuteranopia)
  return (
    <>
      <ThemesContext.Provider value={{ theme, setTheme }}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Routes />
        </GestureHandlerRootView>
      </ThemesContext.Provider>
    </>
  );
};

