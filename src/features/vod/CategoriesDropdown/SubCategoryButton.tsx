import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import colors from '../../../constants/colors';
import {useDispatch, useSelector} from 'react-redux';
import {VideosByCategory} from '../action/vod.action';
import {changeActiveSubCategory} from '../reducer/vod.reducer';

interface Props {
  item: {
    id: string;
    name: string;
  };
}

interface State {
  vod: {
    activeSubCategory: string;
  };
}

export default function SubCategoryButton({item}: Props) {
  const {activeSubCategory} = useSelector((state: State) => state.vod);
  const dispatch = useDispatch();
  const onPress = () => {
    dispatch(VideosByCategory(item.id));
    dispatch(changeActiveSubCategory(item.name));
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.mainContainer}>
      <Text
        style={{
          ...styles.text,
          color:
            activeSubCategory === item.name
              ? colors.TURQUOISE_GREEN
              : '#e5e5e5',
          opacity: activeSubCategory === item.name ? 1 : 0.58,
        }}>
        {item.name}
      </Text>
      <View
        style={{
          ...styles.bottomBorder,
          display: activeSubCategory === item.name ? null : 'none',
        }}></View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#282828',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    opacity: 0.58,
    margin: 10,
    fontFamily: 'NarkissBlock-Regular',
    fontSize: 17,
    fontWeight: '500',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'right',
  },
  bottomBorder: {
    backgroundColor: colors.TURQUOISE_GREEN,
    height: 4,
    width: '100%',
    bottom: 0,
  },
});
