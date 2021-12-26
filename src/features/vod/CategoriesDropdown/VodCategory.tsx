import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  FlatList,
  Animated,
} from 'react-native';
import colors from '../../../constants/colors';
import SvgIcon from '../../../utils/SvgIcon';
import {useSelector} from 'react-redux';
import VodSubCategory from './VodCategoryDropdown';
import SubCategory from './SubCategory';

interface Props {
  item: {name: string};
}

interface category {
  name: string;
  id: string;
}

interface state {
  vod: {
    categories: category[];
    loading: boolean;
    activeCategory: {name: string; subCategories: {id: string; name: string}[]};
  };
}

export default function VodCategory({item}: Props) {
  const {categories, activeCategory} = useSelector((state: state) => state.vod);
  const [isPressed, setIsPressed] = useState<boolean>(false);

  return (
    <View style={{zIndex: 1000}}>
      <TouchableOpacity
        style={styles.mainView}
        onPress={() => setIsPressed(prevState => !prevState)}>
        <Animated.Image
          source={require('../assets/UpArrow.png')}
          style={{
            ...styles.image,
            transform: [{rotate: isPressed ? '0deg' : '180deg'}],
          }}
          resizeMode="contain"
        />
        <Text style={styles.text}>{activeCategory.name}</Text>
      </TouchableOpacity>
      <View
        style={{...styles.listContainer, display: isPressed ? null : 'none'}}>
        {isPressed ? (
          <FlatList
            style={styles.list}
            ListFooterComponent={<View></View>}
            ListFooterComponentStyle={{height: 5}}
            contentContainerStyle={styles.listChild}
            data={categories}
            renderItem={VodSubCategory}
            keyExtractor={item => item.id}
          />
        ) : null}
      </View>
      {activeCategory.subCategories.length ? (
        <View
          style={{
            height: Dimensions.get('screen').height * 0.05,
            backgroundColor: '#282828',
          }}>
          <SubCategory subCategories={activeCategory.subCategories} />
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  listChild: {backgroundColor: '#282828'},
  list: {},
  listContainer: {
    height: Dimensions.get('screen').height * 0.3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  image: {
    height: 9,
  },
  mainView: {
    flexDirection: 'row',
    backgroundColor: colors.TURQUOISE_GREEN,
    height: Dimensions.get('screen').height * 0.06,
    width: Dimensions.get('screen').width,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontFamily: 'NarkissBlock-Bold',
    padding: 10,
    fontSize: 18,
    fontWeight: '500',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'right',
    color: '#000000',
  },
});
