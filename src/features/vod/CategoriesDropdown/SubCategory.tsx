import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from '../../../constants/colors';
import SubCategoryButton from './SubCategoryButton';

interface Props {
  subCategories: {id: string; name: string}[];
}

export default function SubCategory({subCategories}: Props) {
  return (
    <FlatList
      horizontal={true}
      style={styles.list}
      contentContainerStyle={styles.listChild}
      data={subCategories}
      renderItem={RenderItem}
      keyExtractor={item => item.id}
    />
  );
}

const RenderItem = ({item}) => {
  return (
    <SubCategoryButton item={item} />
    // <TouchableOpacity
    //   style={{
    //     backgroundColor: '#282828',
    //     alignItems: 'center',
    //     justifyContent: 'space-between',
    //   }}>
    //   <Text
    //     style={{
    //       opacity: 0.58,
    //       margin: 10,
    //       fontFamily: 'NarkissBlock-Regular',
    //       fontSize: 17,
    //       fontWeight: '500',
    //       fontStyle: 'normal',
    //       letterSpacing: 0,
    //       textAlign: 'right',
    //       color: '#e5e5e5',
    //     }}>
    //     {item.name}
    //   </Text>
    //   <View
    //     style={{
    //       backgroundColor: colors.TURQUOISE_GREEN,
    //       height: 4,
    //       width: '100%',
    //       bottom: 0,
    //     }}></View>
    // </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  list: {
    height: 30,
  },
  listChild: {},
});
