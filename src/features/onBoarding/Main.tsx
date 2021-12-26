import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Provider, useSelector, useDispatch} from 'react-redux';
import Carousel from './Carousel';
import Navigator from '../navigation/Container';
import {firstTimeCheck} from './action/onBoarding.action';
import Spinner from 'react-native-loading-spinner-overlay';

interface State {
  onBoarding: {
    isFirstTime: boolean;
  };
}

export default function Main() {
  const dispatch = useDispatch();
  const isFirstTime = useSelector(
    (state: State) => state.onBoarding.isFirstTime,
  );

  useEffect(() => {
    dispatch(firstTimeCheck(''));
  }, []);

  return (
    <>
      {isFirstTime ? (
        <>
          <Carousel />
          <Spinner visible={!isFirstTime} textContent={'Loading...'} />
        </>
      ) : (
        <Navigator />
      )}
    </>
  );
}

const styles = StyleSheet.create({});
