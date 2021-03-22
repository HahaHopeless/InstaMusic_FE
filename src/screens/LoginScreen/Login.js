import styles from './style';
import React from 'react';
import {TouchableOpacity, Text, Image, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Login = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.gradient}
        colors={[
          'rgba(97, 42, 253, 0.8)',
          'rgba(211, 37, 255, 0.8)',
          'rgba(253, 42, 80, 0.8)',
        ]}>
        <Image
          source={require('../../assets/img/play.png')}
          style={styles.playLogo}
        />
        <Image
          source={require('../../assets/img/instamusic.png')}
          style={styles.instaLogo}
        />
        <Text style={styles.description}>
          Sign Up to share song of the day with your friends. {'\n'}Find out
          what celebrities are listening to
        </Text>
        <TouchableOpacity style={styles.btnLogin}>
          <Image
            source={require('../../assets/icons/fb.png')}
            style={styles.fbLogo}
          />
          <Text style={styles.btnText}>Log In with Facebook</Text>
        </TouchableOpacity>
        <View style={styles.dividerContainer}>
          <View style={styles.divider}></View>
          <Text style={styles.dividerText}>or</Text>
          <View style={styles.divider}></View>
        </View>
        <TouchableOpacity style={styles.btnRegister}>
          <Text style={styles.registerText}>Register with phone or email</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnSignin}>
          <Text style={styles.signinText}>
            Already have an account? Sign In
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default Login;
