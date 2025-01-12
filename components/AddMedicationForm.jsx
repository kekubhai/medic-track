import { View, Text, StyleSheet, Modal, TouchableOpacity, TextInput, FlatList } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { TypeList } from '../Constant/Options';

export default function AddMedicationForm() {
  const [formdata, setFormData] = useState({});
  const [isModalVisible, setModalVisible] = useState(false);
  const [dateModalVisible, setDateModalVisible] = useState(false);
  const [isStartDate, setIsStartDate] = useState(true); // To distinguish between start and end date
  const [selectedOption, setSelectedOption] = useState('');
  const options = ['Morning', 'Afternoon', 'Evening', 'Night'];

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setFormData((prev) => ({ ...prev, time: option }));
    setModalVisible(false);
  };

  const onHandleData = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleDateSelect = (date) => {
    if (isStartDate) {
      onHandleData('startDate', date);
      onHandleData('endDate', null); // Clear end date when start date changes
    } else {
      onHandleData('endDate', date);
    }
    setDateModalVisible(false);
  };

  const renderDateModal = () => (
    <Modal
      transparent={true}
      animationType="slide"
      visible={dateModalVisible}
      onRequestClose={() => setDateModalVisible(false)}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.label}>Select a Date:</Text>
          <FlatList
            data={Array.from({ length: 30 }, (_, i) => new Date(Date.now() + i * 86400000))}
            keyExtractor={(item) => item.toISOString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.option}
                onPress={() => handleDateSelect(item)}
              >
                <Text style={styles.optionText}>{item.toDateString()}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </Modal>
  );

  return (
    <View style={{ padding: 25 }}>
      <Text style={styles.header}>Add Medication Form</Text>

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
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => onHandleData('type', item.name)}
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

      {/* Time of Day */}
      <View>
        <Text style={styles.label}>Select Time of Day:</Text>
        <TouchableOpacity style={styles.dropdown} onPress={() => setModalVisible(true)}>
          <Text style={styles.dropdownText}>
            {selectedOption || 'Select an option...'}
          </Text>
        </TouchableOpacity>
        {isModalVisible && renderDateModal()}
      </View>

      {/* Start and End Date Inputs */}
      <View>
        <Text style={styles.label}>Start Date:</Text>
        <TouchableOpacity
          style={styles.inputGroups}
          onPress={() => {
            setIsStartDate(true);
            setDateModalVisible(true);
          }}
        >
          <Ionicons style={styles.icon} name="calendar-outline" size={24} color="blue" />
          <Text style={styles.textinput}>
            {formdata.startDate ? formdata.startDate.toDateString() : 'Select Start Date'}
          </Text>
        </TouchableOpacity>

        <Text style={styles.label}>End Date:</Text>
        <TouchableOpacity
          style={[styles.inputGroups, !formdata.startDate && { opacity: 0.5 }]}
          onPress={() => {
            if (formdata.startDate) {
              setIsStartDate(false);
              setDateModalVisible(true);
            }
          }}
        >
          <Ionicons style={styles.icon} name="calendar-outline" size={24} color="blue" />
          <Text style={styles.textinput}>
            {formdata.endDate ? formdata.endDate.toDateString() : 'Select End Date'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Render Date Modal */}
      {renderDateModal()}
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
