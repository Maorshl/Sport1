import React, {useEffect, useState} from 'react';
import Navigator from './src/features/navigation/Container';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import store from './src/redux/store';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {showMessage} from 'react-native-flash-message';
import Carousel from './src/features/onBoarding/Carousel';

const App = () => {
  const [firstTime, setFirstTime] = useState<boolean>(true);
  useEffect(() => {
    getData();
  });

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('onBoarding');
      if (jsonValue != null) {
        setFirstTime(false);
      }
    } catch (e) {
      showMessage({
        message: 'An Error Occurred, Please try again later',
        type: 'danger',
      });
    }
  };

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        {firstTime ? <Carousel /> : <Navigator />}
        <FlashMessage position="top" />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
