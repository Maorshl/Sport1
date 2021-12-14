import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../../constants/colors';
import * as Animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LastCardButton() {
  return (
    <Animatable.View style={styles.container} animation="slideInUp">
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>קחו אותי פנימה</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.text}>כבר יש לי משתמש</Text>
      </TouchableOpacity>
    </Animatable.View>
  );
}

export const storeData = async () => {
  try {
    await AsyncStorage.setItem('onBoarding', 'true');
  } catch (e) {
    // saving error
  }
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('screen').height * 0.1,
    justifyContent: 'space-around',
  },
  button: {
    width: 197,
    height: 46,
    borderRadius: 5,
    backgroundColor: colors.TURQUOISE_GREEN,
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'NarkissBlock-Regular',
    fontSize: 20,
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: 35,
    letterSpacing: 0,
    textAlign: 'center',
    color: '#000000',
  },
  text: {
    fontFamily: 'NarkissBlock-Regular',
    fontSize: 15,
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: 22,
    letterSpacing: 0,
    textAlign: 'center',
    color: '#545454',
  },
});
