import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import PostContainer from './PostContainer';
import {Post} from './PostContainer';

interface Props {
  data: Post[];
}
export default function Posts({data}: Props) {
  return (
    <View style={styles.list}>
      <Text style={styles.text}>חדשות ותקצירים</Text>
      <FlatList
        ListFooterComponent={footerComponent}
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
    marginTop: 20,
    paddingRight: 13,
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

const RenderItem = ({item}: {item: Post}) => {
  return <PostContainer post={item}></PostContainer>;
};
const ListEmptyComponent = () => {
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
          maxWidth: '60%',
          fontFamily: 'NarkissBlock-Regular',
          fontSize: 15,
          fontWeight: 'normal',
          fontStyle: 'normal',
          lineHeight: 20,
          letterSpacing: 0,
          textAlign: 'right',
          color: 'rgb(160, 160, 160)',
        }}>
        לא נמצאו חדשות או תקצירים התואמים את החיפוש
      </Text>
      <Image
        source={require('../assets/noReusltsTry.png')}
        style={{height: 40, width: 40}}
      />
    </View>
  );
};

const footerComponent = () => {
  return <View style={{height: 40}}></View>;
};
