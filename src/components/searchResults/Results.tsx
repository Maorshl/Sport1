import React from 'react';
import Posts from './posts/Posts';
import TeamsAndLeagues from './teamsAndLeagues/TeamsAndLeagues';
import {useDispatch, useSelector} from 'react-redux';

export default function Results() {
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
          <TeamsAndLeagues data={searchResults.teams_and_leagues} />
          <Posts data={searchResults.posts} />
        </>
      ) : (
        <></>
      )}
    </>
  );
}
