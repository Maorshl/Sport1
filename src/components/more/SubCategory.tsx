import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Category} from './CategoryContainer';

interface Props {
  item: Category;
}

export default function SubCategory({item}: Props) {
  return (
    <View style={styles.subCategory}>
      <Text style={styles.text}>{item.title}</Text>
      <View style={styles.divideLine}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  subCategory: {
    backgroundColor: '#f2f2f2',
    width: 375,
    height: 40,
  },
  divideLine: {
    width: 340,
    height: 1,
    opacity: 0.17,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#979797',
    alignSelf: 'center',
    marginTop: 6,
  },
  text: {
    fontFamily: 'NarkissBlock-Regular',
    fontSize: 17,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 18,
    letterSpacing: 0,
    textAlign: 'right',
    color: '#4e4e4e',
    right: 20,
    paddingTop: 8,
  },
});
