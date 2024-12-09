import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import themeColors from '../theme/themeColors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import Loader from '../components/Loader';
const SongsScreen = () => {
  const [searchText, setSearchText] = useState('Türkiyede Popüler');
  const [seachedTracks, setSearchTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const handleSearch = async () => {
    const options = {
      method: 'GET',
      url: 'https://shazam.p.rapidapi.com/search',
      params: {
        term: searchText,
        locale: 'tr-TR',
        offset: '0',
        limit: '5',
      },
      headers: {
        'x-rapidapi-key': '7951ad4613msh3fb171e320948e2p165213jsn76faf5a2a96d',
        'x-rapidapi-host': 'shazam.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      setSearchTracks(response.data.tracks.hits);
      setLoading(false);
      setError(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <LinearGradient
      style={{flex: 1}}
      colors={[
        themeColors.DARKGREEN,
        themeColors.BROWN,
        themeColors.LIGHTGREEN,
      ]}>
      <ScrollView style={{flex: 1, marginTop: 50}}>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 25,
            marginHorizontal: 10,
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <Pressable>
            <Ionicons name="chevron-back" color={themeColors.WHITE} size={26} />
          </Pressable>
          <Pressable
            style={{
              borderWidth: 1,
              width: '80%',
              justifyContent: 'flex-start',
              alignItems: 'center',
              flexDirection: 'row',
              gap: 10,
              borderColor: themeColors.YELLOW,
              padding: 5,
              borderRadius: 10,
            }}>
            <Ionicons name="search" color={themeColors.WHITE} size={26} />
            <TextInput
              placeholderTextColor={themeColors.YELLOW}
              placeholder="Find in search songs"
              style={{color: themeColors.WHITE, fontWeight: '700'}}
              onChange={setSearchText}
            />
          </Pressable>
        </View>

        <View style={{margin: 10}}>
          <Text
            style={{
              fontSize: 18,
              color: themeColors.WHITE,
              fontWeight: 'bold',
            }}>
            Search Songs
          </Text>
          <Text
            style={{
              fontSize: 13,
              color: themeColors.WHITE,
              marginTop: 5,
            }}>
            5
          </Text>
        </View>
        <View>
          {loading ? (
            <Loader />
          ) : error ? (
            <Error />
          ) : (
            <FlatList
              data={seachedTracks}
              keyExtractor={item => item.track.key}
              renderItem={({item}) => (
                <Pressable>
                  <View style={styles.trackContainer}>
                    <Image
                      source={{uri: item.track.images.coverart}}
                      style={{width: 65, height: 65, borderRadius: 50}}
                    />
                    <View style={styles.songInfo}>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          fontSize: 18,
                          color: themeColors.WHITE,
                        }}>
                        {item.track.subtitle}
                      </Text>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          fontSize: 14,
                          color: themeColors.WHITE,
                        }}>
                        {item.track.title}
                      </Text>
                    </View>
                    <Ionicons name="play" color={themeColors.WHITE} size={26} />
                  </View>
                </Pressable>
              )}
            />
          )}
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default SongsScreen;

const styles = StyleSheet.create({
  trackContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: themeColors.YELLOW,
    paddingVertical: 10,
  },
  songInfo: {marginHorizontal: 10, alignItems: 'flex-start', flex: 1},
});
