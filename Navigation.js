import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './Screens/Home'
import NewPost from './Screens/NewPost'
const Stack = createStackNavigator()
const screenOptions = {
  headerShown: false,
};
const SignedInStack = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="NewPost" component={NewPost} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default SignedInStack;