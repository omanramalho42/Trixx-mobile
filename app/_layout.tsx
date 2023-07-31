import React, { useCallback, useEffect } from 'react'

import { useFonts } from 'expo-font'

import { Stack } from 'expo-router'

import * as SplashScreen from 'expo-splash-screen';

import { PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';

import { AppRegistry } from 'react-native';

import { store } from '../redux/store';

import Constants from 'expo-constants';

SplashScreen.preventAutoHideAsync();
const appName = Constants.manifest.name;

const Layout:React.FC = () => {
  const [fontsLoaded] = useFonts({
    'PoppinsBold': require("../assets/fonts/Poppins-Bold.ttf"),
    'PoppinsRegular': require("../assets/fonts/Poppins-Regular.ttf"),
    'PoppinsLight': require("../assets/fonts/Poppins-Light.ttf") 
  });

  if (!fontsLoaded) {
    // Renderize uma tela de carregamento ou um componente de esqueleto enquanto as fontes estão sendo carregadas.
    return null;
  }

  if(!fontsLoaded) return null;

  return (
    <StoreProvider store={store}>
      <PaperProvider>
        {/* <Provider store={store}> */}
          <Stack  />
        {/* </Provider> */}
      </PaperProvider>
    </StoreProvider>
  )
}

AppRegistry.registerComponent(appName, () => Layout);
export default Layout