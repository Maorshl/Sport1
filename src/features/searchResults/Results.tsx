import React from 'react';
import Posts from './posts/Posts';
import TeamsAndLeagues from './teamsAndLeagues/TeamsAndLeagues';
import {useDispatch, useSelector} from 'react-redux';
import BlurOnFocus from '../more/BlurOnFocus';
import {View} from 'react-native';

interface Props {
  focused: boolean;
}
export default function Results({focused}: Props) {
  const searchResults = useSelector(
    (state: {
      app: {
        searchResults: {
          teams_and_leagues: {teams: []; leagues: []};
          posts: [];
        };
      };
    }) => state.app.searchResults,
  );

  return (
    <>
      {searchResults.posts ? (
        <>
          <View style={{maxHeight: '100%'}}>
            {focused ? <BlurOnFocus /> : <></>}
            <TeamsAndLeagues data={searchResults.teams_and_leagues} />
            <Posts data={searchResults.posts} />
          </View>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
