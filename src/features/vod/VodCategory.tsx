import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import colors from '../../constants/colors';
import SvgIcon from '../../utils/SvgIcon';
import {useSelector} from 'react-redux';
import VodSubCategory from './VodSubCategory';

interface Props {
  item: {name: string};
}

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

export default function VodCategory({item}: Props) {
  const {categories} = useSelector((state: state) => state.vod);
  const [isPressed, setIsPressed] = useState<boolean>(false);
  return (
    <View>
      <TouchableOpacity
        style={styles.mainView}
        onPress={() => setIsPressed(prevState => !prevState)}>
        <Image
          source={require('./assets/UpArrow.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.text}>{item.name}</Text>
      </TouchableOpacity>
      <View style={styles.listContainer}>
        {isPressed ? (
          <FlatList
            style={styles.list}
            contentContainerStyle={styles.listChild}
            data={categories}
            renderItem={VodSubCategory}
            keyExtractor={item => item.id}
          />
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  listChild: {backgroundColor: '#282828'},
  list: {},
  listContainer: {
    height: Dimensions.get('screen').height * 0.3,
  },
  image: {
    height: 9,
  },
  mainView: {
    flexDirection: 'row',
    backgroundColor: colors.TURQUOISE_GREEN,
    height: Dimensions.get('screen').height * 0.06,
    width: Dimensions.get('screen').width,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontFamily: 'NarkissBlock-Regular',
    padding: 10,
    fontSize: 18,
    fontWeight: '500',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'right',
    color: '#000000',
  },
});
