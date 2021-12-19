import React, {useEffect} from 'react';
import {FlatList, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {VodPageCategories} from './action/vod.action';
import VodCategory from './CategoriesDropdown/VodCategory';
import Spinner from 'react-native-loading-spinner-overlay';
import VodBody from './VodBody';

interface category {
  name: string;
  id: string;
}

interface state {
  vod: {
    categories: category[];
    loading: boolean;
  };
}

const Vod = () => {
  const dispatch = useDispatch();
  const {categories, loading} = useSelector((state: state) => state.vod);

  useEffect(() => {
    dispatch(VodPageCategories(''));
    console.log();
  }, []);

  return (
    <SafeAreaView>
      {loading ? (
        <Spinner visible={loading} textContent={'Loading...'} />
      ) : (
        <VodBody />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'flex-end',
  },
  list: {},
});

export default Vod;
