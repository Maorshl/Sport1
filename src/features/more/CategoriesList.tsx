import React from 'react';
import {View, Text, FlatList, StyleSheet, Dimensions} from 'react-native';
import CategoryContainer, {Category} from './CategoryContainer';
import SvgIcon from '../../utils/SvgIcon';
import BlurOnFocus from './BlurOnFocus';

interface Props {
  focused: boolean;
  categories: Category[];
}

export default function CategoriesList({categories, focused}: Props) {
  return (
    <>
      {focused ? <BlurOnFocus /> : <></>}
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listChild}
        data={categories}
        renderItem={RenderItem}
        keyExtractor={item => item.id}
        ListFooterComponentStyle={styles.madeByMoveo}
        ListFooterComponent={ListFooterComponent}
      />
    </>
  );
}

const styles = StyleSheet.create({
  listChild: {
    alignItems: 'flex-end',
  },
  list: {
    width: Dimensions.get('screen').width,
    maxHeight: Dimensions.get('screen').height * 0.7,
  },
  madeByMoveo: {
    margin: 'auto',
    alignItems: 'center',
    marginTop: 30,
    alignSelf: 'center',
  },
});

const RenderItem = ({item}: {item: Category}) => {
  return <CategoryContainer item={item} />;
};

const ListFooterComponent = ({item}: {item: Category}) => {
  return (
    <View>
      <SvgIcon
        name="madeByMoveo"
        viewBox="0 0 182 15"
        height={16}
        width={182}
      />
    </View>
  );
};
