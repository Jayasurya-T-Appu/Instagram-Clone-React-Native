import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import React from "react";
export default function Posts({ post }) {
  return (
    <View style={{ marginBottom:10,marginTop:10 }}>
      <View>
      <PostHeader post={post} />
      <PostImage post={post} />
      </View>
      
      <View>
        <PostFooter/>
        <Likes post={post}/>
        <Caption post={post}/>
        <Comments post={post}/> 
        <ViewComments post={post}/>
      </View>
    </View>
  );
}



//////////////////////////////COMPONENTS//////////////////////////////////////////////

const PostHeader = ({ post }) => {
  return (
    <View style={styles.headerContainer}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image style={styles.profileImg} source={{ uri: post.profileImg }} />
        <Text style={{ color: "white" }}>{post.username}</Text>
      </View>
      <View style={{justifyContent:'center', transform:[{rotate:'90deg'}]}}>
       <Entypo name="dots-three-horizontal" color='white' size={20}/>

      </View>
    </View>
  );
};

const PostImage = ({ post }) => {
  return (
    <View style={{ width: "100%", height: 450 }}>
      <Image
        source={{ uri: post.postImage }}
        style={{ height: "100%", resizeMode: "cover" }}
      />
    </View>
  );
};

const PostFooter = ({ post }) => {
    return (
        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
        <View style={{flexDirection:'row',alignItems:'center', padding:5,marginTop:5}} >
            <TouchableOpacity>
                <AntDesign name='hearto' size={25} color="white" style={{marginHorizontal:10}}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <EvilIcons name='comment' size={35} color="white" style={{marginHorizontal:10}}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Feather name='send' size={25} color="white" style={{marginHorizontal:10}}/>
            </TouchableOpacity>
           
        </View>
        <TouchableOpacity>
            <AntDesign name='down-square-o' size={25} color="white" style={{marginHorizontal:10,padding:5,marginTop:5}}/>
        </TouchableOpacity>
        </View>
    )
}

const Likes = ({post}) => {
   return(
    <Text style={{color:'white',marginLeft:15, marginVertical:5, fontWeight:'600'}}>{post.likes} likes </Text>
   )
}

const Comments = ({post}) => {
    return (
    <View style={{marginLeft:15}}>
        {!!post.comments.length && (
            <Text style={{color:'gray'}}>View {post.comments.length > 1 ? 'all' : '' } {post.comments.length} {post.comments.length > 1 ? 'comments': 'comment'}</Text>
        )}
    </View>
    )
}

const Caption = ({post}) => {
    return(
        <Text  style={{color:'white',marginLeft:15, marginVertical:5, }}>
            <Text style={{fontWeight:'600'}}>{post.username} </Text> {post.caption} 
        </Text>
    )
}

const ViewComments = ({post}) => {
    return (
        <View style={{marginLeft:15, marginTop:5}}>
            {post.comments.map((item,index) => {
               return (
                <View key={index}>
                    <Text style={{color:'lightgray'}}>
                        <Text style={{fontWeight:'600', color:'white'}}>{item.name}   </Text>
                        {item.comment}
                    </Text>
                </View>
               )
            })}
        </View>
    )
}

//////////////////////////////STYLES//////////////////////////////////////////////
const styles = StyleSheet.create({

  headerContainer: {
    width:'100%',
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 5,
    marginBottom: 10,
    position:'absolute',
    zIndex:1,
  },
  profileImg: {
    height: 30,
    width: 30,
    borderRadius: 50,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: "coral",
  },
});
