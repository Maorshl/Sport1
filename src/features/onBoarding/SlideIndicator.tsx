import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import colors from '../../constants/colors';
interface Props {
  index: number;
}

export default function SlideIndicator({index}: Props) {
  return (
    <View style={styles.container}>
      <View
        style={{
          ...styles.ball,
          backgroundColor: index === 2 ? colors.TURQUOISE_GREEN : '#cecece',
        }}></View>
      <View
        style={{
          ...styles.ball,
          backgroundColor: index === 1 ? colors.TURQUOISE_GREEN : '#cecece',
        }}></View>
      <View
        style={{
          ...styles.ball,
          backgroundColor: index === 0 ? colors.TURQUOISE_GREEN : '#cecece',
        }}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  ball: {
    borderRadius: 4,
    height: 8,
    width: 8,
  },
  container: {
    height: Dimensions.get('screen').height * 0.1,
    flexDirection: 'row',
    width: 40,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
