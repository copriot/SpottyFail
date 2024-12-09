import {Pressable, ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import themeColors from '../theme/themeColors';

const SongsScreen = () => {
  return (
    <LinearGradient
      style={{flex: 1}}
      colors={[
        themeColors.DARKGREEN,
        themeColors.BROWN,
        themeColors.LIGHTGREEN,
      ]}>
      <ScrollView>
        <View>
          <Pressable></Pressable>
          <Pressable></Pressable>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default SongsScreen;

const styles = StyleSheet.create({});
