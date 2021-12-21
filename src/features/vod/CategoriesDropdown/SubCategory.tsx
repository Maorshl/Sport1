import React, {useEffect} from 'react';
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../../../constants/colors';
import SubCategoryButton from './SubCategoryButton';
import {useSelector, useDispatch} from 'react-redux';
import {changeActiveSubCategory} from '../reducer/vod.reducer';

interface Props {
  subCategories: {id: string; name: string}[];
}

interface State {
  vod: {
    activeCategory: {id: string};
  };
}

export default function SubCategory({subCategories}: Props) {
  const {activeCategory} = useSelector((state: State) => state.vod);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeActiveSubCategory('הכל'));
  }, []);
  return (
    <FlatList
      horizontal={true}
      style={styles.list}
      contentContainerStyle={styles.listChild}
      data={[{name: 'הכל', id: activeCategory.id}, ...subCategories]}
      renderItem={RenderItem}
      keyExtractor={item => item.id}
    />
  );
}

const RenderItem = ({item}) => {
  return <SubCategoryButton item={item} />;
};

const styles = StyleSheet.create({
  list: {
    height: 30,
    direction: 'rtl',
    width: Dimensions.get('screen').width,
  },
  listChild: {},
});
