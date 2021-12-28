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
import moment from 'moment';

export interface Post {
  id: string;
  date: string;
  title: string;
  featured_image: {
    url: string;
  };
}

interface Props {
  post: Post;
}

export default function PostContainer({post}: Props) {
  const timeToDisplay = convertTimeToHebrew(moment(post.date).fromNow(true));

  return (
    <TouchableOpacity style={styles.shadow}>
      <View style={styles.mainContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{post.title}</Text>
          <Text style={styles.date}>{'לפני ' + timeToDisplay}</Text>
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
  shadow: {
    shadowColor: Platform.OS === 'ios' ? 'rgba(0, 0, 0, 0.08)' : '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    shadowOpacity: 1,
    elevation: 4,
  },
  textContainer: {
    maxWidth: '60%',
    justifyContent: 'space-around',
    padding: 10,
  },
  text: {
    maxWidth: '100%',
    fontFamily: 'NarkissBlock-Bold',
    fontSize: 16,
    // fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: 19,
    letterSpacing: 0,
    textAlign: 'right',
    color: '#121212',
  },
  mainContainer: {
    height: Dimensions.get('screen').height * 0.13,
    width: Dimensions.get('screen').width * 0.94,
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
    margin: 6,
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
    maxWidth: '100%',
    bottom: 2,
  },
});

const convertTimeToHebrew = (date: string) => {
  let unitsInHebrew = '';
  const [time, unit] = date.split(' ');
  switch (unit) {
    case 'days':
      unitsInHebrew = 'ימים';
      break;
    case 'day':
      unitsInHebrew = 'יום';
      break;
    case 'minutes':
      unitsInHebrew = 'דקות';
      break;
    case 'minute':
      unitsInHebrew = 'דקה';
      break;
    case 'hours':
      unitsInHebrew = 'שעות';
      break;
    case 'hour':
      unitsInHebrew = 'שעה';
      break;
    case 'years':
      unitsInHebrew = 'שנים';
      break;
    case 'year':
      unitsInHebrew = 'שנה';
      break;
    case 'months':
      unitsInHebrew = 'חודשים';
      break;
    case 'month':
      unitsInHebrew = 'חודש';
      break;
  }
  if (time === 'a') {
    return unitsInHebrew;
  } else {
    return time + ' ' + unitsInHebrew;
  }
};
