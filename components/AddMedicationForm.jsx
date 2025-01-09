import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { TextInput } from 'react-native'
import { FlatList } from 'react-native'
import { TypeList } from '../Constant/Options'
export default function AddMedicationForm  () {
  return (
    <View  style={{
        padding:25,
    }}>
      <Text>AddMedicationForm</Text>
      <View style={styles.inputGroups}>
        <Ionicons style={styles.icon} name='medkit-outline' size={24 } color={'black'}/>
        <TextInput style={styles.textinput} placeholder='Medicine name'/>
      </View>
      <FlatList data={TypeList}
      renderItem={({item,index})=>{
        <View>
            <Text>{item.name}</Text>
        </View>
      }}></FlatList>
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
    }
})