import React, {useEffect, useState} from 'react';
import {Platform, Text, View, StyleSheet, Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {categoriesFetch, searchFetch} from '../../redux/app';
import TopBar from '../common/TopBar';
import {Category} from './CategoryContainer';
import Search from 'react-native-search-box';
import CategoriesList from './CategoriesList';
import Results from '../searchResults/Results';

function More() {
  const [focused, setFocused] = useState<boolean>(false);
  const [searched, setSearched] = useState<boolean>(false);

  const dispatch = useDispatch();

  const categories = useSelector(
    (state: {app: {categories: Category[]}}) => state.app.categories,
  );
  const searchResults = useSelector(
    (state: {app: {searchResults: {}}}) => state.app.searchResults,
  );

  useEffect(() => {
    dispatch(categoriesFetch());
    console.log('Categories Fetched on:', Platform.OS.toString());
  }, []);

  const onSearch = (searchText: string) => {
    return new Promise((resolve, reject) => {
      dispatch(searchFetch(searchText));
      setSearched(true);
      resolve('');
    });
  };

  const onFocus = () => {
    return new Promise((resolve, reject) => {
      setFocused((prevState: boolean) => !prevState);
      resolve('');
    });
  };

  const onCancel = () => {
    return new Promise((resolve, reject) => {
      setFocused((prevState: boolean) => !prevState);
      setSearched(false);
      resolve('');
    });
  };

  return (
    <SafeAreaView>
      <TopBar />
      <Search
        placeholder="חפש קבוצות, ליגות וכתבות..."
        cancelTitle="בטל"
        backgroundColor="rgb(242, 242, 242)"
        cancelButtonStyle={styles.search}
        inputStyle={styles.input}
        onSearch={onSearch}
        onFocus={() => onFocus()}
        onCancel={() => onCancel()}
        inputHeight={30}
        positionRightDelete={Dimensions.get('screen').width * 0.88}
      />
      {searched ? (
        <Results />
      ) : (
        <View style={styles.background}>
          {categories.length ? (
            <CategoriesList focused={focused} categories={categories} />
          ) : (
            <Text>I am a spinner</Text>
          )}
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#f2f2f2',
    width: Dimensions.get('screen').width,
  },
  search: {
    color: 'rgb(78, 78, 78)',
    fontFamily: 'NarkissBlock-Regular',
    alignSelf: 'center',
  },
  input: {
    textAlign: 'right',
    justifyContent: 'flex-end',
    fontFamily: 'NarkissBlock-Regular',
    fontSize: 17,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 18,
    letterSpacing: 0.1,
    color: '#4e4e4e',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#141414',
    width: '100%',
  },
  activeInput: {
    backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#141414',
  },
  searchBox: {
    width: '97%',
    margin: 'auto',
    padding: 10,
  },
});

export default More;
