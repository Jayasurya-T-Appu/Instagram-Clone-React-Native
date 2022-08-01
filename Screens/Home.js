import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import Header from '../Components/Home/Header'
import Stories from '../Components/Home/Stories'
import Posts from '../Components/Home/Posts'
import {POSTS} from '../Data/POSTS'
import BottomTab from '../Components/Home/BottomTab'

export default function Home() {
  return (
    <View style={{flex:1}}>
      <Header/>
      <Stories/>
      <ScrollView >
       {
        POSTS.map((post, index) => {
            return <Posts key={index} post={post}/>
        })
       }
      </ScrollView>
       <BottomTab/>
    </View>
  )
}
