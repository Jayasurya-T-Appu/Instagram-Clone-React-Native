import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './Screens/Home'
import NewPost from './Screens/NewPost'
import Login from './Screens/Login'
import SignUp from './Screens/SignUp'
const Stack = createStackNavigator()
const screenOptions = {
  headerShown: false,
};
export const SignedInStack = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="NewPost" component={NewPost} />
    </Stack.Navigator>
  </NavigationContainer>
);


export const SignedOutStack = () => (
  <NavigationContainer>
  <Stack.Navigator initialRouteName="Login" screenOptions={screenOptions}>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="SignUp" component={SignUp} />
  </Stack.Navigator>
</NavigationContainer>
)