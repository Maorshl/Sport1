import React, {useEffect, useState} from 'react';
import {Platform, Text, View, StyleSheet, Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {categoriesFetch, searchFetch} from './actions/more.action';
import TopBar from '../../components/common/TopBar';
import {Category} from './CategoryContainer';
import Search from 'react-native-search-box';
import CategoriesList from './CategoriesList';
import Results from '../searchResults/Results';
import Spinner from 'react-native-loading-spinner-overlay';
import colors from '../../constants/colors';

function More() {
  const [focused, setFocused] = useState<boolean>(false);
  const [searched, setSearched] = useState<boolean>(false);

  const dispatch = useDispatch();

  const {categories, loading} = useSelector(
    (state: {more: {categories: Category[]; loading: boolean}}) => state.more,
  );

  useEffect(() => {
    dispatch(categoriesFetch(''));
  }, []);

  const onSearch = (searchText: string) => {
    return new Promise((resolve, reject) => {
      dispatch(searchFetch(searchText.trim()));
      setSearched(true);
      setFocused(false);
      resolve('');
    });
  };

  const onFocus = () => {
    return new Promise((resolve, reject) => {
      setFocused(true);
      resolve('');
    });
  };

  const onCancel = () => {
    return new Promise((resolve, reject) => {
      setFocused(false);
      setSearched(false);
      resolve('');
    });
  };

  return (
    <SafeAreaView style={{backgroundColor: 'rgb(20, 20, 20)'}}>
      <View style={{backgroundColor: '#f2f2f2'}}>
        <Spinner
          visible={loading}
          color={colors.TURQUOISE_GREEN}
          animation="slide"
        />
        <TopBar />
        <View style={{margin: 3, direction: 'rtl'}}>
          <Search
            placeholder="חפש קבוצות, ליגות וכתבות"
            cancelTitle="בטל"
            backgroundColor="rgb(242, 242, 242)"
            cancelButtonStyle={styles.search}
            inputStyle={{
              ...styles.input,
              borderColor: focused ? '#141414' : '#e9e9e9',
            }}
            searchIconCollapsedMargin={60}
            direction={'rtl'}
            middleWidth={250}
            onSearch={onSearch}
            onFocus={onFocus}
            onCancel={onCancel}
            inputHeight={45}
            positionRightDelete={
              Platform.OS === 'ios'
                ? Dimensions.get('screen').width * 0.07
                : Dimensions.get('screen').width * 0.75
            }
          />
        </View>
        {searched && !loading ? (
          <View style={{maxHeight: '100%'}}>
            <Results focused={focused} />
          </View>
        ) : (
          <View style={styles.background}>
            {categories.length ? (
              <CategoriesList focused={focused} categories={categories} />
            ) : (
              <></>
            )}
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#f2f2f2',
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height * 0.8,
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
    width: '85%',
    paddingStart: 10,
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
