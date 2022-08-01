import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { USERS } from '../../Data/USERS'
import { useState } from 'react'
export default function BottomTab() {
    const [active, setActive] = useState('home')
    const Icons = [
        {
            id:1,
            name:'home',
        },
        {
            id:2,
            name:'search1',
        },
        {
            id:3,
            name:'videocamera',
        },
        {
            id:4,
            name:'hearto',
        }
    ]

  return (
    <View style={styles.container}>
      {
            Icons.map((icon) => {
                return(
                    <Icon key={icon.id} icon={icon} active={active} setActive={setActive}/>
                )
            })
      }
      <View>
        <Image source={{uri:USERS[0].image}} style={{height:30, width:30, borderRadius:50, borderWidth:1,
       borderColor:'white',}}/>
      </View>
    </View>
  )
}



const Icon = ({icon,active, setActive}) => {
    return (
        <TouchableOpacity onPress={() => setActive(icon.name)}>
            <AntDesign name={icon.name} size={25} style={active == icon.name ? styles.active : styles.inActive}  />
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container:{
       flexDirection:'row',
       paddingHorizontal:10,
       justifyContent:'space-evenly',
       paddingVertical:10,
    },

    active:{
        color:'red'
    },
    inActive:{
        color:'white'
    }
})