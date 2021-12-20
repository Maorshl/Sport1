import React from 'react';
import {StyleSheet, Text, View, FlatList, Dimensions} from 'react-native';
import {useSelector} from 'react-redux';
import VideoContainer from './VideoContainer';

interface State {
  vod: {
    videos: [];
  };
}

export default function Videos() {
  const {videos} = useSelector((state: State) => state.vod);
  return (
    <FlatList
      style={styles.list}
      ListFooterComponent={footerComponent}
      contentContainerStyle={styles.listChild}
      data={videos}
      renderItem={VideoContainer}
      keyExtractor={item => item.id}
    />
  );
}

const footerComponent = () => {
  return (
    <View
      style={{
        height: 40,
        width: '100%',
        backgroundColor: 'rgb(20, 20, 20)',
      }}></View>
  );
};

const styles = StyleSheet.create({
  list: {
    height: Dimensions.get('screen').height * 0.4,
  },
  listChild: {},
});
