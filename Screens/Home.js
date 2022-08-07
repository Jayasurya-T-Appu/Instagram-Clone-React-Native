import { View, ScrollView } from "react-native";
import React from "react";
import Header from "../Components/Home/Header";
import Stories from "../Components/Home/Stories";
import Posts from "../Components/Home/Posts";
import { POSTS } from "../Data/POSTS";
import BottomTab from "../Components/Home/BottomTab";

export default function Home({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <Header navigation={navigation} />
      <ScrollView>
        <Stories />

        {POSTS.map((post, index) => {
          return <Posts key={index} post={post} />;
        })}
      </ScrollView>
      <BottomTab navigation={navigation} />
    </View>
  );
}
