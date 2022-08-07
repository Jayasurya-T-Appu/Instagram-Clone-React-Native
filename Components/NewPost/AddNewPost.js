import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from "react-native-vector-icons/AntDesign";
import FormikPostUploader from './FormikPostUploader';

export default function AddNewPost({navigation}) {
  return (
    <View >
      <Header navigation={navigation}/>
      <FormikPostUploader navigation={navigation}/>
    </View>
  )
}


/////////////////COMPONENTS////////////////

const Header = ({navigation}) => (
  <View style={styles.HeaderContainer}>
  <TouchableOpacity onPress={() => navigation.goBack()}>
    <AntDesign name="left" size={24} color="#fff" />
  </TouchableOpacity>
    <Text style={styles.text}>New Post</Text>
    <Text></Text>
</View>
)




//////////////STYLES////////////////////////////



const styles = StyleSheet.create({
    HeaderContainer: {
        padding:10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text:{
        color:'#fff',
        fontSize:20,
    }
})