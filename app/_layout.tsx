import React, { useCallback, useEffect } from 'react'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen';
import { PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import { store } from '../redux/store';
import { Provider } from 'react-redux';

SplashScreen.preventAutoHideAsync();

const Layout:React.FC = () => {
  // const [fontsLoaded] = useFonts({
  //   PoppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
  //   PoppinsRegular: require("../assets/fonts/Poppins-Regular.ttf"),
  //   PoppinsLight: require("../assets/fonts/Poppins-Light.ttf") 
  // });

  // useEffect(() => {
  //   (async () => {
  //     if(fontsLoaded) {
  //       await SplashScreen.hideAsync();
  //     }
  //   })();

  //   if(fontsLoaded) {
  //     console.log("fonts loaded sucessfull");
  //   }
  // },[fontsLoaded]);

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

export default Layout