import { View, Text, StyleSheet, Modal, TouchableOpacity, TextInput, FlatList } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { TypeList } from '../Constant/Options'; // Ensure this is correctly imported

export default function AddMedicationForm() {
  const [formdata, setFormData] = useState({});
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(""); // Add missing state
  const options = ['Morning', 'Afternoon', 'Evening', 'Night'];

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setFormData((prev) => ({ ...prev, time: option })); // Save selected time to form data
    setModalVisible(false); // Close the modal
  };

  const onHandleData = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    console.log(formdata);
  };

  return (
    <View style={{ padding: 25 }}>
      <Text>Add Medication Form</Text>
      {/* Medicine Name Input */}
      <TouchableOpacity style={styles.inputGroups}>
        <Ionicons style={styles.icon} name="medkit-outline" size={24} color="blue" />
        <TextInput
          style={styles.textinput}
          placeholder="Medicine name"
          onChangeText={(value) => onHandleData('name', value)}
        />
      </TouchableOpacity>
      {/* Medication Type List */}
      <FlatList
        data={TypeList}
        horizontal
        style={{ marginTop: 5 }}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.name} // Ensure a unique key extractor
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => onHandleData('type', item.name)} // Ensure item.name is used
            style={[
              styles.inputGroups,
              { marginRight: 10, backgroundColor: item.name === formdata.type ? "teal" : "white" },
            ]}
          >
            <Text style={{ color: item.name === formdata.type ? "white" : "black" }}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
      {/* Dose Input */}
      <TouchableOpacity style={styles.inputGroups}>
        <Ionicons style={styles.icon} name="eyedrop-outline" size={24} color="blue" />
        <TextInput
          style={styles.textinput}
          placeholder="Dose Eg 2ml, 10ml"
          onChangeText={(value) => onHandleData('dose', value)}
        />
      </TouchableOpacity>
      {/* Time of Day Selection */}
      <View style={styles.container}>
        <Text style={styles.label}>Select Time of Day:</Text>
        <TouchableOpacity style={styles.dropdown} onPress={() => setModalVisible(true)}>
          <Text style={styles.dropdownText}>
            {selectedOption || 'Select an option...'}
          </Text>
        </TouchableOpacity>
        <Modal
          transparent={true}
          animationType="slide"
          visible={isModalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <FlatList
                data={options}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                  <TouchableOpacity style={styles.option} onPress={() => handleOptionSelect(item)}>
                    <Text style={styles.optionText}>{item}</Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputGroups: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginVertical: 10,
    marginTop: 10,
    backgroundColor: 'white',
  },
  textinput: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
  },
  icon: {
    color: 'blue',
    borderRightWidth: 1,
    paddingRight: 12,
    borderColor: 'gray',
  },
  dropdown: {
    padding: 10,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
  },
  dropdownText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
  },
  option: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  optionText: {
    fontSize: 16,
  },
});
