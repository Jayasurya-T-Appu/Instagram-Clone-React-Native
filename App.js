/* import { StatusBar } from 'expo-status-bar'; */
import { StyleSheet, Text, View } from 'react-native';
import Home from './Screens/Home';
import NewPost from './Screens/NewPost';
import {  Platform, StatusBar } from "react-native";
import SignedInStack from './Navigation';
export default function App() {
  return (
    <View style={styles.container}>
      <SignedInStack/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    paddingTop:Platform.OS === 'android' ? StatusBar.currentHeight : 0 
  },
});
