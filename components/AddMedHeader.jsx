import { Text, View ,Image, TouchableOpacity} from 'react-native'
import React, { Component } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'

export default function AddMedHeader() {
    const router=useRouter();

  
    return (
      <View>
        <Image  
        style={{
            height:200,
            width:'100%',        }} source={require('./../assets/images/consult.png')}/>
     <TouchableOpacity onPress={()=>router.back()} style={{
        position:'absolute',
        padding:25,
     }}>
        <Ionicons name='arrow-back' size={20} color='black'/>
     </TouchableOpacity>

      </View>
    )
  }
