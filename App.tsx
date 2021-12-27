import React, {useEffect, useState} from 'react';
import Navigator from './src/features/navigation/Container';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import store from './src/redux/store';
import {View} from 'react-native';
import {Provider, useSelector, useDispatch} from 'react-redux';
import {StatusBar} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import Main from './src/features/onBoarding/Main';
import SplashScreen from 'react-native-splash-screen';
// import MyStatusBar from './src/components/MyStatusBar';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar
          // backgroundColor="#121212"
          barStyle="light-content"
          translucent
        />
        <Main />
        <FlashMessage position="top" />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
