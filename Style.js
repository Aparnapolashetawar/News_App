import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  loader: {
    minHeight: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  MainContainer: {
    width: '100%',
    paddingTop: 50,
    backgroundColor: '#FF6347',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: 300,
    height: 750,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginVertical: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  btn: {
    marginTop: 40,
    marginLeft: 70,
    backgroundColor: '#6874f2',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 150,
  },
  auth: {
    marginTop: 20,
    marginLeft: 35,
    backgroundColor: '#5ee063',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 230,
    fontFamily: 'monospace',
  },
  publn: {
    marginTop: 20,
    marginLeft: 35,
    backgroundColor: '#5ee063',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 230,
  },
  tit: {
    marginTop: 20,
    marginLeft: 35,
    backgroundColor: '#5ee063',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 90,
    width: 230,
  },
  //   appname: {
  //     color: '#fff',
  //     textAlign: 'center',
  //     paddingBottom: 30,
  //     fontSize: 50,
  //     marginTop: 3,
  //   },
  imgContainer: {
    padding: 10,
  },
  imgStyle: {
    width: '100%',
    height: 300,
  },
  appdiv: {
    marginTop: 10,
    marginLeft: 15,
    backgroundColor: '#daf252',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: 270,
    fontFamily: 'monospace',
  },
});
export {styles};