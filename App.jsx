import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import Navigation from './src/router/Navigation';
import {ArtistProvider} from './src/context/ArtistContext';
import {AlbumsProvider} from './src/context/AlbumContext';
import {ProfileProvider} from './src/context/ProfileContext';
const App = () => {
  return (
    <ProfileProvider>
      <ArtistProvider>
        <AlbumsProvider>
          <Navigation />
        </AlbumsProvider>
      </ArtistProvider>
    </ProfileProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
