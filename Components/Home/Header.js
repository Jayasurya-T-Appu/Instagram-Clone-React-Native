import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import React from 'react'

export default function Header({navigation}) {
  return (
    <View style={styles.container} >
        <View style={{flexDirection:'row', alignItems:'center'}}>
        <Image source={require('../../assets/instagram.png')} style={styles.logo}/>
        <View style={{marginTop:5}}>
        <AntDesign name='down' size={13} color='white'/>

        </View>
        </View>
      <View style={styles.iconContainer}> 
      <TouchableOpacity onPress={() => navigation.push('NewPost')}>
            <AntDesign name='plussquareo' size={20} color="white" style={{marginRight:15}}/>
        </TouchableOpacity>
  
        <TouchableOpacity >
            <AntDesign name='message1' size={20} color="white" style={{marginRight:15}}/>
            <View style={styles.badge}>
                <Text style={{color:'white', fontSize:10, fontWeight:'700', padding:1}}>11</Text>   
            </View>   
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        padding:5,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    logo:{
        width: 100,
        height:50,
        resizeMode: 'contain'
    },
    icon:{
        width: 30,
        height:30,
        resizeMode: 'cover'
    },
    iconContainer:{
        flexDirection:'row',
        alignItems:'center'
    },
    badge:{
        position:'absolute',
        backgroundColor:'red', 
        padding:1, 
        borderRadius:30,
        top:-5,
        right:10,
        justifyContent:'center',
        alignItems:'center'
    }
})


