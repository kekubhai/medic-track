import { View, Text ,StyleSheet, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { TextInput } from 'react-native'
import { FlatList } from 'react-native'
import { TypeList } from '../Constant/Options'
export default function AddMedicationForm  () {
  const [formdata,setFormData]=useState();
  const onHandleData=(field,value)=>{
    setFormData(prev=>({
      ...prev,
      [field]:value
    }))
  }
  return (
    <View  style={{
        padding:25,
    }}>
      <Text>AddMedicationForm</Text>
      <TouchableOpacity style={styles.inputGroups}>
        <Ionicons style={styles.icon} name='medkit-outline' size={24 } color={'black'}/>
        <TextInput onChange={onHandleData('name',value)} style={styles.textinput} placeholder='Medicine name'/>
      </TouchableOpacity>
     <FlatList data={TypeList}
     horizontal
     styles={{
      marginTop:15,
     }}
     showsHorizontalScrollIndicator={false}
     renderItem={({item,index})=>(
      <View style={[styles.inputGroups,{marginRight:10}]}>
        <Text style={styles.typeList}>{item.name}</Text>
      </View>
     )}>

     </FlatList>
    </View>
  )
}

const styles=StyleSheet.create({
    header:{
        fontsize:20,
        fontWeight:'bold',

    },
    inputGroups:{
        flexDirection:'row',
        alignItems:'center',
        padding:10,
        borderBottomWidth:1,
        borderBottomColor:'gray',
        marginVertical:10,
        marginTop:7,
    },
    textinput:{
        flex:1,
        fontSize:16,
        fontWeight:'bold'
    },
    icon:{
        color:'black',
        borderRightWidth:1,
        paddingRight:12,
        borderColor:'gray'
    },typeList:{
    fontSize:16,

    }
})