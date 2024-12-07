import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useContext} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import themeColors from '../theme/themeColors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {ArtistContext} from '../context/ArtistContext';
import ArtistCard from '../components/ArtistCard';

const HomeScreen = () => {
  const {artists, loading, error} = useContext(ArtistContext);

  const {width, height} = Dimensions.get('screen');

  return (
    <LinearGradient
      colors={[themeColors.DARKGREEN, themeColors.LIGHTGREEN]}
      style={{flex: 1}}>
      <ScrollView style={{marginTop: height * 0.1, paddingBottom: 100}}>
        <View style={styles.header}>
          <View style={styles.leftSide}>
            <Ionicons
              name="person-circle"
              size={80}
              color={themeColors.WHITE}
            />
            <Text style={styles.headerText}>message</Text>
          </View>
          <FontAwesome5 name="bolt" color={themeColors.WHITE} size={24} />
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            flexDirection: 'row',
            paddingHorizontal: 15,
          }}>
          <View style={styles.headerButtons}>
            {['Music', 'Podcast & Shows'].map((item, index) => (
              <Pressable style={styles.headerButton} key={index}>
                <Text style={styles.headerButtonText}>{item}</Text>
              </Pressable>
            ))}
          </View>
        </ScrollView>

        <View>
          <Pressable style={styles.listItem}>
            <LinearGradient
              colors={[themeColors.LIGHTGREEN, themeColors.YELLOW]}
              style={styles.gradientButton}>
              <AntDesign name="heart" color="white" size={24} />
            </LinearGradient>
          </Pressable>
          <Pressable style={styles.listItem}>
            <Image
              source={{uri: 'https://picsum.photos/201'}}
              style={styles.image}
            />
          </Pressable>
          <Pressable style={styles.listItem}>
            <Image
              source={{uri: 'https://picsum.photos/200'}}
              style={styles.image}
            />
          </Pressable>
          <Text style={styles.sectionTitle}>Your Top Artist</Text>
          <ScrollView horizontal>
            {artists?.map((artist, index) => (
              <ArtistCard key={index} artist={artist} />
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  headerText: {
    fontWeight: 'bold',
    color: themeColors.WHITE,
    fontSize: 24,
  },
  leftSide: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  headerButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  headerButton: {
    borderWidth: 1,
    backgroundColor: themeColors.BROWN,
    opacity: 0.7,
    padding: 10,
    borderRadius: 15,
    borderColor: themeColors.WHITE,
    marginHorizontal: 5,
  },
  headerButtonText: {
    color: themeColors.WHITE,
    fontSize: 15,
    fontWeight: 'bold',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginHorizontal: 10,
    marginVertical: 8,
    backgroundColor: '#202020',
    padding: 10,
    borderRadius: 10,
  },
  gradientButton: {
    width: 55,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 27.5,
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 27.5,
  },
  sectionTitle: {
    color: themeColors.WHITE,
    marginHorizontal: 10,
    fontSize: 19,
    fontWeight: 'bold',
    marginTop: 10,
  },
});
