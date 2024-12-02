import {
  Dimensions,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import themeColors from '../theme/themeColors';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
const {width, height} = Dimensions.get('screen');
const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <LinearGradient
      colors={[themeColors.DARKGREEN, themeColors.LIGHTGREEN]}
      style={{flex: 1}}>
      <SafeAreaView>
        <View style={{height: 80}} />
        <Entypo
          name="spotify"
          color="white"
          size={80}
          style={{textAlign: 'center'}}
        />
        <Text style={styles.loginTitle}>
          Millions of Songs Free on Spotify !
        </Text>
        <View style={{height: 80}} />
        <Pressable
          style={styles.loginButton}
          onPress={() => navigation.navigate('Main')}>
          <Text style={styles.loginText}>Sign In With Spotify !</Text>
        </Pressable>
        <Pressable style={styles.Button}>
          <MaterialCommunityIcons
            name="cellphone-check"
            size={24}
            color={themeColors.WHITE}
          />
          <Text style={styles.buttonText}>Continue with phone number</Text>
        </Pressable>
        <Pressable style={styles.Button}>
          <Entypo name="facebook" color="white" size={24} />
          <Text style={styles.buttonText}>Continue with Facebook</Text>
        </Pressable>
        <Pressable style={styles.Button}>
          <AntDesign name="google" color={themeColors.WHITE} size={24} />
          <Text style={styles.buttonText}>Continue with Google</Text>
        </Pressable>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  loginTitle: {
    color: '#fff',
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 40,
    marginHorizontal: width * 0.05,
  },
  loginButton: {
    backgroundColor: themeColors.YELLOW,
    padding: 10,
    marginHorizontal: 'auto',
    width: width * 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 25,
  },
  loginText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: themeColors.DARKGREEN,
    fontSize: 18,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: themeColors.WHITE,
    fontSize: 20,
    flex: 1,
  },
  Button: {
    borderWidth: 2,
    borderColor: themeColors.YELLOW,
    width: width * 0.8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 25,
    padding: 10,
    marginHorizontal: 'auto',
  },
});
