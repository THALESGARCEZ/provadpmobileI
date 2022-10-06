import { StatusBar } from 'react-native';
import { Home } from './src/screens/Home';

import {
  useFonts,
  Inter_400Regular,
  Inter_900Black,
} from '@expo-google-fonts/inter';

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Home />
    </>
  );
}
