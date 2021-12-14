import React from 'react';
import {View, Text, FlatList, StyleSheet, Dimensions} from 'react-native';
import SvgIcon from '../../../utils/SvgIcon';
import PostContainer from './PostContainer';

interface Props {
  data: any;
}
export default function Posts({data}: Props) {
  return (
    <View style={styles.list}>
      <Text style={styles.text}>חדשות ותקצירים</Text>
      <FlatList
        ListEmptyComponent={ListEmptyComponent}
        contentContainerStyle={styles.listContainer}
        data={data}
        renderItem={RenderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    height: Dimensions.get('window').height * 0.55,
  },
  listContainer: {
    alignItems: 'center',
  },
  text: {
    padding: 10,
    // marginRight: Dimensions.get('screen').width * 0.033,
    fontFamily: 'NarkissBlock-Regular',
    fontSize: 15,
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: 20,
    letterSpacing: 0,
    textAlign: 'right',
    color: '#646464',
  },
});

const RenderItem = ({item}: {item: any}) => {
  return <PostContainer post={item}></PostContainer>;
};
const ListEmptyComponent = ({item}: {item: any}) => {
  return (
    <View
      style={{
        flexDirection: 'row',

        width: '100%',
        justifyContent: 'space-evenly',
        padding: '5%',
        alignItems: 'center',
        paddingRight: '10%',
      }}>
      <Text
        style={{
          maxWidth: '50%',
          fontFamily: 'NarkissBlock-Regular',
          fontSize: 15,
          fontWeight: 'normal',
          fontStyle: 'normal',
          lineHeight: 20,
          letterSpacing: 0,
          textAlign: 'right',
        }}>
        לא נמצאו חדשות או תקצירים התואמים את החיפוש
      </Text>
      <SvgIcon name="emptyIcon" viewBox="0 0 30 30" width={40} height={40} />
    </View>
  );
};
