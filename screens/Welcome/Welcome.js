import React, { useEffect } from 'react';
import { View, Image, Text, Button } from 'react-native';

import {
  useFonts,
  Roboto_400Regular,
  Bangers_400Regular,
  OpenSans_400Regular
} from "@expo-google-fonts/dev";

export default ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Bangers_400Regular,
    OpenSans_400Regular
  });

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate({
        name: "Home",
      })
    }, 1000)
  }, [])

  return (
    <View style={[{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1
    }]}>
      <Image
        source={require('../../assets/logo.png')}
        style={[{ width: 120, height: 120 }]}
      ></Image>
      <Text style={[{
        fontSize: 20,
        fontFamily: 'Roboto_400Regular',
        marginTop: 10,
        fontWeight: 'bold'
      }]}>
        Tasks App
      </Text>
    </View>
  )
}

