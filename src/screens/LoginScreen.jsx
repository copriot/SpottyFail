import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Entypo from 'react-native-vector-icons/Entypo';
const LoginScreen = () => {
  return (
    <LinearGradient colors={['#186F65', '#B5CB99']} style={{flex: 1}}>
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
  },
});
