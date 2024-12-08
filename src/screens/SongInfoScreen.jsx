import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import themeColors from '../theme/themeColors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons//AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons//MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

const {width, heigt} = Dimensions.get('screen');
const SongInfoScreen = () => {
  const route = useRoute();
  const {album} = route.params || {};
  const navigation = useNavigation();

  const {coverArt, name, artist, year} = album;
  return (
    <LinearGradient
      colors={[themeColors.DARKGREEN, themeColors.LIGHTGREEN]}
      style={{flex: 1}}>
      <ScrollView style={styles.scrollView}>
        <View style={{padding: 10}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color={themeColors.WHITE} />
          </TouchableOpacity>

          <View style={styles.imageView}>
            <Image source={{uri: coverArt}} style={styles.coverImage} />
          </View>
        </View>
        <Text style={styles.albumNameText}>{name}</Text>

        <View style={{marginHorizontal: 12, marginTop: 10}}>
          <Text
            style={{
              color: themeColors.WHITE,
              fontWeight: 'bold',
              fontSize: 13,
            }}>
            {artist}
          </Text>
        </View>

        <View style={styles.controlView}>
          <Pressable style={styles.downloadButton}>
            <AntDesign name="arrowdown" size={24} color={themeColors.WHITE} />
          </Pressable>

          <View style={styles.playButtonView}>
            <Pressable>
              <MaterialCommunityIcons
                name="cross-bolnisi"
                size={24}
                color={themeColors.WHITE}
              />
            </Pressable>
            <Pressable>
              <Entypo
                name="controller-play"
                size={24}
                color={themeColors.WHITE}
                style={styles.downloadButton}
              />
            </Pressable>
          </View>
        </View>
        <View style={styles.albumInfo}>
          <View style={styles.leftAlbumInfo}>
            <Text style={styles.albumText}>{album.name}</Text>
            <Text style={styles.albumText}>{album.artist}</Text>
            <Text style={styles.albumText}>{album.year}</Text>
          </View>
          <Entypo
            name="dots-three-vertical"
            style={{fontSize: 30, color: themeColors.WHITE}}
          />
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default SongInfoScreen;

const styles = StyleSheet.create({
  scrollView: {
    marginTop: 50,
  },
  coverImage: {
    width: width * 0.5,
    height: width * 0.5,
  },
  imageView: {flex: 1, alignItems: 'center'},
  albumNameText: {
    color: themeColors.WHITE,
    marginHorizontal: 12,
    marginTop: 10,
    fontSize: 22,
    fontWeight: 'bold',
  },
  controlView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  downloadButton: {
    borderWidth: 2,
    padding: 15,
    borderRadius: 50,
    backgroundColor: themeColors.BROWN,
    borderColor: themeColors.BROWN,
  },
  playButtonView: {flexDirection: 'row', alignItems: 'center', gap: 5},
  albumInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    alignItems: 'center',
  },
  albumText: {color: themeColors.WHITE, fontSize: 22, fontWeight: 'bold'},
});
