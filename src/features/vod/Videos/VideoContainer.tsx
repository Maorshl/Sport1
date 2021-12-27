import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {changeActiveVideo} from '../reducer/vod.reducer';
import {useDispatch} from 'react-redux';

export default function VideoContainer({item, index}) {
  //cannot dispatch in a FlatList Child component so doing this
  const InnerComponent = () => {
    const dispatch = useDispatch();
    const [error, setError] = useState<boolean>(false);

    return (
      <TouchableOpacity
        style={{...styles.video, paddingTop: index ? null : '2%'}}
        onPress={() => dispatch(changeActiveVideo(item.id))}>
        <View style={styles.top}>
          <Text style={styles.text}>{item.title}</Text>
          {error ? (
            <Image
              style={{
                ...styles.image,
                resizeMode: 'contain',
                maxHeight: '100%',
              }}
              source={require('../assets/videoFallback.png')}
            />
          ) : (
            <Image
              onError={() => setError(true)}
              style={styles.image}
              source={{
                uri: item.featured_image.url,
              }}
            />
          )}
        </View>
        <View style={styles.bottomBorder}></View>
      </TouchableOpacity>
    );
  };
  return <InnerComponent />;
}

const styles = StyleSheet.create({
  image: {
    width: '35%',
    marginRight: -6,
    borderRadius: 4,
  },
  top: {
    width: Dimensions.get('screen').width,
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: '70%',
  },
  bottomBorder: {
    marginTop: '4%',
    width: '94%',
    opacity: 0.17,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#979797',
    alignSelf: 'center',
  },
  video: {
    width: Dimensions.get('screen').width,
    backgroundColor: '#171717',
    height: Dimensions.get('screen').height * 0.14,
    justifyContent: 'center',
    alignItems: 'center',
    // paddingTop: '2%',
  },
  text: {
    fontFamily: 'NarkissBlock-Regular',
    width: '50%',
    fontSize: 17,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 19,
    letterSpacing: 0,
    textAlign: 'right',
    color: '#f8f8f8',
    paddingLeft: 10,
  },
});
