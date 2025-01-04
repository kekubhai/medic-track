import { View, Text,TextInput, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import { useRouter } from 'expo-router'
import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth'
import { auth } from '../../config/firebaseconfig'
import { setLocakStorage } from '../../service/Storage'




export default function signUp  () {
  const router=useRouter();
  const auth=getAuth();
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const[username,setUsername]=useState('');
  const onCreateAccount=()=>{
    if(!email || !password ||! username){
      ToastAndroid.show('Please enter email and password',ToastAndroid.CENTER)
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
  .then(async(userCredential) => {
    
    const user = userCredential.user;
     updateProfile(user,{
      displayName:username
    })

    await  setLocakStorage('userDetail',user);
    router.push('(tabs)')


  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,errorMessage);
    if(errorCode==='auth/email-already-in-use'){
      ToastAndroid.show('Email already in use',ToastAndroid.BOTTOM)
    }
    // ..
  });
  }
  return (
    <View style={{
        backgroundColor:'black',
        width:'100%',
        height:'100%',
    }}>
      <Text style={{ fontSize: 30, color: 'white',textAlign:'center',padding:10 }}>Welcome to Medic Track</Text>
      <Text style={{ color: 'white', fontSize: 20,textAlign:'center'}}>Please sign in to continue</Text>
      <Text>Full Name</Text>
      <TextInput 
      onChangeText={(value)=>setUsername(value)}
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
      <View>

    <Text>Email</Text>
      <TextInput placeholder='Email' style={{
           marginTop: 2, 
           borderColor: 'gray', 
           borderWidth: 1, 
           marginBottom: 10, 
           paddingLeft: 20, 
           borderRadius: 2, 
           backgroundColor: 'white', 
           margin: 20

      }}
      onChangeText={(value)=>setEmail(value)}
      />
      </View>

      <TextInput 
      onChangeText={(value)=>setPassword(value)}
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
      onPress={onCreateAccount}
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