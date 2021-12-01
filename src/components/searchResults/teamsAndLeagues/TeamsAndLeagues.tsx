import React from 'react';
import {View, Text, FlatList, StyleSheet, Dimensions} from 'react-native';
import TeamCircle from './TeamCircle';
import SvgIcon from '../../../utils/SvgIcon';

interface Props {
  data: any;
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
    padding: 10,
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
    alignItems: 'center',
  },
  list: {
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
});

const RenderItem = ({item}: {item: any}) => {
  return <TeamCircle team={item}></TeamCircle>;
};
const ListEmptyComponent = ({item}: {item: any}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: '100%',
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: '5%',
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
        }}>
        לא נמצאו קבוצות או ליגות התואמות את החיפוש
      </Text>
      <SvgIcon name="emptyIcon" viewBox="0 0 30 30" width={40} height={40} />
    </View>
  );
};
