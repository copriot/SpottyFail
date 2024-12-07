import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import Navigation from './src/router/Navigation';
import {ArtistProvider} from './src/context/ArtistContext';
import {AlbumsProvider} from './src/context/AlbumContext';
const App = () => {
  return (
    <ArtistProvider>
      <AlbumsProvider>
        <Navigation />
      </AlbumsProvider>
    </ArtistProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
