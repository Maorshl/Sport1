import React from 'react';
import {
  Button,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import colors from '../../constants/colors';
import SlideIndicator from './SlideIndicator';
import LastCardButton from './LastCardButton';

interface Props {
  item: {title: string; text: string; image: string};
  index: number;
}

export default function Card({item, index}) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image source={item.image} height={1} />
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.divider}></View>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#edeef0',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  title: {
    fontFamily: 'NarkissBlock-Regular',
    fontSize: 26,
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: 35,
    letterSpacing: 0,
    textAlign: 'center',
    color: '#000000',
  },
  text: {
    fontFamily: 'NarkissBlock-Regular',
    fontSize: 17,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 22,
    letterSpacing: 0,
    textAlign: 'center',
    color: '#545454',
  },
  divider: {
    width: 60,
    height: 4,
    borderRadius: 3,
    backgroundColor: colors.TURQUOISE_GREEN,
  },
});
