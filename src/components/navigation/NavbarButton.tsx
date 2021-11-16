import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface Props {
  text: string;
}

const NavbarButton = ({text}: Props) => {
  return (
    <View>
      <Text>{text}</Text>
    </View>
  );
};

export default NavbarButton;

const styles = StyleSheet.create({
  button: {
    color: 'rgb 2 247 132',
  },
});
