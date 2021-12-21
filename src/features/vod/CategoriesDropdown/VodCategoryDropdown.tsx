import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CategoryButton from './CategoryButton';
// import {changeActiveCategory} from './reducer/vod.reducer';

interface Props {
  item: {name: string};
}

const VodSubCategory = ({item}: Props) => {
  return <CategoryButton item={item} />;
};

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: Dimensions.get('screen').height * 0.06,
    alignItems: 'center',
  },
  text: {
    fontFamily: 'NarkissBlock-Regular',
    fontSize: 18,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'right',
    color: '#bebebe',
  },
});

export default VodSubCategory;
