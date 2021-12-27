import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {changeActiveCategory} from '../reducer/vod.reducer';

export default function CategoryButton({item}) {
  const dispatch = useDispatch();
  return (
    <TouchableOpacity onPress={() => dispatch(changeActiveCategory(item.name))}>
      <View style={styles.divider}></View>
      <View style={styles.mainView}>
        <Text style={styles.text}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  divider: {
    width: '94%',
    alignSelf: 'center',
    height: 2,
    opacity: 0.17,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#979797',
  },
  mainView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: Dimensions.get('screen').height * 0.06,
    alignItems: 'center',
  },
  text: {
    fontFamily: 'NarkissBlock-Regular',
    paddingRight: '2.5%',
    fontSize: 18,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'right',
    color: '#bebebe',
  },
});
