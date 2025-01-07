import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import String from '../Constant/String'
import { useRouter } from 'expo-router'

export default function EmptyState
() {
    const router=useRouter();
    const AddMedication=()=>{
        router.push('/add-medication');
    }
  return (
    <View>
      <Image source={require('./../assets/images/medicine.png')}
       style={{
        width:120,
        height:120,
        alignItems:'center',
        justifyContent:'center',
       }}/>
       <Text 
       style={{
        fontSize:35,
        fontWeight:'bold',
        marginTop:0,
       }}
       >{String.NoMedication}</Text>
       <Text style={{
fontSize:20,
textAlign:'center',
marginTop:10,
       }}> You have 0 medication setup. Kindly setup your medicines</Text>
    <TouchableOpacity style={{
        backgroundColor:'blue',
        padding:10,
        borderRadius:10,
        marginTop:10,
        width:'100%',
        
    }}>
        <Text style={{
            color:'white',
            textAlign:'center',
            

        }} onPress={()=>{
            router.push('/add-new-medication')
        }}>{String.AddNewMedication}</Text>
    </TouchableOpacity>
    
    </View>
  )
}