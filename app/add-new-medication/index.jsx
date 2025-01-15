import { View, Text } from 'react-native'
import React from 'react'
import AddMedHeader from '../../components/AddMedHeader'
import AddMedicationForm from '../../components/AddMedicationForm'
import { ScrollView } from 'react-native'

export default function index() {
  return (
    <ScrollView>
    <AddMedHeader/>
    <AddMedicationForm/>
    </ScrollView>
  )
}