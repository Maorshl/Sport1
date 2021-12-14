import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Platform,
  Image,
  TouchableOpacity,
} from 'react-native';

interface Props {
  post: any;
}

export default function PostContainer({post}: Props) {
  const timeToDisplay =
    new Date(post.date).toTimeString().slice(0, 5) +
    ' ' +
    new Date(post.date).toLocaleDateString();

  return (
    <TouchableOpacity>
      <View style={styles.mainContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{post.title}</Text>
          <Text style={styles.date}>{timeToDisplay}</Text>
        </View>
        <Image
          source={{
            uri: post.featured_image.url,
          }}
          style={styles.image}
        />
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  textContainer: {
    maxWidth: '60%',
    justifyContent: 'space-around',
    padding: 10,
  },
  text: {
    maxWidth: '100%',
    fontFamily: 'NarkissBlock-Regular',
    fontSize: 16,
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: 19,
    letterSpacing: 0,
    textAlign: 'right',
    color: '#121212',
  },
  mainContainer: {
    height: Dimensions.get('screen').height * 0.15,
    width: Dimensions.get('screen').width * 0.9,
    borderRadius: 9,
    backgroundColor: '#ffffff',
    shadowColor: Platform.OS === 'ios' ? 'rgba(0, 0, 0, 0.08)' : '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    shadowOpacity: 1,
    elevation: 4,
    margin: 3,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
  image: {
    height: '100%',
    width: '40%',
  },
  date: {
    fontFamily: 'NarkissBlock-Regular',
    fontSize: 13,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'right',
    color: '#9e9e9e',
    maxWidth: '95%',
    bottom: 2,
  },
});
