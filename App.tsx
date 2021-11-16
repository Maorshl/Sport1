import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/components/mainscreen/HomeScreen';
import More from './src/components/more/More';
import Vod from './src/components/vod/Vod';
import Results from './src/components/results/Results';
import Broadcasts from './src/components/broadcasts/Broadcasts';
import Container from './src/components/navigation/Container';
import Colors from './src/constants/colors';
import Icon from './src/components/navigation/Icon';
const activeHomeIcon = require('./src/assets/activeHomeIcon.png');
const inactiveHomeIcon = require('./src/assets/inactiveHomeIcon.png');
import Navigator from './src/components/navigation/Container';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <Navigator />
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  mainScreen: {},
});

export default App;
