import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Platform,
  Text,
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {thunk} from '../../redux/app';
import SvgIcon from '../../utils/SvgIcon';
import TopBar from '../common/TopBar';
import CategoryContainer, {Category} from './CategoryContainer';
import Search from 'react-native-search-box';
import CategoriesList from './CategoriesList';

function More() {
  const [focused, setFocused] = useState<boolean>(false);

  const dispatch = useDispatch();

  const categories = useSelector(
    (state: {app: {categories: Category[]}}) => state.app.categories,
  );

  useEffect(() => {
    dispatch(thunk());
    console.log('Categories Fetched on:', Platform.OS.toString());
  }, []);

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
        onFocus={() => onFocus(setFocused)}
        onCancel={() => onFocus(setFocused)}
        inputHeight={30}
        positionRightDelete={Dimensions.get('screen').width * 0.88}
      />
      <View style={styles.background}>
        {categories.length ? (
          <CategoriesList focused={focused} categories={categories} />
        ) : (
          <Text>I am a spinner</Text>
        )}
      </View>
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

const onSearch = (searchText: string) => {
  return new Promise((resolve, reject) => {
    console.log('Searched ', `"${searchText}"`);
    resolve('');
  });
};
const onFocus = (setFocus: Function) => {
  return new Promise((resolve, reject) => {
    setFocus((prevState: boolean) => !prevState);
    resolve('');
  });
};
export default More;
