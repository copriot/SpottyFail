import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import Navigation from './src/router/Navigation';
import {ArtistProvider} from './src/context/ArtistContext';
const App = () => {
  return (
    <ArtistProvider>
      <Navigation />;
    </ArtistProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
