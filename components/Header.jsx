import { View, Text,Image } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View>
      <Text>Header</Text>
      <Image  source={require('./../assets/images/smiley.png')}
      style={{
        width:40,
        height:40,
        display:'flex',
      }} />
  
    </View>
  )
}

export default Header