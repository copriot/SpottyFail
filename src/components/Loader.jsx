import {StyleSheet, Text, View} from 'react-native';
import themeColors from '../theme/themeColors';
import {BarIndicator} from 'react-native-indicators';
const Loader = () => {
  return (
    <View key={'loader'} style={styles.container}>
      <BarIndicator color={themeColors.WHITE} />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
