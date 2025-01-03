import { View, Text,TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const signin = () => {
  const router=useRouter();
  return (
    <View style={{
        backgroundColor:'black',
        width:'100%',
        height:'100%',
    }}>
          
          <Text style={{
            fontSize:30,
            color:'gray',
            
          }}>Welcome to Medic Track</Text><Text style={{
            color:'gray',
            fontSize:20,
          }}>Please sign in to continue</Text>
          <TextInput placeholder="Email" style=
          {{ height: 40,margin:20, borderColor: 'gray', borderWidth: 1, marginBottom: 10,paddingLeft:20,borderRadius:2,backgroundColor:'white'}} />
          <TextInput placeholder="Password" secureTextEntry={true} style={{ height: 40,marginTop:2, borderColor: 'gray', borderWidth: 1, marginBottom: 10,paddingLeft:20,borderRadius:2 ,backgroundColor:'white',margin:20}} />
          <Text style={{
            borderRadius:20,
            marginTop:20,
            backgroundColor:'gray',
            textAlign:'center',
            color:'white',
            borderColor:'black',
            marginLeft:35,
            marginRight:35,
            padding:15,
            fontFamily:'Arial',
            borderRadius:10,
            borderWidth:1
          }}  onPress={() => { } } >Login</Text>
          <TouchableOpacity onPress={()=>router.push('login/signUp')}>
        
            <Text style={{
              borderRadius:20,
              backgroundColor:'white',
              textAlign:'center',
              color:'blue',
              borderColor:'blue',
              marginLeft:35,
              marginTop:20,
              padding:15,
            borderRadius:10,
            borderWidth:1,
            marginRight:35,
          }}>Create Account</Text>
          </TouchableOpacity>
    </View>
  )
}

export default signin