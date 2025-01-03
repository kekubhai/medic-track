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
      <Text style={{ fontSize: 30, color: 'white',textAlign:'center',padding:10 }}>Welcome to Medic Track</Text>
      <Text style={{ color: 'white', fontSize: 20,textAlign:'center'}}>Please sign in to continue</Text>
      
      <TextInput 
        placeholder="Full Name" 
        style={{ 
          height: 40, 
          margin: 20, 
          borderColor: 'white', 
          borderWidth: 1, 
          marginBottom: 10, 
          paddingLeft: 20, 
          borderRadius: 2, 
          backgroundColor: 'white',
          color:'black'
        }} 
      />
      <TextInput 
        placeholder="Email" 
        style={{ 
          height: 40, 
          marginTop: 2, 
          borderColor: 'gray', 
          borderWidth: 1, 
          marginBottom: 10, 
          paddingLeft: 20, 
          borderRadius: 2, 
          backgroundColor: 'white', 
          margin: 20
        }} 
      />
      <TextInput 
        placeholder="Password" 
        secureTextEntry={true} 
        style={{ 
          height: 40, 
          marginTop: 2, 
          borderColor: 'gray', 
          borderWidth: 1, 
          marginBottom: 10, 
          paddingLeft: 20, 
          borderRadius: 2, 
          backgroundColor: 'white', 
          margin: 20
        }} 
      />
     
      <TouchableOpacity 
        onPress={() => router.push('login/signUp')}
        style={{
          borderRadius: 2,
          backgroundColor: 'white',
          textAlign: 'center',
          color: 'blue',
          borderColor: 'blue',
          marginLeft: 35,
          marginTop: 20,
          padding: 15,
          borderWidth: 1,
          marginRight: 35,
        }}
      >
        <Text>Create Account</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      onPress={()=>router.push('login/signIn')}
        style={{
          borderRadius: 2,
          backgroundColor: 'gray',
          textAlign: 'center',
          color: 'white',
          borderColor: 'black',
          marginLeft: 35,
          marginRight: 35,
          padding: 15,
          fontFamily: 'Arial',
          borderWidth: 1,
          marginTop:20
        }}
        
      >
        <Text style={{
          color:'white'
        }}>Already Have an account? Sign In here </Text>
      </TouchableOpacity>
    </View>
  )
}

export default signin