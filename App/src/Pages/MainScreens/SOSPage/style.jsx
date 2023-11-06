import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  main: {
    height: '100%',
    backgroundColor: '#F1F0EC',
    position: 'relative',
    width: '100%',
    paddingBottom:134
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingTop: 37,
    paddingBottom: 27,
  },
  headerText: {
    fontSize: 25,
    color: '#014370',
    // fontWeight: '800',
    fontFamily:"Nunito-ExtraBold"

  },
  sosItems: {
    flexDirection: 'column',
    paddingHorizontal:33,
  },
  job: {
    marginBottom: 55,
    backgroundColor: '#D9D9D9',
    width: "100%",
    minWidth:286,
    height: 187,
    borderRadius: 15,
  },
  jobItem:{
    flexDirection:"row",
    justifyContent:"space-between"
  },
  jobItemImg:{
    objectFit:"contain",
    height:187,
    transform:[{scale:0.77}],
  },
  jobItemTexts:{
    paddingLeft:10,
    paddingTop:10,
    maxWidth:150,
    flexDirection:"column",
  },
  jobItemText1:{
    paddingLeft:10,
    paddingTop:10,
    color: '#014370',
    fontSize:15,
    fontFamily:"Nunito-ExtraBold"
  },
  jobItemText2:{
    paddingLeft:10,
    paddingTop:10,
    color: '#014370',
    fontSize:12,
    fontFamily:"Nunito-SemiBold"
  },
});
