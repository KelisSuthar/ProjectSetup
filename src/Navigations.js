import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../src/Screens/Home/HomeScreen'
import Splash from '../src/Screens/Splash/SplashScreen'
import Login from '../src/Screens/Login/LoginScreen'
import Walkthrough from '../src/Screens/Walkthrough/WalkthroughScreen'
import { commonNames } from './files/strings';


const Stack = createNativeStackNavigator();
export default function Navigations() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name={commonNames.SplashScreen} component={Splash} />
      <Stack.Screen name={commonNames.HomeScreen} component={Home} />
      <Stack.Screen name={commonNames.WalkthroughScreen} component={Walkthrough} />
      <Stack.Screen name={commonNames.LoginScreen} component={Login} />

    </Stack.Navigator>
  </NavigationContainer>
  )
}

