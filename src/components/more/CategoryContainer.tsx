import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Dimensions,
  FlatList,
  Animated,
} from 'react-native';
import SvgIcon from '../../utils/SvgIcon';
import Colors from '../../constants/colors';
import SubCategory from './SubCategory';

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
  const [isPressed, setIsPressed] = useState<boolean>(false);

  return (
    <>
      <TouchableOpacity onPress={() => setIsPressed(prevState => !prevState)}>
        <View
          style={{
            ...styles.firstView,
            backgroundColor: isPressed ? Colors.TURQUOISE_GREEN : '#ffffff',
          }}>
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
      {item.children?.length && isPressed ? (
        <Animated.FlatList
          contentContainerStyle={styles.listChild}
          data={item.children}
          renderItem={SubCategory}
          keyExtractor={item => item.id}
        />
      ) : (
        <></>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  firstView: {
    width: 375,
    height: 52,
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
  listChild: {
    alignItems: 'flex-end',
  },
});

export default CategoryContainer;
