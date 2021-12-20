import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';

interface Props {
  video: {
    featured_image: {
      url: string;
    };
  };
}
interface category {
  name: string;
  id: string;
}

interface state {
  vod: {
    categories: category[];
    loading: boolean;
    videos: [];
    activeVideo: {
      date: string;
      video_name: string;
      featured_image: {url: string};
    };
  };
}

export default function ActiveVideo({video}: Props) {
  const {activeVideo} = useSelector((state: state) => state.vod);
  return (
    <View style={styles.mainContainer}>
      <Image
        source={{uri: activeVideo.featured_image.url}}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <TouchableOpacity>
          <Image
            source={require('../assets/Share.png')}
            style={{width: 20, height: 20}}
          />
        </TouchableOpacity>
        <View style={{width: '80%'}}>
          <Text style={styles.text}>{activeVideo.video_name}</Text>
          <Text style={styles.date}>
            {new Date(activeVideo.date).toLocaleString()}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {},
  image: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height * 0.3,
  },
  textContainer: {
    width: Dimensions.get('screen').width,
    alignItems: 'center',
    padding: 5,
    height: Dimensions.get('screen').height * 0.1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  text: {
    paddingBottom: 3,
    fontFamily: 'NarkissBlock-Regular',
    fontSize: 18,
    fontWeight: 'bold',
    fontStyle: 'normal',
    lineHeight: 22,
    letterSpacing: 0,
    textAlign: 'right',
    color: '#cccccc',
  },
  date: {
    opacity: 0.5,
    fontFamily: 'NarkissBlock-Regular',
    fontSize: 15,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'right',
    color: '#cccccc',
  },
});
