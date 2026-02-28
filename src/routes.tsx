

import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { HomePage } from "./screens/home";
import { DetailPage } from "./screens/detail";
import { SetUserNamePage } from "./screens/setusername";
import { NavigationContainer, RouteProp } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "./shared/themes/Theme";

type TScreenDefinitions = {
  home: {newName: string} | undefined;
  setusername: undefined;
  detail: { rate: number };
  
}

const Stack = createNativeStackNavigator<TScreenDefinitions>();

export const AppRoutes = () => {
  return (
  <NavigationContainer>
    <Stack.Navigator 
      initialRouteName="home"
      screenOptions={{
        headerShown: false, 
        contentStyle: {
          backgroundColor: theme.colors.background
        }
      }}
      screenLayout={({children}) => (
        <SafeAreaView style={{flex: 1}} edges={['top', 'left', 'right']}>
          {children}
        </SafeAreaView>
      )}
    >
      
          <Stack.Screen name="home" component={HomePage} />

          <Stack.Group 
            screenOptions={{
              presentation: 'formSheet',
              sheetCornerRadius: 24,
              contentStyle: {
                height: '100%'
              }
            
            }}
            screenLayout={({children}) => (
              <SafeAreaView 
                
                edges={['left', 'right']}
                style= {{
                  flex: 1,
                  padding: 16,
                  backgroundColor: theme.colors.paper,
                }}>
                {children}
              </SafeAreaView>)}
          >

            <Stack.Screen 
              name="detail" 
              component={DetailPage}
              options={{sheetAllowedDetents: [0.8]}} 
            />
            <Stack.Screen 
              name="setusername" 
              component={SetUserNamePage}
              options={{sheetAllowedDetents: [0.4]}} 
            />
          </Stack.Group>
    </Stack.Navigator>
  </NavigationContainer>
  );
}


export type TNavigationScreenProps = NativeStackNavigationProp<TScreenDefinitions>;
export type TRouteProps<T extends keyof TScreenDefinitions> = RouteProp<TScreenDefinitions, T>;