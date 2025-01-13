import React from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import CallIcon from '../../assets/Call';
import ChatIcon from '../../assets/Chat';

const AppointmentBookModal = ({ modalVisible = false, setModalVisible = () => {} }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)} // Handle back press on Android
    >
      <TouchableOpacity
        style={styles.modalOverlay}
        activeOpacity={1}
        onPressOut={() => setModalVisible(false)} // Close modal on outside press
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <View style={styles.iconContainer}>
              <CallIcon />
              <Text style={styles.buttonText}>Call</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <View style={styles.iconContainer}>
              <ChatIcon />
              <Text style={styles.buttonText}>Chat</Text>
            </View>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    gap: 16,
    width: '80%',
    padding: 20,
    backgroundColor: 'white', // White background
    borderRadius: 10, // Rounded corners
  },
  iconContainer: {
    alignItems: 'center',
  },
});

export default AppointmentBookModal;
