import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Error = ({error}) => {
  return (
    <View>
      <Text>{error}</Text>
    </View>
  );
};

export default Error;

const styles = StyleSheet.create({});
