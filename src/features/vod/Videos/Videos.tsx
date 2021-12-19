import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
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
      contentContainerStyle={styles.listChild}
      data={videos}
      renderItem={VideoContainer}
      keyExtractor={item => item.id}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    height: '100%',
  },
  listChild: {},
});
