import { View, Text } from 'react-native'
import React from 'react'

export default function TabLayout() {
  return (
   <Tabs>
    <Tabs.Screen name='index'/>
    <Tabs.Screen name='AddNew'/>
    <Tabs.Screen name='Profile'/>

    
   </Tabs>
  )
}