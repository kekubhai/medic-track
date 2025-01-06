import { View, Text,Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getLocalStorage } from '../service/Storage'
import AntDesign from '@expo/vector-icons/AntDesign';
import Colors from '../Constant/Colors';

const Header = () => {
  const [user,setUser]=useState();
  useEffect(()=>{
    GetUserDetails();
  },[])
  const GetUserDetails=async()=>{
    const userInfo=await getLocalStorage('userDetail')
    console.log(userInfo);
    setUser(userInfo);
 
  }
  return (
    <View style={{
   display:'flex',
  flexDirection:'row',
    justifyContent:'space-between',
    }}>
      <Text
      style={{
        display:'flex',
     padding:3,
        gap:10,
        fontWeight:'bold',
        fontSize:20,
        letterSpacing:3,
      }}>
           <Image  source={require('./../assets/images/smiley.png')}
      style={{
        width:40,
        height:40,
        display:'flex',
      }} /> Hello{user?.displayName}👋🏻
       <Text style={{
        textAlign:'center',
        padding:10,
        margin:10,
       }}>Welcome to Medic-Track</Text></Text>
     
      
   
  <AntDesign style={{
    display:'flex',
    padding:5,
  }} name="setting" size={34} color={Colors.PRIMARY} />
    </View>
  )
}

export default Header