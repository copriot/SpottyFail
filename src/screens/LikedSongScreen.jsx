import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import themeColors from '../theme/themeColors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import Loader from '../components/Loader';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Modal from 'react-native-modal';
import Entypo from 'react-native-vector-icons/Entypo';
import TrackPlayer, {useProgress} from 'react-native-track-player';
import {useNavigation} from '@react-navigation/native';

const SongsScreen = () => {
  const {width, height} = Dimensions.get('screen');
  const navigation = useNavigation();
  const progress = useProgress();
  const [searchText, setSearchText] = useState('Türkiyede Popüler');
  const [seachedTracks, setSearchTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [like, setLike] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [error, setError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

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

  const setupPlayer = async () => {
    try {
      await TrackPlayer.setupPlayer();
      TrackPlayer.updateOptions({
        capabilities: [
          TrackPlayer.CAPABILITY_PLAY,
          TrackPlayer.CAPABILITY_PAUSE,
          TrackPlayer.CAPABILITY_STOP,
          TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
          TrackPlayer.CAPABILITY_SKIP_TO_PREVIOS,
          TrackPlayer.CAPABILITY_SEEK_TO,
        ],
      });
    } catch (error) {
      console.log('Error setting up player:', error);
    }
  };

  const handlePlay = async track => {
    const trackData = {
      id: track.track.key,
      url: track.track.hub.actions.find(action => action.type === 'uri').uri,
      title: track.track.title,
      artist: track.track.subtitle,
      artwork: track.track.images.coverart,
    };

    try {
      await TrackPlayer.reset();
      await TrackPlayer.add(trackData);
      await TrackPlayer.play();
      setSelectedTrack(track.track);
      setModalVisible(true);
      setIsPlaying(true);
    } catch (error) {
      console.log(error.message);
    }
  };

  const formatTime = seconds => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '10' : ''}${secs}`;
  };
  const togglePlayButton = async () => {
    if (isPlaying) {
      await TrackPlayer.pause();
    } else {
      await TrackPlayer.play();
    }
    setIsPlaying(!isPlaying);
  };

  const seekBackward = async () => {
    const position = await TrackPlayer.getPosition();
    await TrackPlayer.seekTo(position - 10);
  };
  const seekForward = async () => {
    const position = await TrackPlayer.getPosition();
    await TrackPlayer.seekTo(position + 10);
  };

  useEffect(() => {
    handleSearch();
    setupPlayer();
  }, []);

  return (
    <>
      <LinearGradient
        style={{flex: 1}}
        colors={[
          themeColors.DARKGREEN,
          themeColors.BROWN,
          themeColors.LIGHTGREEN,
        ]}>
        <View style={{flex: 1, marginTop: 50}}>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 25,
              marginHorizontal: 10,
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <Pressable onPress={() => navigation.goBack()}>
              <Ionicons
                name="chevron-back"
                color={themeColors.WHITE}
                size={26}
              />
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
                onChangeText={setSearchText}
                onSubmitEditing={handleSearch}
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
                keyExtractor={item => item?.track?.key}
                renderItem={({item}) => (
                  <Pressable
                    onPress={() => {
                      handlePlay(item);
                      setModalVisible(true);
                    }}>
                    <View style={styles.trackContainer}>
                      <Image
                        source={{uri: item?.track?.images?.coverart}}
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

                      <Ionicons
                        name="play"
                        color={themeColors.WHITE}
                        size={26}
                      />
                    </View>
                  </Pressable>
                )}
              />
            )}
          </View>
        </View>
      </LinearGradient>
      <Modal
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(false)}
        swipeDirection="down"
        onSwipeComplete={() => setModalVisible(false)}
        style={{margin: 0}}>
        <View
          style={{
            backgroundColor: themeColors.BROWN,
            width: '100%',
            height: '100%',
            paddingTop: height * 0.05,
            paddingHorizontal: width * 0.05,
          }}>
          <View
            style={{
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
              marginVertical: height * 0.03,
              borderBottomWidth: 2,
              paddingBottom: 20,
              borderColor: themeColors.LIGHTGREEN,
            }}>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <AntDesign name="down" size={24} color={themeColors.WHITE} />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 'bold',
                color: themeColors.WHITE,
              }}>
              Songs
            </Text>
            <Entypo
              name="dots-three-vertical"
              size={24}
              color={themeColors.WHITE}
            />
          </View>
          <View style={{padding: 10}}>
            <Image
              source={{uri: selectedTrack?.images.coverart}}
              style={{
                width: '100%',
                height: height * 0.3,
                borderRadius: 24,
                objectFit: 'fill',
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 20,
              }}>
              <View>
                <Text
                  style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>
                  {selectedTrack?.title}
                </Text>
                <Text
                  style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>
                  {selectedTrack?.subtitle}
                </Text>
              </View>

              <TouchableOpacity onPress={() => setLike(!like)}>
                {like ? (
                  <AntDesign
                    name="heart"
                    size={24}
                    color={themeColors.DARKGREEN}
                  />
                ) : (
                  <AntDesign name="heart" size={24} color={themeColors.WHITE} />
                )}
              </TouchableOpacity>
            </View>

            <View style={{marginTop: 10}}>
              <View
                style={{
                  width: '100%',
                  marginTop: 10,
                  height: 3,
                  backgroundColor: 'gray',
                  borderRadius: 5,
                }}>
                <View
                  style={[
                    styles.progressbar,
                    {
                      width: `${
                        (progress.position / progress.duration) * 100
                      } %`,
                    },
                  ]}
                />
                <View
                  style={{
                    position: 'absolute',
                    top: -5,
                    width: 10,
                    height: 10,
                    backgroundColor: 'white',
                    borderRadius: 5,
                    left: `${(progress.position / progress.duration) * 100} %`,
                  }}
                />
              </View>

              <View
                style={{
                  marginTop: 12,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text style={{color: 'white', fontSize: 15}}>
                  {formatTime(progress.position)}
                </Text>
                <Text style={{color: 'white', fontSize: 15}}>
                  {formatTime(progress.duration)}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 18,
                  alignItems: 'center',
                }}>
                <Pressable onPress={seekBackward}>
                  <Entypo
                    name="controller-fast-backward"
                    size={30}
                    color={themeColors.YELLOW}
                  />
                </Pressable>

                <Pressable>
                  <Ionicons
                    name="play-skip-back"
                    size={30}
                    color={themeColors.YELLOW}
                  />
                </Pressable>

                <Pressable onPress={togglePlayButton}>
                  {isPlaying ? (
                    <AntDesign
                      name="pausecircle"
                      size={60}
                      color={themeColors.YELLOW}
                    />
                  ) : (
                    <Entypo
                      name="controller-play"
                      size={60}
                      color={themeColors.YELLOW}
                    />
                  )}
                </Pressable>

                <Pressable>
                  <Ionicons
                    name="play-skip-forward"
                    size={30}
                    color={themeColors.YELLOW}
                  />
                </Pressable>

                <Pressable onPress={seekForward}>
                  <Entypo
                    name="controller-fast-forward"
                    size={30}
                    color={themeColors.YELLOW}
                  />
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </>
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
