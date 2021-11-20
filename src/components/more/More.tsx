import React, {useEffect} from 'react';
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
import Colors from '../../constants/colors';

function More() {
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
        placeholder="חפש קבוצות, ליגות וכתבות"
        cancelTitle="בטל"
        backgroundColor="rgb(242, 242, 242)"
        cancelButtonStyle={styles.search}
        inputStyle={styles.input}
      />
      <View style={styles.background}>
        {categories.length ? (
          <FlatList
            style={styles.list}
            contentContainerStyle={styles.listChild}
            data={categories}
            renderItem={RenderItem}
            keyExtractor={item => item.id}
            ListFooterComponentStyle={styles.madeByMoveo}
            ListFooterComponent={ListFooterComponent}
          />
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
  listChild: {
    alignItems: 'flex-end',
  },
  list: {
    width: Dimensions.get('screen').width,
  },
  madeByMoveo: {
    margin: 'auto',
    alignItems: 'center',
    marginTop: 30,
    alignSelf: 'center',
  },
  search: {
    color: 'rgb(78, 78, 78)',
  },
  input: {
    textAlign: 'right',
    justifyContent: 'flex-end',
  },
});

const RenderItem = ({item}: {item: Category}) => {
  return <CategoryContainer item={item} />;
};
const ListFooterComponent = ({item}: {item: Category}) => {
  return (
    <View>
      <SvgIcon
        name="madeByMoveo"
        viewBox="0 0 182 15"
        height={16}
        width={182}
      />
    </View>
  );
};
export default More;
