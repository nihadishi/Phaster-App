import {View, Text, ScrollView, TouchableHighlight, Alert} from 'react-native';
import React from 'react';
import Footer from '../../../layouts/Footer/Footer';
import {Dimensions, Image, Linking} from 'react-native';
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
            contentContainerStyle={{alignItems: 'center'}}
            style={styles.sosItems}>
            
            <TouchableHighlight
              onPress={() => {
                Linking.openURL(
                  'https://busy.az/vacancy/111995/software-developer-front-end',
                );
              }}
              style={styles.job}
              underlayColor="#0A86DF">
              <View style={styles.jobItem}>
                <View style={styles.jobItemTexts}>
                  <Text style={styles.jobItemText1}>Software Developer</Text>
                  <Text style={styles.jobItemText2}>
                    Developing front end website architecture. Designing user
                    interactions on web pages. {'\n'}
                    Skills: HTML, CSS, JavaScript, Django ...
                  </Text>
                  <Text style={styles.jobItemText2}>
                    Date: 04.11.2023 11:46
                  </Text>
                </View>
                <Image
                  style={styles.jobItemImg}
                  resizeMode="contain"
                  source={require('../ServicePage/img/7.png')}
                />
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => {
                Linking.openURL(
                  'https://busy.az/vacancy/111728/senior-frontend-developer',
                );
              }}
              style={styles.job}
              underlayColor="#0A86DF">
              <View style={styles.jobItem}>
                <View style={styles.jobItemTexts}>
                  <Text style={styles.jobItemText1}>
                    Senior Frontend Developer
                  </Text>
                  <Text style={styles.jobItemText2}>
                    Lead the development of the frontend architecture using Vue
                    3 and TypeScript. {'\n'}
                    Skills: JavaScript, TypeScript, Vue.js ...
                  </Text>
                  <Text style={styles.jobItemText2}>
                    Date: 01.11.2023 13:02
                  </Text>
                </View>
                <Image
                  style={styles.jobItemImg}
                  resizeMode="contain"
                  source={require('../ServicePage/img/8.png')}
                />
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.job}
              underlayColor="#0A86DF"
              onPress={() => {
                Linking.openURL(
                  'https://busy.az/vacancy/108943/front-end-uzre-bas-mutexessis',
                );
              }}>
              <View style={styles.jobItem}>
                <View style={styles.jobItemTexts}>
                  <Text style={styles.jobItemText1}>
                    Front End üzrə Baş Mütəxəssis
                  </Text>
                  <Text style={styles.jobItemText2}>
                    Məhsul yaradılmasına töhfə verilməsi, öz kod və qərarları
                    ilə həll təklifi ... {'\n'}
                    Skills: Redux, User Interface, Advanced Javascript, ...
                  </Text>
                  <Text style={styles.jobItemText2}>
                    Date: 07.11.2023 13:21
                  </Text>
                </View>
                <Image
                  style={styles.jobItemImg}
                  resizeMode="contain"
                  source={require('../ServicePage/img/img1.jpeg')}
                />
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.job}
              underlayColor="#0A86DF"
              onPress={() => {
                Linking.openURL(
                  'https://www.linkedin.com/jobs/search/?currentJobId=3738377134&keywords=frontend%20developer&originalSubdomain=az',
                );
              }}>
              <View style={styles.jobItem}>
                <View style={styles.jobItemTexts}>
                  <Text style={styles.jobItemText1}>
                  Software Backend Engineer - Python
                  </Text>
                  <Text style={styles.jobItemText2}>
                  Our vision is to deliver delightful experiences for merchants and users ... {'\n'}
                    Skills: Redux, User Interface, Advanced Javascript, ...
                  </Text>
                  <Text style={styles.jobItemText2}>
                    Date: 07.11.2023 13:21
                  </Text>
                </View>
                <Image
                  style={styles.jobItemImg}
                  resizeMode="contain"
                  source={require('../ServicePage/img/9.jpg')}
                />
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.job}
              underlayColor="#0A86DF"
              onPress={() => {
                Linking.openURL(
                  'https://www.linkedin.com/jobs/view/3746207014 ',
                );
              }}>
              <View style={styles.jobItem}>
                <View style={styles.jobItemTexts}>
                  <Text style={styles.jobItemText1}>
                  SAP ABAP Developer
                  </Text>
                  <Text style={styles.jobItemText2}>
                  Collaborate with senior developer and functional team to collect requirements and design SAP ABAP solutions.... {'\n'}
                    Skills: User Interface, Advanced Javascript, ...
                  </Text>
                  <Text style={styles.jobItemText2}>
                    Date: 07.11.2023 13:21
                  </Text>
                </View>
                <Image
                  style={styles.jobItemImg}
                  resizeMode="contain"
                  source={require('../ServicePage/img/10.jpg')}
                />
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => {
                Linking.openURL(
                  'https://busy.az/vacancy/111995/software-developer-front-end',
                );
              }}
              style={styles.job}
              underlayColor="#0A86DF">
              <View style={styles.jobItem}>
                <View style={styles.jobItemTexts}>
                  <Text style={styles.jobItemText1}>Software Developer</Text>
                  <Text style={styles.jobItemText2}>
                    Developing front end website architecture. Designing user
                    interactions on web pages. {'\n'}
                    Skills: HTML, CSS, JavaScript, Django ...
                  </Text>
                  <Text style={styles.jobItemText2}>
                    Date: 04.11.2023 11:46
                  </Text>
                </View>
                <Image
                  style={styles.jobItemImg}
                  resizeMode="contain"
                  source={require('../ServicePage/img/7.png')}
                />
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => {
                Linking.openURL(
                  'https://busy.az/vacancy/111728/senior-frontend-developer',
                );
              }}
              style={styles.job}
              underlayColor="#0A86DF">
              <View style={styles.jobItem}>
                <View style={styles.jobItemTexts}>
                  <Text style={styles.jobItemText1}>
                    Senior Frontend Developer
                  </Text>
                  <Text style={styles.jobItemText2}>
                    Lead the development of the frontend architecture using Vue
                    3 and TypeScript. {'\n'}
                    Skills: JavaScript, TypeScript, Vue.js ...
                  </Text>
                  <Text style={styles.jobItemText2}>
                    Date: 01.11.2023 13:02
                  </Text>
                </View>
                <Image
                  style={styles.jobItemImg}
                  resizeMode="contain"
                  source={require('../ServicePage/img/8.png')}
                />
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.job}
              underlayColor="#0A86DF"
              onPress={() => {
                Linking.openURL(
                  'https://busy.az/vacancy/108943/front-end-uzre-bas-mutexessis',
                );
              }}>
              <View style={styles.jobItem}>
                <View style={styles.jobItemTexts}>
                  <Text style={styles.jobItemText1}>
                    Front End üzrə Baş Mütəxəssis
                  </Text>
                  <Text style={styles.jobItemText2}>
                    Məhsul yaradılmasına töhfə verilməsi, öz kod və qərarları
                    ilə həll təklifi ... {'\n'}
                    Skills: Redux, User Interface, Advanced Javascript, ...
                  </Text>
                  <Text style={styles.jobItemText2}>
                    Date: 07.11.2023 13:21
                  </Text>
                </View>
                <Image
                  style={styles.jobItemImg}
                  resizeMode="contain"
                  source={require('../ServicePage/img/img1.jpeg')}
                />
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.job}
              underlayColor="#0A86DF"
              onPress={() => {
                Linking.openURL(
                  'https://www.linkedin.com/jobs/search/?currentJobId=3738377134&keywords=frontend%20developer&originalSubdomain=az',
                );
              }}>
              <View style={styles.jobItem}>
                <View style={styles.jobItemTexts}>
                  <Text style={styles.jobItemText1}>
                  Software Backend Engineer - Python
                  </Text>
                  <Text style={styles.jobItemText2}>
                  Our vision is to deliver delightful experiences for merchants and users ... {'\n'}
                    Skills: Redux, User Interface, Advanced Javascript, ...
                  </Text>
                  <Text style={styles.jobItemText2}>
                    Date: 07.11.2023 13:21
                  </Text>
                </View>
                <Image
                  style={styles.jobItemImg}
                  resizeMode="contain"
                  source={require('../ServicePage/img/9.jpg')}
                />
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.job}
              underlayColor="#0A86DF"
              onPress={() => {
                Linking.openURL(
                  'https://www.linkedin.com/jobs/view/3746207014 ',
                );
              }}>
              <View style={styles.jobItem}>
                <View style={styles.jobItemTexts}>
                  <Text style={styles.jobItemText1}>
                  SAP ABAP Developer
                  </Text>
                  <Text style={styles.jobItemText2}>
                  Collaborate with senior developer and functional team to collect requirements and design SAP ABAP solutions.... {'\n'}
                    Skills: User Interface, Advanced Javascript, ...
                  </Text>
                  <Text style={styles.jobItemText2}>
                    Date: 07.11.2023 13:21
                  </Text>
                </View>
                <Image
                  style={styles.jobItemImg}
                  resizeMode="contain"
                  source={require('../ServicePage/img/10.jpg')}
                />
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => {
                Linking.openURL(
                  'https://busy.az/vacancy/111995/software-developer-front-end',
                );
              }}
              style={styles.job}
              underlayColor="#0A86DF">
              <View style={styles.jobItem}>
                <View style={styles.jobItemTexts}>
                  <Text style={styles.jobItemText1}>Software Developer</Text>
                  <Text style={styles.jobItemText2}>
                    Developing front end website architecture. Designing user
                    interactions on web pages. {'\n'}
                    Skills: HTML, CSS, JavaScript, Django ...
                  </Text>
                  <Text style={styles.jobItemText2}>
                    Date: 04.11.2023 11:46
                  </Text>
                </View>
                <Image
                  style={styles.jobItemImg}
                  resizeMode="contain"
                  source={require('../ServicePage/img/7.png')}
                />
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => {
                Linking.openURL(
                  'https://busy.az/vacancy/111728/senior-frontend-developer',
                );
              }}
              style={styles.job}
              underlayColor="#0A86DF">
              <View style={styles.jobItem}>
                <View style={styles.jobItemTexts}>
                  <Text style={styles.jobItemText1}>
                    Senior Frontend Developer
                  </Text>
                  <Text style={styles.jobItemText2}>
                    Lead the development of the frontend architecture using Vue
                    3 and TypeScript. {'\n'}
                    Skills: JavaScript, TypeScript, Vue.js ...
                  </Text>
                  <Text style={styles.jobItemText2}>
                    Date: 01.11.2023 13:02
                  </Text>
                </View>
                <Image
                  style={styles.jobItemImg}
                  resizeMode="contain"
                  source={require('../ServicePage/img/8.png')}
                />
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.job}
              underlayColor="#0A86DF"
              onPress={() => {
                Linking.openURL(
                  'https://busy.az/vacancy/108943/front-end-uzre-bas-mutexessis',
                );
              }}>
              <View style={styles.jobItem}>
                <View style={styles.jobItemTexts}>
                  <Text style={styles.jobItemText1}>
                    Front End üzrə Baş Mütəxəssis
                  </Text>
                  <Text style={styles.jobItemText2}>
                    Məhsul yaradılmasına töhfə verilməsi, öz kod və qərarları
                    ilə həll təklifi ... {'\n'}
                    Skills: Redux, User Interface, Advanced Javascript, ...
                  </Text>
                  <Text style={styles.jobItemText2}>
                    Date: 07.11.2023 13:21
                  </Text>
                </View>
                <Image
                  style={styles.jobItemImg}
                  resizeMode="contain"
                  source={require('../ServicePage/img/img1.jpeg')}
                />
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.job}
              underlayColor="#0A86DF"
              onPress={() => {
                Linking.openURL(
                  'https://www.linkedin.com/jobs/search/?currentJobId=3738377134&keywords=frontend%20developer&originalSubdomain=az',
                );
              }}>
              <View style={styles.jobItem}>
                <View style={styles.jobItemTexts}>
                  <Text style={styles.jobItemText1}>
                  Software Backend Engineer - Python
                  </Text>
                  <Text style={styles.jobItemText2}>
                  Our vision is to deliver delightful experiences for merchants and users ... {'\n'}
                    Skills: Redux, User Interface, Advanced Javascript, ...
                  </Text>
                  <Text style={styles.jobItemText2}>
                    Date: 07.11.2023 13:21
                  </Text>
                </View>
                <Image
                  style={styles.jobItemImg}
                  resizeMode="contain"
                  source={require('../ServicePage/img/9.jpg')}
                />
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.job}
              underlayColor="#0A86DF"
              onPress={() => {
                Linking.openURL(
                  'https://www.linkedin.com/jobs/view/3746207014 ',
                );
              }}>
              <View style={styles.jobItem}>
                <View style={styles.jobItemTexts}>
                  <Text style={styles.jobItemText1}>
                  SAP ABAP Developer
                  </Text>
                  <Text style={styles.jobItemText2}>
                  Collaborate with senior developer and functional team to collect requirements and design SAP ABAP solutions.... {'\n'}
                    Skills: User Interface, Advanced Javascript, ...
                  </Text>
                  <Text style={styles.jobItemText2}>
                    Date: 07.11.2023 13:21
                  </Text>
                </View>
                <Image
                  style={styles.jobItemImg}
                  resizeMode="contain"
                  source={require('../ServicePage/img/10.jpg')}
                />
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => {
                Linking.openURL(
                  'https://busy.az/vacancy/111995/software-developer-front-end',
                );
              }}
              style={styles.job}
              underlayColor="#0A86DF">
              <View style={styles.jobItem}>
                <View style={styles.jobItemTexts}>
                  <Text style={styles.jobItemText1}>Software Developer</Text>
                  <Text style={styles.jobItemText2}>
                    Developing front end website architecture. Designing user
                    interactions on web pages. {'\n'}
                    Skills: HTML, CSS, JavaScript, Django ...
                  </Text>
                  <Text style={styles.jobItemText2}>
                    Date: 04.11.2023 11:46
                  </Text>
                </View>
                <Image
                  style={styles.jobItemImg}
                  resizeMode="contain"
                  source={require('../ServicePage/img/7.png')}
                />
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => {
                Linking.openURL(
                  'https://busy.az/vacancy/111728/senior-frontend-developer',
                );
              }}
              style={styles.job}
              underlayColor="#0A86DF">
              <View style={styles.jobItem}>
                <View style={styles.jobItemTexts}>
                  <Text style={styles.jobItemText1}>
                    Senior Frontend Developer
                  </Text>
                  <Text style={styles.jobItemText2}>
                    Lead the development of the frontend architecture using Vue
                    3 and TypeScript. {'\n'}
                    Skills: JavaScript, TypeScript, Vue.js ...
                  </Text>
                  <Text style={styles.jobItemText2}>
                    Date: 01.11.2023 13:02
                  </Text>
                </View>
                <Image
                  style={styles.jobItemImg}
                  resizeMode="contain"
                  source={require('../ServicePage/img/8.png')}
                />
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.job}
              underlayColor="#0A86DF"
              onPress={() => {
                Linking.openURL(
                  'https://busy.az/vacancy/108943/front-end-uzre-bas-mutexessis',
                );
              }}>
              <View style={styles.jobItem}>
                <View style={styles.jobItemTexts}>
                  <Text style={styles.jobItemText1}>
                    Front End üzrə Baş Mütəxəssis
                  </Text>
                  <Text style={styles.jobItemText2}>
                    Məhsul yaradılmasına töhfə verilməsi, öz kod və qərarları
                    ilə həll təklifi ... {'\n'}
                    Skills: Redux, User Interface, Advanced Javascript, ...
                  </Text>
                  <Text style={styles.jobItemText2}>
                    Date: 07.11.2023 13:21
                  </Text>
                </View>
                <Image
                  style={styles.jobItemImg}
                  resizeMode="contain"
                  source={require('../ServicePage/img/img1.jpeg')}
                />
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.job}
              underlayColor="#0A86DF"
              onPress={() => {
                Linking.openURL(
                  'https://www.linkedin.com/jobs/search/?currentJobId=3738377134&keywords=frontend%20developer&originalSubdomain=az',
                );
              }}>
              <View style={styles.jobItem}>
                <View style={styles.jobItemTexts}>
                  <Text style={styles.jobItemText1}>
                  Software Backend Engineer - Python
                  </Text>
                  <Text style={styles.jobItemText2}>
                  Our vision is to deliver delightful experiences for merchants and users ... {'\n'}
                    Skills: Redux, User Interface, Advanced Javascript, ...
                  </Text>
                  <Text style={styles.jobItemText2}>
                    Date: 07.11.2023 13:21
                  </Text>
                </View>
                <Image
                  style={styles.jobItemImg}
                  resizeMode="contain"
                  source={require('../ServicePage/img/9.jpg')}
                />
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.job}
              underlayColor="#0A86DF"
              onPress={() => {
                Linking.openURL(
                  'https://www.linkedin.com/jobs/view/3746207014 ',
                );
              }}>
              <View style={styles.jobItem}>
                <View style={styles.jobItemTexts}>
                  <Text style={styles.jobItemText1}>
                  SAP ABAP Developer
                  </Text>
                  <Text style={styles.jobItemText2}>
                  Collaborate with senior developer and functional team to collect requirements and design SAP ABAP solutions.... {'\n'}
                    Skills: User Interface, Advanced Javascript, ...
                  </Text>
                  <Text style={styles.jobItemText2}>
                    Date: 07.11.2023 13:21
                  </Text>
                </View>
                <Image
                  style={styles.jobItemImg}
                  resizeMode="contain"
                  source={require('../ServicePage/img/10.jpg')}
                />
              </View>
            </TouchableHighlight>
          </ScrollView>
        </View>
      </View>
      {/* <Footer navigation={navigation} value={2} /> */}
    </ScrollView>
  );
};

export default SOSPage;
