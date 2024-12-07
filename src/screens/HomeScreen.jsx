import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Loader from '../components/Loader';
import themeColors from '../theme/themeColors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const HomeScreen = () => {
  const {width, height} = Dimensions.get('screen');
  return (
    <LinearGradient
      colors={[themeColors.DARKGREEN, themeColors.LIGHTGREEN]}
      style={{flex: 1}}>
      {/* <Loader /> */}
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
          style={{flexDirection: 'row'}}
          showsHorizontalScrollIndicator={false}>
          <View style={styles.headerButtons}>
            <Pressable style={styles.headerButton}>
              <Text style={styles.headerButtonText}>Music</Text>
            </Pressable>
            <Pressable style={styles.headerButton}>
              <Text style={styles.headerButtonText}>Podcast & Shows</Text>
            </Pressable>
            <Pressable style={styles.headerButton}>
              <Text style={styles.headerButtonText}>Music</Text>
            </Pressable>
            <Pressable style={styles.headerButton}>
              <Text style={styles.headerButtonText}>Podcast & Shows</Text>
            </Pressable>{' '}
            <Pressable style={styles.headerButton}>
              <Text style={styles.headerButtonText}>Music</Text>
            </Pressable>
            <Pressable style={styles.headerButton}>
              <Text style={styles.headerButtonText}>Podcast & Shows</Text>
            </Pressable>
          </View>
        </ScrollView>

        <View>
          <Pressable
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
              marginHorizontal: 10,
              marginVertical: 8,
              backgroundColor: '#202020',
            }}>
            <LinearGradient
              colors={[themeColors.LIGHTGREEN, themeColors.YELLOW]}>
              <Pressable
                style={{
                  width: 55,
                  height: 55,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <AntDesign name="heart" color="white" size={24} />
              </Pressable>
            </LinearGradient>
          </Pressable>
          <Pressable
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
              marginHorizontal: 10,
              marginVertical: 8,
              backgroundColor: '#202020',
            }}>
            <Pressable
              style={{
                width: 55,
                height: 55,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={{uri: 'https://picsum.photos/201'}}
                width={55}
                height={55}
              />
            </Pressable>
          </Pressable>
          <Pressable
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
              marginHorizontal: 10,
              marginVertical: 8,
              backgroundColor: '#202020',
            }}>
            <Pressable
              style={{
                width: 55,
                height: 55,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={{uri: 'https://picsum.photos/200'}}
                width={55}
                height={55}
              />
            </Pressable>
          </Pressable>
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
  leftSide: {flexDirection: 'row', alignItems: 'center', gap: 5},
  headerButtons: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: 5,
    marginHorizontal: 15,
  },
  headerButton: {
    borderWidth: 1,
    backgroundColor: themeColors.BROWN,
    opacity: 0.7,
    padding: 10,
    borderRadius: 15,
    borderColor: themeColors.WHITE,
  },
  headerButtonText: {
    color: themeColors.WHITE,
    fontSize: 15,
    fontWeight: 'bold',
  },
});
