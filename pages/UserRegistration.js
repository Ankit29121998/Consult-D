import React, { useState } from 'react';
import {  View, TextInput, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';  // Expo Image Picker

const UserRegistration=({navigation})=> {
  const [imageUri, setImageUri] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');


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
  
 
  return (
    <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Client Registration Process</Text>
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
            value={firstName}
            onChangeText={setFirstName}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Last Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Last name"
            value={lastName}
            onChangeText={setLastName}
          />
        </View>
      </View>
      <View style={styles.inputRow}>
      <View style={styles.inputContainer}>
          <Text style={styles.label}>Add Languages </Text>
          <TextInput
            style={styles.input}
            placeholder="Add Languages"
            value={firstName}
            onChangeText={setFirstName}
          />
        </View>
          </View>


    <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("UserRegistrationSuccessful")}>
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
});

export default UserRegistration;
