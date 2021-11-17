import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Dimensions,
} from 'react-native';
import SvgIcon from '../../utils/SvgIcon';

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
    <TouchableOpacity>
      <View style={styles.firstView}>
        <View>
          {item.children?.length ? (
            <SvgIcon
              name="downArrow"
              width={12}
              height={6}
              viewBox="0 0 10 6"
              style={styles.icon}
            />
          ) : (
            <></>
          )}
        </View>
        <View>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  firstView: {
    width: 375,
    height: 52,
    backgroundColor: '#ffffff',
    margin: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  title: {
    fontSize: 17,
    fontWeight: Platform.select({ios: '900', android: '900'}),
    fontStyle: 'normal',
    fontFamily: 'NarkissBlock-Regular',
    lineHeight: 18,
    letterSpacing: 0.1,
    textAlign: 'right',
    color: '#4e4e4e',
    right: 10,
  },
  icon: {
    left: Dimensions.get('screen').width * 0.06,
  },
});

export default CategoryContainer;
