import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import React from 'react'

export default function Header() {
  return (
    <View style={styles.container} >
      <Image source={require('../../assets/instagram.png')} style={styles.logo}/>
      <View style={styles.iconContainer}> 
        <Icon name="plussquareo"  />
        <Icon name="hearto"  />
        <TouchableOpacity >
            <AntDesign name='message1' size={20} color="white" style={{marginRight:15}}/>
            <View style={styles.badge}>
                <Text style={{color:'white', fontSize:10, fontWeight:'700', }}>11</Text>   
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

const Icon = ({name}) => {
    return (
        <TouchableOpacity>
            <AntDesign name={name} size={20} color="white" style={{marginRight:15}}/>
        </TouchableOpacity>
    )
}

