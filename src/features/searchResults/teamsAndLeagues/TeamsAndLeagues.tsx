import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import TeamCircle from './TeamCircle';
import colors from '../../../constants/colors';

interface Team {
  logo: {url: string} | string;
  name: string;
  id: string;
}

interface Props {
  data: {teams: Team[]; leagues: Team[]};
}
export default function TeamsAndLeagues({data}: Props) {
  const allTeamsAndLeagues = data.teams.concat(data.leagues);
  return (
    <>
      <Text style={styles.text}>קבוצות וליגות</Text>
      <View style={styles.rectangle}>
        <FlatList
          ListEmptyComponent={ListEmptyComponent}
          contentContainerStyle={styles.list}
          horizontal={true}
          data={allTeamsAndLeagues}
          renderItem={RenderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    paddingRight: 12,
    marginTop: 5,
    marginBottom: 5,
    fontFamily: 'NarkissBlock-Regular',
    fontSize: 15,
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: 20,
    letterSpacing: 0,
    textAlign: 'right',
    color: '#646464',
  },
  rectangle: {
    height: Dimensions.get('screen').height * 0.15,
    borderRadius: 5,
    backgroundColor: '#ffffff',
    shadowColor: 'rgba(0, 0, 0, 0.03)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    shadowOpacity: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  list: {
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
});

const RenderItem = ({item}: {item: Team}) => {
  return <TeamCircle team={item}></TeamCircle>;
};
const ListEmptyComponent = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        width: Dimensions.get('screen').width * 0.91,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingRight: '10%',
      }}>
      <Text
        style={{
          maxWidth: '50%',
          fontFamily: 'NarkissBlock-Regular',
          fontSize: 15,
          fontWeight: 'normal',
          fontStyle: 'normal',
          lineHeight: 20,
          letterSpacing: 0,
          textAlign: 'right',
          color: 'rgb(160, 160, 160)',
        }}>
        לא נמצאו קבוצות או ליגות התואמות את החיפוש
      </Text>
      <Image
        source={require('../assets/noReusltsTry.png')}
        style={{height: 40, width: 40}}
      />
    </View>
  );
};
