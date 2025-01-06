import { Tabs, useRouter } from "expo-router";
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { auth} from "../../config/firebase"
import { getAuth,onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { getLocalStorage } from "../../service/Storage";
export default function Layout() 
{
  const router=useRouter();
  useEffect(()=>{
    GetUserDetail();
  })
  const GetUserDetail =async()=>{
    const userInfo= await getLocalStorage('userDetail');
    if(!userInfo){
      router.replace('/login');
    }
  }
  const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    console.log(uid);
    setAuthenticated(true);
    // ...
  } else {
    // User is signed out
    // ...
   
    setAuthenticated(false);
  }
  useEffect(()=>{
if(autheticated===false){
  router?.push('/login')
}
  },[autheticated])
});
  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: "#f8f8f8" },
        headerTintColor: "#333",
        tabBarActiveTintColor: "#2f95dc",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen
        name="index" // Maps to app/(tabs)/index.jsx (Home screen)
        options={{
          tabBarIcon: ({ color, size }) => (
           <Entypo name="home" size={24} color="red"/>
          ),
          tabBarLabel: "Home",
        }}
      />
      <Tabs.Screen
        name="AddNew"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo
              name="add-user"
              color={"blue"}
              size={24}
            />
          ),
          tabBarLabel: "Add New",
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="face-man-profile"
              size={24}
              color={"yellow"}
            />
          ),
          tabBarLabel: "Profile",
        }}
      />
    </Tabs>
  );
}
