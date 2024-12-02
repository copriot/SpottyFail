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
const Navigation = () => {
  const Tab = createBottomTabNavigator();

  const BottomTabs = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen name={screenNames.HOMESCREEN} component={HomeScreen} />
        <Tab.Screen
          name={screenNames.PROFILESCREEN}
          component={ProfileScreen}
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
