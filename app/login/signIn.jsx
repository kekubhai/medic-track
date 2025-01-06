import { View, Text,TextInput, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { useState } from 'react';
import { useRouter } from 'expo-router'
import { getAuth } from 'firebase/auth';
import {auth} from '../../config/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { setLocakStorage } from '../../service/Storage';

const signin = () => {
  const router=useRouter();
  const [email,setEmail]=useState('');
  const[password,setPassowrd]=useState('');
  const auth = getAuth();
  const onSignInClick=()=>{
    if(!email || !password){
      Alert.alert('Please enter email and password');
      return;
    }
signInWithEmailAndPassword(auth, email, password)

  .then(async(userCredential) => {
    
    const user = userCredential.user;
    await setLocakStorage('userDetail',user);

    router.replace('(tabs)');
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    if(errorCode==='auth/invalid-credential'){
      Alert.alert('Invalid Credential');
    }
  });

  }
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
          <TextInput placeholder="Email"
          onChangeText={(value)=>setEmail(value)} style=
          {{ height: 40,margin:20, borderColor: 'gray', borderWidth: 1, marginBottom: 10,paddingLeft:20,borderRadius:2,backgroundColor:'white'}} />
          <TextInput placeholder="Password" secureTextEntry={true} style={{ height: 40,marginTop:2, borderColor: 'gray', borderWidth: 1, marginBottom: 10,paddingLeft:20,borderRadius:2 ,backgroundColor:'white',margin:20}}
          onChangeText={(value)=>setPassowrd(value)} />
          <TouchableOpacity style={{
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
          }}  onPress={onSignInClick}>
            <Text>Login</Text></TouchableOpacity>
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