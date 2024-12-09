import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import themeColors from '../theme/themeColors';
import {ProfileContext} from '../context/ProfileContext';
import round from 'lodash/round';

const ProfileScreen = () => {
  const {profile, profileLoading, profileError} = useContext(ProfileContext);
  //  console.log(profile);
  const {name, image_url, followers_count, public_playlists} = profile;

  const formatCount = count => {
    if (count >= 1000000) {
      return `${round(count / 1000000, 1)}M`;
    }
    if (count >= 1000) {
      return `${round(count / 1000, 1)}K`;
    }
    if (count > 1) {
      return count;
    }
  };
  return (
    <LinearGradient
      style={{flex: 1}}
      colors={[themeColors.DARKGREEN, themeColors.LIGHTGREEN]}>
      <ScrollView style={{marginTop: 50}}>
        <View style={styles.profileHeaderContainer}>
          <Image
            source={{uri: image_url}}
            style={{width: 50, height: 50, borderRadius: 20}}
          />
          <View>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 17,
                color: themeColors.WHITE,
              }}>
              NCS
            </Text>
            <Text
              style={{
                fontSize: 17,
                fontWeight: '700',
                color: themeColors.LIGHTGREEN,
              }}>
              {formatCount(profile.followers_count)}
            </Text>
          </View>
        </View>
        <View
          style={{
            borderTopWidth: 2,
            marginHorizontal: 17,
            borderColor: themeColors.YELLOW,
            shadowColor: themeColors.YELLOW,
            shadowOffset: 1,
            shadowOpacity: 2,
            shadowRadius: 1,
          }}></View>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 24,
            color: themeColors.WHITE,
            opacity: 0.8,
            marginLeft: 10,
            marginVertical: 10,
            padding: 5,
          }}>
          Your Playlist
        </Text>
        <View style={styles.playlistContainer}>
          {public_playlists?.map((i, index) => (
            <View
              key={index}
              style={{
                flexDirection: 'row',
                margin: 20,
                borderBottomWidth: 1,
                paddingBottom: 10,
                borderColor: themeColors.YELLOW,
                alignItems: 'center',
              }}>
              <Image
                style={{
                  width: 66,
                  height: 60,
                  borderRadius: 10,
                  borderRightWidth: 1,
                  gap: 10,
                }}
                source={{uri: 'https://picsum.photos/200'}}
              />
              <View style={{padding: 5}}>
                <Text
                  style={{
                    color: themeColors.YELLOW,
                    fontWeight: 'bold',
                    fontSize: 18,
                  }}>
                  {i?.owner_name}
                </Text>
                <Text
                  style={{
                    paddingVertical: 2,
                    color: themeColors.WHITE,
                    fontWeight: '500',
                    fontSize: 15,
                  }}>
                  {i.name.length > 40 ? i.name.slice(0, 35) + '...' : i.name}
                </Text>
                <Text style={{color: themeColors.WHITE}}>
                  Followers: {formatCount(i?.followers_count)} ❤️
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  profileHeaderContainer: {
    padding: 15,
    flexDirection: 'row',
    gap: 10,
    resizeMode: 'cover',
  },
  playlistContainer: {},
});
