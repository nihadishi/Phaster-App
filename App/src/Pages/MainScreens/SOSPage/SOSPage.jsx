import {View, Text, ScrollView,TouchableHighlight, Alert} from 'react-native';
import React from 'react';
import Footer from '../../../layouts/Footer/Footer';
import {Dimensions} from 'react-native';
import {styles} from './style';
const SOSPage = ({navigation}) => {
  const screenHeight = Dimensions.get('window').height;

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      style={{backgroundColor: '#014370'}}>
      <View style={[styles.main, {height: screenHeight}]}>
        <View>
          <View style={styles.header}>
            <Text style={styles.headerText}>All Jobs</Text>
          </View>

          <ScrollView
          horizontal={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ alignItems: 'center' }}
            style={styles.sosItems}>
            <TouchableHighlight underlayColor='blue' onPress={()=>{Alert.alert("Information","This job doesn't match your skills")}} style={styles.sosItem}><View></View></TouchableHighlight>
            <TouchableHighlight underlayColor='blue' onPress={()=>{Alert.alert("Information","This job doesn't match your skills")}} style={styles.sosItem}><View></View></TouchableHighlight>
            <TouchableHighlight underlayColor='blue' onPress={()=>{Alert.alert("Information","This job doesn't match your skills")}} style={styles.sosItem}><View></View></TouchableHighlight>
          </ScrollView>
        </View>
      </View>
      {/* <Footer navigation={navigation} value={2} /> */}
    </ScrollView>
  );
};

export default SOSPage;
