import React from 'react';
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
import SubCategory from './SubCategory';
import {useSelector, useDispatch} from 'react-redux';
import {moreChangeActiveCategory} from './reducer/more.reducer';
import * as Animatable from 'react-native-animatable';

export interface Category {
  title: string;
  id: string;
  is_parent_category?: boolean;
  children?: Category[];
}

interface State {
  more: {moreActiveCategory: string};
}

interface Props {
  item: Category;
}

const CategoryContainer = ({item}: Props) => {
  const {moreActiveCategory} = useSelector((state: State) => state.more);
  const dispatch = useDispatch();

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          dispatch(moreChangeActiveCategory(item.title));
        }}>
        <View style={styles.firstView}>
          <Animated.View
            style={{
              transform:
                moreActiveCategory === item.title
                  ? [{rotateX: '180deg'}]
                  : [{rotateX: '0deg'}],
            }}>
            {item.children?.length ? (
              <SvgIcon
                name="downArrow"
                width={12}
                height={6}
                viewBox="0 0 10 6"
                style={{...styles.icon}}
              />
            ) : (
              <></>
            )}
          </Animated.View>
          <View>
            <Text style={styles.title}>{item.title}</Text>
          </View>
        </View>
      </TouchableOpacity>

      {item.children?.length && moreActiveCategory === item.title ? (
        <Animatable.View
          animation="slideInDown"
          style={{
            shadowColor: 'rgba(0, 0, 0, 0.15)',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowRadius: 3,
            shadowOpacity: 1,
            elevation: 5,
          }}>
          <FlatList
            style={styles.list}
            ListFooterComponent={<View></View>}
            ListFooterComponentStyle={{height: 5}}
            contentContainerStyle={styles.listChild}
            data={item.children}
            renderItem={SubCategory}
            keyExtractor={item => item.id}
          />
        </Animatable.View>
      ) : (
        <></>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  firstView: {
    width: Dimensions.get('screen').width,
    height: 52,
    margin: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 17,
    fontWeight: Platform.select({ios: '900', android: '900'}),
    fontStyle: 'normal',
    fontFamily: 'NarkissBlock-Bold',
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
    alignItems: 'flex-start',
  },
  list: {},
});

export default CategoryContainer;
