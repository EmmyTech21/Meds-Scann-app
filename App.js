import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import StackNavigator from './Navigation/StackNavigator';

export default function App() {
  return (
   <SafeAreaView style={styles.container}>
   <StackNavigator />
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
});
