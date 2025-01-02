import { View, Text,TextInput } from 'react-native'
import React from 'react'
import { Button } from 'react-native'

const signin = () => {
  return (
    <View>
          
          <Text style={{
            fontSize:30,
            color:'gray',
            
          }}>Welcome to Medic Track</Text><Text style={{
            color:'gray',
            fontSize:20,
          }}>Please sign in to continue</Text>
          <TextInput placeholder="Email" style=
          {{ height: 40,margin:20, borderColor: 'gray', borderWidth: 1, marginBottom: 10,paddingLeft:20,borderRadius:20 ,backgroundColor:'white'}} />
          <TextInput placeholder="Password" secureTextEntry={true} style={{ height: 40,margin:20, borderColor: 'gray', borderWidth: 1, marginBottom: 10,paddingLeft:20,borderRadius:20 ,backgroundColor:'white'}} />
          <Text style={{
            borderRadius:20,
            backgroundColor:'gray',
            textAlign:'center',
            color:'white',
            borderColor:'blue',
            margin:35,
            padding:15,
            borderRadius:10,
          }}  onPress={() => { } } >Login</Text>
    </View>
  )
}

export default signin