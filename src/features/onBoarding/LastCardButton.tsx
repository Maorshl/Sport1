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
import {showMessage} from 'react-native-flash-message';
import {finishOnBoarding} from './action/onBoarding.action';
import {useDispatch} from 'react-redux';

interface Props {
  setFirstTime: Function;
}

export default function LastCardButton() {
  const dispatch = useDispatch();
  return (
    <Animatable.View style={styles.container} animation="slideInUp">
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          dispatch(finishOnBoarding(''));
        }}>
        <Text style={styles.buttonText}>קחו אותי פנימה</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          dispatch(finishOnBoarding(''));
        }}>
        <Text style={styles.text}>כבר יש לי משתמש</Text>
      </TouchableOpacity>
    </Animatable.View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('screen').height * 0.1,
    justifyContent: 'space-around',
    top: -35,
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
    marginTop: 15,
    letterSpacing: 0,
    textAlign: 'center',
    color: '#545454',
  },
});
