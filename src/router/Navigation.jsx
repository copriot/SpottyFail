import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import screenNames from '../utils/screenNames';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import LikedSongScreen from '../screens/LikedSongScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SongInfoScreen from '../screens/SongInfoScreen';
import themeColors from '../theme/themeColors';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Navigation = () => {
  const Tab = createBottomTabNavigator();

  const BottomTabs = () => {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: themeColors.LIGHTGREEN,
            shadowColor: themeColors.YELLOW,
            shadowOpacity: 0.3,
            shadowRadius: 4,
            shadowOffset: {width: 0, height: -10},
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 85,
            borderWidth: 0,
          },
        }}>
        <Tab.Screen
          name={screenNames.HOMESCREEN}
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarLabel: 'main',
            tabBarLabelStyle: {
              color: themeColors.DARKGREEN,
              fontSize: 14,
              fontWeight: '600',
            },
            tabBarIcon: ({focused}) =>
              focused ? (
                <Ionicons name="home" size={24} color={themeColors.DARKGREEN} />
              ) : (
                <Ionicons
                  name="home-outline"
                  size={22}
                  color={themeColors.DARKGREEN}
                />
              ),
          }}
        />
        <Tab.Screen
          name={screenNames.PROFILESCREEN}
          component={ProfileScreen}
          options={{
            headerShown: false,
            tabBarLabel: 'profile',
            tabBarLabelStyle: {
              color: themeColors.DARKGREEN,
              fontSize: 14,
              fontWeight: '600',
            },
            tabBarIcon: ({focused}) =>
              focused ? (
                <Ionicons
                  name="person"
                  size={24}
                  color={themeColors.DARKGREEN}
                />
              ) : (
                <Ionicons
                  name="person-outline"
                  size={22}
                  color={themeColors.DARKGREEN}
                />
              ),
          }}
        />
      </Tab.Navigator>
    );
  };

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={screenNames.LOGINSCREEN}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Main" component={BottomTabs} />
        <Stack.Screen name={screenNames.LOGINSCREEN} component={LoginScreen} />
        <Stack.Screen
          name={screenNames.LIKEDSONGSCREEN}
          component={LikedSongScreen}
        />

        <Stack.Screen
          name={screenNames.SONGINFOSCREEN}
          component={SongInfoScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
