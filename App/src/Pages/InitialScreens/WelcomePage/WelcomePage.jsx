import React from 'react';
import {Button, Image, Text, TouchableHighlight, View} from 'react-native';
import {styles} from './style';

function WelcomePage({navigation}) {
  return (
     <View style={styles.container}>
      <View style={styles.logo}>
        <Image style={styles.logoImage} source={require('./img/logoHD.png')} />
      </View>
      <View style={styles.needy}>
        <Image style={styles.needyImage} source={require('./img/welcome_main.png')} />
      </View>
      <Text style={styles.text}>
        {' '}
        ALL JOBS{'\n'} IN ONE{'\n'} PLATFORM
      </Text>
      <View style={styles.buttons}>
        <TouchableHighlight style={styles.signupButton} underlayColor="#014370" onPress={()=>{navigation.navigate('Signup1Screen')}}>
          <Text style={styles.buttonTexts}>Register</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.loginButton} underlayColor="#066AAE" onPress={()=>{navigation.navigate('LoginScreen')}}>
          <Text style={styles.buttonTexts}>Log in</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

export default WelcomePage;
