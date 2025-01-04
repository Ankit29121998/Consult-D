import React, { useState } from 'react';
import {  View, TextInput, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';  // Expo Image Picker

const UserRegistration=({navigation})=> {
  const [imageUri, setImageUri] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });


  // Handle Image Picker
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImageUri(result.uri);
    }
  };
  
  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Doctor Registration Process</Text>
        <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.image} />
        ) : (
          <Text style={styles.imageText}>Pick an image</Text>
        )}
      </TouchableOpacity>
      <Text style={styles.imageLabel}>Upload Profile Photo</Text>
      

      <View style={styles.inputRow}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>First Name</Text>
          <TextInput
            style={styles.input}
            placeholder="First name"
            value={formData.firstName}
            onChangeText={(value) => handleInputChange('firstName', value)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Last Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Last name"
            value={formData.lastName}
            onChangeText={(value) => handleInputChange('lastName', value)}
          />
        </View>
      </View>
      <View style={styles.radioGroup}>
        <Text style={styles.label}>Gender</Text>
        <View style={styles.radioOptionsField}>
        <View style={styles.radioOption}>
          <TouchableOpacity
            style={[
              styles.radioButton,
              formData.gender === 'Male' && styles.radioButtonSelected,
            ]}
            onPress={() => handleInputChange('gender', 'Male')}
          />
          <Text onPress={() => handleInputChange('gender', 'Male')} style={styles.radioLabel}>Male</Text>
        </View>
        <View style={styles.radioOption}>
          <TouchableOpacity
            style={[
              styles.radioButton,
              formData.gender === 'Female' && styles.radioButtonSelected,
            ]}
            onPress={() => handleInputChange('gender', 'Female')}
          />
          <Text  onPress={() => handleInputChange('gender', 'Female')} style={styles.radioLabel}>Female</Text>
        </View>
        <View style={styles.radioOption}>
          <TouchableOpacity
            style={[
              styles.radioButton,
              formData.gender === 'Other' && styles.radioButtonSelected,
            ]}
            onPress={() => handleInputChange('gender', 'Other')}
          />
          <Text style={styles.radioLabel}  onPress={() => handleInputChange('gender', 'Other')} >Other</Text>
        </View>
        </View>
      </View>
      <View style={styles.inputRow}>
      <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={formData.lastName}
            onChangeText={(value) => handleInputChange('email', value)}
          />
        </View>
          </View>


    <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("RegistrationUnderReview")}>
      <View style={styles.button}>
          <Text style={styles.buttonText}>Next</Text>
        </View>
    </TouchableOpacity>  
        
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor:'white',
    color:'#39434C'
  },
  header:{
    alignItems:'center',
    fontSize:22,
    fontWeight:400,
  },
  
  inputRow: {
    flexDirection: 'row',
    justifyContent:'space-evenly',
    marginBottom: 15,
  },
  inputContainer: {
    flex: 1,
    marginRight: 10,
  },
  input: {
    height: 45,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 10,
    borderRadius:5,
  },
  label:{
    fontSize:18,
    color:'#39434C',
    fontWeight:500,
  },
  imageLabel:{
    fontSize:18,
    color:'#2C85C7',
    fontWeight:500,
    marginBottom:20,
  },
  imagePicker: {
    height: 100,
    width: 100,
    borderRadius:100,
    backgroundColor: '#EBEFF5',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,
    borderColor: '#EBEFF5',
    marginBottom: 5,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
  },
  imageText: {
    color: 'gray',
  },
  languageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  language: {
    fontSize: 16,
    padding: 10,
    backgroundColor: '#e0e0e0',
    marginRight: 10,
    marginBottom: 10,
  },
  selectedLanguage: {
    fontSize: 16,
    padding: 10,
    backgroundColor: '#4CAF50',
    color: 'white',
    marginRight: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 10,  // Fixed at the bottom with some margin
    width: '100%',// Space between content and button
  },
  button: {
    backgroundColor: '#2C85C7',  // Green background color
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 10,  // Apply border-radius here
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 500,
  },
  radioGroup: {
    width: '100%',
    marginBottom: 20,
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 25,
  },
  radioButton: {
    height: 24,
    width: 24,
    borderRadius: '50%',
    borderWidth: 1,
    borderColor: '#C2C8CC',
    marginRight: 5,
  },
  radioButtonSelected: {
    backgroundColor: '#2C85C7',
  },
  radioLabel: {
    fontSize: 16,
    color: '#39434C',
  },
  radioOptionsField:{
    display:'flex',
    flexDirection:'row',

  }
});

export default UserRegistration;
