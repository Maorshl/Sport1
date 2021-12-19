import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';

export default function VideoContainer({item}) {
  return (
    <View style={styles.video}>
      <View style={styles.top}>
        <Text style={styles.text}>{item.title}</Text>
        <Image
          style={styles.image}
          source={{
            uri: item.featured_image.url,
          }}
        />
      </View>
      {/* <View style={styles.bottomBorder}></View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '30%',
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  bottomBorder: {
    opacity: 0.17,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#979797',
    alignSelf: 'center',
  },
  video: {
    width: Dimensions.get('screen').width,
    backgroundColor: '#171717',
    height: Dimensions.get('screen').height * 0.2,
    justifyContent: 'space-between',
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
