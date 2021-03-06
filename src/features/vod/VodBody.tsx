import React from 'react';
import {useSelector} from 'react-redux';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import VodCategory from './CategoriesDropdown/VodCategory';
import Videos from './Videos/Videos';
import ActiveVideo from './Videos/ActiveVideo';
import SubCategory from './CategoriesDropdown/SubCategory';

interface Category {
  name: string;
  id: string;
}

interface state {
  vod: {
    categories: Category[];
    loading: boolean;
    videos: [];
    activeVideo: {
      featured_image: {url: string};
    };
  };
}

export default function VodBody() {
  const {categories, videos, activeVideo} = useSelector(
    (state: state) => state.vod,
  );

  return (
    <View style={styles.mainContainer}>
      {activeVideo.featured_image ? <ActiveVideo video={activeVideo} /> : null}
      {categories.length ? <VodCategory item={categories[0]} /> : null}
      {videos.length ? <Videos /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'flex-end',
    backgroundColor: '#171717',
  },
  list: {},
});
