import { View, Text } from 'react-native'
import React from 'react'
import AddNewPost from '../Components/NewPost/AddNewPost'

export default function NewPost() {
  return (
    <View style={{backgroundColor:'black', flex:1}}>
      <AddNewPost/>
    </View>
  )
}