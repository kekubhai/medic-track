import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native-web'

const index = () => {
  return (
    <View>
   <View style={{
    display:'flex',
    alignItems:'center',
    marginTop:40,
   }}>
    <Image source={require('./../../assets/images/login.png')}
    style={{
        width:210,
        height:450,
        borderRadius:20,

    }} />
   </View>
   <View style={{
    padding:25,
    backgroundColor:'black',
   
   }}>
    <Text style={{
         fontColor:'white'
    }}> Stay on Track,Stay Healthy ! </Text>
   </View>
    </View>
  )
}

export default index