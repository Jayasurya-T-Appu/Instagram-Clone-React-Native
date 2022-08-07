import { StyleSheet, View } from 'react-native';
import {  Platform, StatusBar } from "react-native";
import AuthNavigation from './AuthNavigation';

import { AsyncStorage } from 'react-native';
import { useEffect } from 'react';

export default function App() {

  return (
    <View style={styles.container}>
      <AuthNavigation/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:Platform.OS === 'android' ? StatusBar.currentHeight : 0 
  },
});

