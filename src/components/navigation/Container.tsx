import React, {ReactChildren} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import NavbarButton from './NavbarButton';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Colors from '../../constants/colors';
import More from '../more/More';
import Vod from '../vod/Vod';
import Results from '../results/Results';
import Broadcasts from '../broadcasts/Broadcasts';
import HomeScreen from '../mainscreen/HomeScreen';
import Icon from '../navigation/Icon';

const Tab = createBottomTabNavigator();

const Container = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarLabelStyle: {
            color: Colors.WHITE,
          },
          tabBarStyle: {
            backgroundColor: 'rgb(20, 20, 20)',
          },
          tabBarShowLabel: false,
        }}>
        <Tab.Screen
          name="עוד"
          component={More}
          options={{
            tabBarIcon: ({focused}) =>
              focused ? (
                <Icon
                  image={'activeMore'}
                  label="עוד"
                  focused={focused}
                  iconSize={{height: 17, width: 18}}
                  viewBox="0 0 15 16"
                />
              ) : (
                <Icon
                  image={'inactiveMore'}
                  label="עוד"
                  focused={focused}
                  iconSize={{height: 18, width: 18}}
                  viewBox="0 0 15 16"
                />
              ),
          }}
        />
        <Tab.Screen
          name="שידורים"
          component={Broadcasts}
          options={{
            tabBarIcon: ({focused}) =>
              focused ? (
                <Icon
                  image={'activeBroadcasts'}
                  label="שידורים"
                  focused={focused}
                  iconSize={{height: 20, width: 22}}
                  viewBox="0 0 16 17"
                />
              ) : (
                <Icon
                  image={'inactiveBroadcasts'}
                  label="שידורים"
                  focused={focused}
                  iconSize={{height: 20, width: 22}}
                  viewBox="0 0 16 17"
                />
              ),
          }}
        />
        <Tab.Screen
          name="VOD"
          component={Vod}
          options={{
            tabBarIcon: ({focused}) =>
              focused ? (
                <Icon
                  image={'activeVOD'}
                  label="VOD"
                  focused={focused}
                  iconSize={{height: 20, width: 25}}
                  viewBox="0 0 23 15"
                />
              ) : (
                <Icon
                  image={'inactiveVOD'}
                  label="VOD"
                  focused={focused}
                  iconSize={{height: 20, width: 25}}
                  viewBox="0 0 23 15"
                />
              ),
          }}
        />
        <Tab.Screen
          name="תוצאות"
          component={Results}
          options={{
            tabBarIcon: ({focused}) =>
              focused ? (
                <Icon
                  image={'activeResults'}
                  label="תוצאות"
                  focused={focused}
                  iconSize={{
                    height: Dimensions.get('screen').height * 0.02,
                    width: Dimensions.get('screen').width * 0.07,
                  }}
                  viewBox="0 0 20 15"
                />
              ) : (
                <Icon
                  image={'inactiveResults'}
                  label="תוצאות"
                  focused={focused}
                  iconSize={{
                    height: Dimensions.get('screen').height * 0.02,
                    width: Dimensions.get('screen').width * 0.07,
                  }}
                  viewBox="0 0 20 15"
                />
              ),
          }}
        />
        <Tab.Screen
          name="ראשי"
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused}) =>
              focused ? (
                <Icon
                  image={'activeHome'}
                  label="ראשי"
                  focused={focused}
                  iconSize={{
                    height: Dimensions.get('screen').height * 0.02,
                    width: 20,
                  }}
                  viewBox="0 0 15 16"
                />
              ) : (
                <Icon
                  image={'inactiveHome'}
                  label="ראשי"
                  focused={focused}
                  iconSize={{
                    height: Dimensions.get('screen').height * 0.02,
                    width: 20,
                  }}
                  viewBox="0 0 15 16"
                />
              ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Container;

const styles = StyleSheet.create({
  navbarContainer: {},
});
