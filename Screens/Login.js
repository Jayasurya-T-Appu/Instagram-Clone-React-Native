import { View, StyleSheet, Image, TextInput } from 'react-native'
import React from 'react'
import LoginForm from '../Components/Login/LoginForm'

const Login = ({navigation}) => {

  const logoURI = 'https://www.91-cdn.com/hub/wp-content/uploads/2019/02/Instagram-Featured.jpg'
  return (
    <View style={{padding:10,flex:1, backgroundColor:'white',paddingTop:100}} >
        <View style={styles.logoContainer}>
        <Image style={styles.logo} resizeMode={'contain'} source={{uri: logoURI}}/>
        </View>
       <LoginForm navigation={navigation}/> 
    </View>
  )
}

const styles = StyleSheet.create({
  logoContainer:{
    alignItems:'center',
    width:'100%',
  
},
logo: {  
    width: "100%",
    height: 100,
}  
})

export default Login