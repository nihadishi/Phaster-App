import React from 'react';
import {Image, Dimensions} from 'react-native';
import { View } from 'react-native-animatable';

function StartScreen() {
  const screenHeight = Dimensions.get('window').height;
  const screenWidth = Dimensions.get('window').width;
  return (
    <View style={{backgroundColor:"#014370",alignItems:"center",justifyContent:"center", height:screenHeight}}>
    <Image
      style={{width: "100%",objectFit:"contain" }}
      source={require('../../assets/img/main_logo.png')}
    />
    </View>
  );
}

export default StartScreen;
