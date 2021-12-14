import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Platform,
  TouchableOpacity,
} from 'react-native';

interface Props {
  team: {logo: {url: string} | string; name: string};
}

export default function TeamCircle({team}: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.circle}>
          <Image
            source={{
              uri: typeof team.logo === 'string' ? team.logo : team.logo.url,
            }}
            style={styles.image}
          />
        </View>
      </TouchableOpacity>
      <Text style={styles.text}>{team.name}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 5,
  },
  circle: {
    borderRadius: 50,
    height: Dimensions.get('screen').height * 0.08,
    width: Dimensions.get('screen').height * 0.08,
    backgroundColor: '#ffffff',
    shadowColor: Platform.OS === 'ios' ? 'rgba(0, 0, 0, 0.08)' : '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowRadius: 4,
    shadowOpacity: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
    elevation: 4,
  },
  text: {
    width: 75,
    height: 24,
    fontFamily: 'NarkissBlock-Regular',
    fontSize: 12,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 12,
    letterSpacing: 0,
    textAlign: 'center',
    color: '#929292',
    maxWidth: '90%',
  },
  image: {
    height: '60%',
    width: '60%',
  },
});
