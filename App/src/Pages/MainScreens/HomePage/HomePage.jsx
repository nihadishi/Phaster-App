import {
  View,
  Text,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import React, {useState} from 'react';
import Footer from '../../../layouts/Footer/Footer';
import {styles} from './style';
import {Dimensions,Linking } from 'react-native';
import MenuSvg from './img/hamburgermenu.svg';
import NotificationSvg from './img/notification.svg';
import Menu from '../../../layouts/Menu/Menu';
import Notifications from '../../../layouts/Notifications/Notifications';
import {useMenuNotificationContext} from '../../../assets/contexts/MenuNotificationContext';
import {Image} from 'react-native-animatable';
import { Link } from '@react-navigation/native';
const HomePage = ({navigation}) => {
  const screenHeight = Dimensions.get('window').height;
  const {menuIsOpen, setmenuIsOpen, notificationIsOpen, setnotificationIsOpen} =
    useMenuNotificationContext();
  return (
    <>
      {/* <Menu />
      <Notifications />
      <Footer/> */}
      <ScrollView
        keyboardShouldPersistTaps="handled"
        style={{backgroundColor: '#fff', flex: 1}}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={[styles.main, {height: screenHeight}]}>
          <View>
            <View style={styles.header}>
              <TouchableHighlight
                underlayColor="transparent"
                onPress={() => {
                  setmenuIsOpen(true);
                }}>
                <MenuSvg />
              </TouchableHighlight>
              <Text style={styles.headerText}>Phaster</Text>
              <TouchableHighlight
                underlayColor="transparent"
                onPress={() => {
                  setnotificationIsOpen(true);
                }}>
                <NotificationSvg />
              </TouchableHighlight>
            </View>
            <ScrollView style={{height: screenHeight - 109}}>
              <View style={styles.topServices}>
                <Text style={styles.serviceText}>Popular</Text>
                <View style={styles.serviceItems}>
                  <TouchableHighlight
                    onPress={() => {Linking.openURL("https://www.pashabank.az/lang,az/");}}
                    underlayColor="#014370"
                    style={styles.serviceItem}>
                    <Image
                      style={styles.serviceItem}
                      resizeMode="cover"
                      source={require('../ServicePage/img/img1.jpeg')}
                    />
                  </TouchableHighlight>
                  <TouchableHighlight
                    onPress={() => {Linking.openURL("https://www.viveka.com.tr/");}}
                    underlayColor="#014370"
                    style={styles.serviceItem}>
                    <Image
                      style={styles.serviceItem}
                      resizeMode="cover"
                      source={require('../ServicePage/img/img2.png')}
                    />
                  </TouchableHighlight>
                  <TouchableHighlight
                    onPress={() => {Linking.openURL("https://www.microsoft.com/ru-ru");}}
                    underlayColor="#014370"
                    style={styles.serviceItem}>
                    <Image
                      style={styles.serviceItem}
                      resizeMode="cover"
                      source={require('../ServicePage/img/img3.jpg')}
                    />
                  </TouchableHighlight>
                </View>
                <View style={styles.serviceItems}>
                  <TouchableHighlight
                    onPress={() => {Linking.openURL("https://abb-bank.az/");}}
                    underlayColor="#014370"
                    style={styles.serviceItem}>
                    <Image
                      style={styles.serviceItem}
                      resizeMode="cover"
                      source={require('../ServicePage/img/img4.png')}
                    />
                  </TouchableHighlight>
                  <TouchableHighlight
                    onPress={() => {Linking.openURL("https://www.ebay.com/");}}
                    underlayColor="#014370"
                    style={styles.serviceItem}>
                    <Image
                      style={styles.serviceItem}
                      resizeMode="cover"
                      source={require('../ServicePage/img/img5.png')}
                    />
                  </TouchableHighlight>
                  <TouchableHighlight
                    onPress={() => {Linking.openURL("https://www.kapitalbank.az/");}}
                    underlayColor="#014370"
                    style={styles.serviceItem}>
                    <Image
                      style={styles.serviceItem}
                      resizeMode="cover"
                      source={require('../ServicePage/img/img6.jpg')}
                    />
                  </TouchableHighlight>
                </View>
                <TouchableHighlight
                  underlayColor="transparent"
                  onPress={() => {
                    navigation.navigate('ServiceScreen');
                  }}>
                  <Text style={styles.moreServices}>More...</Text>
                </TouchableHighlight>
              </View>
              <View style={styles.offers}>
                <Text style={styles.offerText}>For you</Text>
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  style={styles.offerItems}>
                  <TouchableHighlight
                    onPress={() => {Linking.openURL("https://jobvacancies.lk/view-job/colombo/career-builders-pvt-ltd/front-end-developer-2178");}}
                    style={styles.offerItem}
                    underlayColor="#014370">
                    <View style={styles.offerItemView}>
                      <Image style={styles.offerItemViewImg} source={require("../../../assets/img/foryou/1.png")}/>
                    </View>
                  </TouchableHighlight>
                  <TouchableHighlight
                    onPress={() => {Linking.openURL("https://hh1.az/vacancy/41426719");}}
                    style={styles.offerItem}
                    underlayColor="#014370">
                    <View style={styles.offerItemView}>
                      <Image style={styles.offerItemViewImg} source={require("../../../assets/img/foryou/2.png")}/>
                    </View>
                  </TouchableHighlight>
                  <TouchableHighlight
                    onPress={() => {Linking.openURL("https://cdc.ittelkom-pwt.ac.id/tag/front-end-developer/");}}
                    style={styles.offerItem}
                    underlayColor="#014370">
                    <View style={styles.offerItemView}>
                      <Image style={styles.offerItemViewImg} source={require("../../../assets/img/foryou/3.jpg")}/>
                    </View>
                  </TouchableHighlight>
                  <TouchableHighlight
                    onPress={() => {Linking.openURL("https://www.amarinfotech.com/vacancy/front-end-developer.html");}}
                    style={styles.offerItem}
                    underlayColor="#014370">
                    <View style={styles.offerItemView}>
                      <Image style={styles.offerItemViewImg} source={require("../../../assets/img/foryou/4.jpg")}/>
                    </View>
                  </TouchableHighlight>
                  <TouchableHighlight
                    onPress={() => {
                      Linking.openURL("https://jobs.vinayakinfosoft.com/html-developer-jobs-vacancies-in-ahmedabad/");
                    }}
                    style={styles.offerItem}
                    underlayColor="#014370">
                    <View style={styles.offerItemView}>
                      <Image style={styles.offerItemViewImg} source={require("../../../assets/img/foryou/5.jpg")}/>
                    </View>
                  </TouchableHighlight>
                </ScrollView>
              </View>
            </ScrollView>
          </View>
        </View>
        {/* <Footer navigation={navigation} value={1} /> */}
      </ScrollView>
    </>
  );
};

export default HomePage;
