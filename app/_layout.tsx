import React, { useCallback } from 'react'

import { 
  useFonts, 
  Poppins_300Light, 
  Poppins_700Bold, 
  Poppins_600SemiBold, 
  Poppins_400Regular, 
  Poppins_900Black 
} from '@expo-google-fonts/poppins'

import AppLoading from 'expo-app-loading';

import { Stack } from 'expo-router'

import * as SplashScreen from 'expo-splash-screen';

import { PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';

import { store } from '../redux/store';

import { AppRegistry } from 'react-native';
import Constants from 'expo-constants';

SplashScreen.preventAutoHideAsync();
const appName = Constants.manifest.name;

const Layout:React.FC = () => {
  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_900Black
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    <AppLoading />
  }

  onLayoutRootView();

  return (
    <StoreProvider store={store}>
      <PaperProvider>
          <Stack  />
      </PaperProvider>
    </StoreProvider>
  )
}

AppRegistry.registerComponent(appName, () => Layout);
export default Layout