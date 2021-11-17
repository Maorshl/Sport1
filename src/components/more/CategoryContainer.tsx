import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export interface Category {
  title: string;
  id: string;
  is_parent_category?: boolean;
  children?: Category[];
}

interface Props {
  item: Category;
}

const CategoryContainer = ({item}: Props) => {
  return (
    <View style={styles.firstView}>
      <TouchableOpacity>
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  firstView: {
    width: 375,
    height: 52,
    backgroundColor: '#ffffff',
    margin: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  title: {
    fontSize: 17,
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: 18,
    letterSpacing: 0.1,
    textAlign: 'right',
    color: '#4e4e4e',
  },
});

export default CategoryContainer;
