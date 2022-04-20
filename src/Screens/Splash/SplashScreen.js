import React from 'react'
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
  } from 'react-native';
import { commonNames } from '../../files/strings';
export default function SplashScreen(props) {
 React.useEffect(() => {
        // Update the document title using the browser API
        setTimeout(() => {
            props.navigation.replace(commonNames.WalkthroughScreen)
            }, 3000);
      });
  return (
    <View style = {{backgroundColor:'green'}}></View>
  )
}
