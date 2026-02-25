import { SafeAreaView } from "react-native-safe-area-context";
import { AppRoutes } from "./routes";
import * as SplashScreen from 'expo-splash-screen';
import { Inter_800ExtraBold, Inter_400Regular_Italic, Inter_400Regular, useFonts } from '@expo-google-fonts/inter'
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();


export default function App() {

  const [loaded, err] = useFonts({
    extraBold: Inter_800ExtraBold, 
    regularItalic: Inter_400Regular_Italic, 
    regular: Inter_400Regular
  });

  useEffect(() => {
    if (loaded || err) {
      SplashScreen.hideAsync();
    }
  }, [loaded, err]);

  if (!loaded && err) {
    return null;
  }

  return (
    <AppRoutes />
  );
}

