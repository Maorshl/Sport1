import React from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import SvgIcon from '../../utils/SvgIcon';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TopBar = () => {
  return (
    <View style={styles.TopBar}>
      <TouchableOpacity onPress={clearData}>
        <SvgIcon
          name="manWithAStar"
          width={21}
          height={19}
          viewBox="0 0 26 24"
          style={styles.avatar}
        />
      </TouchableOpacity>
      <SvgIcon
        name="sport1"
        viewBox="0 0 85 23"
        width={85}
        height={23}
        style={styles.sport1}
      />
    </View>
  );
};

const clearData = async () => {
  await AsyncStorage.clear();
};

const styles = StyleSheet.create({
  TopBar: {
    flexDirection: 'row',
    height: Dimensions.get('screen').height * 0.06,
    width: Dimensions.get('screen').width,
    backgroundColor: 'rgb(20, 20, 20)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sport1: {
    position: 'absolute',
  },
  avatar: {
    left: -(Dimensions.get('screen').width * 0.43),
  },
});

export default TopBar;
