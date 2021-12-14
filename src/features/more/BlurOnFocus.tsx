import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

export default function BlurOnFocus() {
  return <View style={styles.blur}></View>;
}
const styles = StyleSheet.create({
  blur: {
    opacity: 0.77,
    backgroundColor: 'rgba(0, 0, 0, 0.83)',
    position: 'absolute',
    zIndex: 1000,
    left: 0,
    top: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
