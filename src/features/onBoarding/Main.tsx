import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Provider, useSelector, useDispatch} from 'react-redux';
import Carousel from './Carousel';
import Navigator from '../navigation/Container';
import {firstTimeCheck} from './action/onBoarding.action';

export default function Main() {
  const dispatch = useDispatch();

  //   const isFirstTime = useSelector(
  //     (state: {onBoarding: {firstTime: boolean}}) => state.onBoarding.firstTime,
  //   );
  const isFirstTime = useSelector((state: any) => state.onBoarding.isFirstTime);

  useEffect(() => {
    dispatch(firstTimeCheck(''));
  }, []);

  return <>{isFirstTime ? <Carousel /> : <Navigator />}</>;
}

const styles = StyleSheet.create({});
