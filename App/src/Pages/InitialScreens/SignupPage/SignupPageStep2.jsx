import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import React, {useState} from 'react';
import Toast from 'react-native-toast-message';
import DateTimePicker from '@react-native-community/datetimepicker';
import CalendarSvg from "./img/calendar.svg";
import GoBackSvg from "./img/goBack.svg";
import {styles} from './style2';
import { useUserInfoContext } from '../../../assets/contexts/UserInfoContext';
const SignupPageStep2 = ({navigation}) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const {userData, setUserData} = useUserInfoContext();

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(Platform.OS === 'android' || 'ios');
    if (selectedDate) {
      setUserData(prevData => ({
        ...prevData,
        birthDate: selectedDate,
      }));
    }
    setShowDatePicker(false);
  };
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      style={{backgroundColor: '#F1F0EC'}}>
      <View style={styles.main}>
        <TouchableOpacity
          style={styles.goBack}
          onPress={() => {
            navigation.goBack();
          }}>
          <GoBackSvg width={20} height={20}/>
        </TouchableOpacity>
        <View style={styles.container}>
          <Text style={styles.createAccount}>Yeni Hesab Yarat</Text>
          <View style={styles.client}>
            <Text style={styles.clientText}>Müştəri</Text>
          </View>
          <View style={styles.inputArea}>
            <Text style={styles.writeDateBirth}>
              Doğum tarixinizi qeyd edin
            </Text>
            <TouchableHighlight
              underlayColor="transparent"
              onPress={() => {
                setShowDatePicker(true);
              }}>
              <View style={styles.input}>
                <TextInput
                  style={{color: '#014370'}}
                  placeholderTextColor="rgba(1,67,112,0.7)"
                  placeholder="Doğum tarihi"
                  value={
                    userData.birthDate
                      ? userData?.birthDate?.toLocaleDateString()
                      : ''
                  }
                  editable={false}
                />

                <CalendarSvg width={23} height={23}/>
              </View>
            </TouchableHighlight>
            {showDatePicker && (
              <DateTimePicker
                testID="dateTimePicker"
                value={userData.birthDate}
                mode="date"
                is24Hour={true}
                display="default"
                onChange={handleDateChange}
              />
            )}
            <View style={styles.gender}>
              <TouchableHighlight
                onPress={() => {
                  setUserData(prevData => ({
                    ...prevData,
                    gender: 'Kişi',
                  }));
                }}
                underlayColor=""
                style={
                  userData.gender === 'Kişi'
                    ? styles.genderTypeSelected
                    : styles.genderTypeNotSelected
                }>
                <Text
                  style={
                    userData.gender === 'Kişi'
                      ? styles.genderTypeSelectedText
                      : styles.genderTypeNotSelectedText
                  }>
                  Kişi
                </Text>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => {
                  setUserData(prevData => ({
                    ...prevData,
                    gender: 'Qadın',
                  }));
                }}
                underlayColor=""
                style={
                  userData.gender === 'Qadın'
                    ? styles.genderTypeSelected
                    : styles.genderTypeNotSelected
                }>
                <Text
                  style={
                    userData.gender === 'Qadın'
                      ? styles.genderTypeSelectedText
                      : styles.genderTypeNotSelectedText
                  }>
                  Qadın
                </Text>
              </TouchableHighlight>
            </View>
          <View style={styles.agreement}>
              <CheckBox
              tintColors={{true: "#014370",false:"#014370"}}
              value={userData.agreement}
              onValueChange={() => {
                setUserData(prevData => ({
                  ...prevData,
                  agreement: !prevData.agreement,
                }));
              }}
            />
            <Text style={styles.agreementText}>
            Qaydalar və şərtlər
            </Text>
          </View>
          </View>
          <TouchableHighlight
            style={styles.nextButton}
            underlayColor="#074970"
            onPress={() => {
              if (
                userData.birthDate === '' ||
                userData.gender.trim() === '' ||
                userData.agreement === false 
              ) {
                Toast.show({
                  type: 'error',
                  text1: 'Xəta',
                  text2: 'Xahiş edirik bütün xanaları doldurasız',
                });
                return;
              } else if (
                userData.birthDate &&
                userData.birthDate > new Date()
              ) {
                Toast.show({
                  type: 'error',
                  text1: 'Xəta',
                  text2: 'Xahiş edirik doğum tarixinizi düzgün qeyd edin',
                });
                return;
              }
              Toast.show({
                type: 'success',
                text1: 'Qeydiyyatınız uğurla tamamlandı',
                text2: 'Giriş səhifəsinə yönləndirilirsiz...',
              });
              setTimeout(() => {
                navigation.navigate('LoginScreen');
              }, 2000);
            }}>
            <Text style={styles.buttonText}>Hesab Yarat</Text>
          </TouchableHighlight>
        </View>
      </View>
      <Toast />
    </ScrollView>
  );
};

export default SignupPageStep2;
