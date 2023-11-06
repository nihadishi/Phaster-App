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
  sosItem: {
    marginBottom: 55,
    backgroundColor: '#D9D9D9',
    width: "100%",
    minWidth:286,
    height: 187,
    borderRadius: 15,
  },
});
