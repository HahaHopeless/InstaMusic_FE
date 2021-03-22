import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {},
  gradient: {
    minWidth: '100%',
    minHeight: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  playLogo: {
    resizeMode: 'contain',
    width: width / 1.2,
    position: 'absolute',
    top: height * -0.45,
  },
  instaLogo: {
    resizeMode: 'contain',
    width: width / 2,
    marginTop: '20%',
  },
  fbLogo: {
    resizeMode: 'contain',
    width: width / 15,
    height: height * 0.05,
  },
  description: {
    marginTop: -30,
    textAlign: 'center',
    maxWidth: width / 1.5,
    color: 'white',
    fontSize: 18,
  },
  btnLogin: {
    backgroundColor: 'white',
    borderRadius: 8,
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 10,
    width: '90%',
    marginTop: '15%',
  },
  btnText: {
    fontSize: 20,
    color: '#3E84CF',
    fontWeight: 'bold',
  },
  dividerContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  dividerText: {
    marginHorizontal: 10,
    color: 'white',
  },
  divider: {
    width: width / 2.5,
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.5)',
  },

  btnRegister: {
    marginTop: 10,
  },
  registerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  btnSignin: {
    bottom: height * -0.15,
  },
  signinText: {
    color: 'white',
  },
});

export default styles;
