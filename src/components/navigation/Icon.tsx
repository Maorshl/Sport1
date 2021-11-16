import React from 'react';
import {Image, Text, View, StyleSheet, Dimensions} from 'react-native';
import Colors from '../../constants/colors';
import SvgIcon from '../../utils/SvgIcon';

interface Props {
  focused: boolean;
  image: any;
  label: string;
  iconSize: {height: number; width: number};
  viewBox: string;
  style?: {[props: string]: string | number};
}

const Icon = ({focused, image, label, iconSize, viewBox}: Props) => {
  return (
    <View style={styles.icon}>
      <SvgIcon
        name={image}
        height={iconSize.height}
        width={iconSize.width}
        viewBox={viewBox}
        style={styles.iconInside}
      />
      <Text
        style={{
          color: focused ? Colors.WHITE_TWO : '#8b8b8b',
        }}>
        {label}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    alignItems: 'center',
  },
  iconInside: {
    // borderWidth: 2,
    // borderColor: 'white',
  },
});

export default Icon;
