import moment from 'moment';
import React, {useEffect, useState} from 'react';
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
  const [error, setError] = useState<boolean>(false);
  useEffect(() => {
    setError(false);
  }, [activeVideo]);

  return (
    <View style={styles.mainContainer}>
      {error ? (
        <Image
          source={require('../assets/videoFallback.png')}
          style={{...styles.image, resizeMode: 'contain'}}
        />
      ) : (
        <Image
          onError={() => setError(true)}
          source={{uri: activeVideo.featured_image.url}}
          style={styles.image}
        />
      )}
      <View style={styles.textContainer}>
        <TouchableOpacity>
          <Image
            onError={() => setError(true)}
            source={require('../assets/Share.png')}
            style={{width: 20, height: 20}}
          />
        </TouchableOpacity>
        <View style={{width: '90%'}}>
          <Text style={styles.text}>{activeVideo.video_name}</Text>
          <Text style={styles.date}>
            {moment(activeVideo.date).format('hh:mm') +
              ' ' +
              moment(activeVideo.date).format('DD.MM.YY')}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    width: Dimensions.get('screen').width,
  },
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
    alignSelf: 'flex-end',
    maxWidth: Dimensions.get('screen').width * 0.7,
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
