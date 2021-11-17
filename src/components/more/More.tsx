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
import CategoryContainer, {Category} from './CategoryContainer';

function More() {
  const dispatch = useDispatch();
  const categories = useSelector(
    (state: {app: {categories: []}}) => state.app.categories,
  );
  useEffect(() => {
    dispatch(thunk());
    console.log('Categories Fetched on:', Platform.OS.toString());
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.background}>
        {categories.length ? (
          <FlatList
            style={styles.list}
            contentContainerStyle={styles.listChild}
            data={categories}
            renderItem={CategoryContainer}
            keyExtractor={item => item.id}
          />
        ) : (
          <Text>I am a spinner</Text>
        )}
      </View>
      <View style={styles.madeByMoveo}>
        <SvgIcon
          name="madeByMoveo"
          viewBox="0 0 182 15"
          height={16}
          width={182}
        />
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
  },
});

export default More;
