import { View} from 'react-native'
import React from 'react'
import AddNewPost from '../Components/NewPost/AddNewPost'

export default function NewPost({navigation}) {
  return (
    <View style={{backgroundColor:'black', flex:1}}>
      <AddNewPost navigation={navigation}/>
    </View>
  )
}