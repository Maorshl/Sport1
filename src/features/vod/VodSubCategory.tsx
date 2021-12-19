import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface Props {
  item: {name: string};
}
export default function VodSubCategory({item}: Props) {
  return (
    <TouchableOpacity>
      <View style={styles.mainView}>
        <Text style={styles.text}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
}

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
