import React from 'react';
import Navigator from './src/features/navigation/Container';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import store from './src/redux/store';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';
import FlashMessage from 'react-native-flash-message';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <Navigator />
        <FlashMessage position="top" />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
