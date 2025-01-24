import React, { useState } from 'react';
import { 
  View, 
  TextInput, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView
} from 'react-native';
import CameraIcon from '../assets/Camera';

const UserRegistration = ({ navigation }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value, // Dynamically update the relevant field
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <TouchableOpacity style={styles.uploadButton}>
          <CameraIcon />
        </TouchableOpacity>
        <Text style={styles.uploadText}>Upload Profile Photo</Text>
      </View>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput style={styles.input} placeholder="Enter your full name"  placeholderTextColor="#6E8294"
        
        value={formData.name || ''}
        onChangeText={(value) => handleInputChange('name', value)}
        />

        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} placeholder="Enter your email" keyboardType="email-address"  placeholderTextColor="#6E8294"
         value={formData.email || ''}
         onChangeText={(value) => handleInputChange('email', value)}
         />

        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} placeholder="Enter your password"  placeholderTextColor="#6E8294" secureTextEntry 
          value={formData.password|| ''}
          onChangeText={(value) => handleInputChange('password', value)}/>

        <Text style={styles.label}>Re-type Password</Text>
        <TextInput style={styles.input} placeholder="Re-enter your password" placeholderTextColor="#6E8294" secureTextEntry 
         value={formData.confirmPassword|| ''}
         onChangeText={(value) => handleInputChange('confirmPassword', value)}/>
      </View>

      {/* Submit Button */}
      <TouchableOpacity style={styles.doneButton} onPress={() => navigation.navigate('UserRegistrationSuccessful')}>
        <Text style={styles.doneButtonText}>Done</Text>
      </TouchableOpacity>
    </View>

    </ScrollView>
  );
};
const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  uploadButton: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#C2C8CC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraIcon: {
    width: 40,
    height: 40,
    tintColor: '#888',
  },
  uploadText: {
    marginTop: 10,
    fontSize: 18,
    color: '#2C85C7',
    fontWeight:600,
  },
  inputContainer: {
    marginVertical: 20,
  },
  label: {
    fontSize: 16,
    color: '#7C92A6',
    marginBottom: 4,
  },
  input: {
    height: 40,
    borderWidth: 0,
    borderColor: '#C2C8CC',
    marginBottom: 12,
    borderBottomWidth:1,
  },
  doneButton: {
    backgroundColor: '#007BFF',
    borderRadius: 5,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  doneButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export default UserRegistration;
