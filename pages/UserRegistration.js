import React, { useState } from 'react';
import { 
  View, 
  TextInput, 
  Text, 
  StyleSheet, 
  Image, 
  TouchableOpacity, 
  ScrollView, 
  KeyboardAvoidingView, 
  Platform, 
  Keyboard 
} from 'react-native';
import * as ImagePicker from 'expo-image-picker'; // Expo Image Picker

const UserRegistration = ({ navigation }) => {
  const [imageUri, setImageUri] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    languages: '',
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
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // Adjust behavior based on platform
      style={styles.container}
    >
     

      <ScrollView contentContainerStyle={styles.scrollContainer}>
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
        
        <View style={styles.inputRow}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Add Languages</Text>
            <TextInput
              style={styles.input}
              placeholder="Add Languages"
              value={formData.languages}
              onChangeText={(value) => handleInputChange('languages', value)}
            />
          </View>
        </View>
      </ScrollView>

      {/* Next Button */}
      <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('UserRegistrationSuccessful')}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Next</Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    color: '#39434C',
  },
  headerContainer: {
    backgroundColor: '#2C85C7',
    width: '100%',
    paddingTop: Platform.OS === 'ios' ? 50 : 20, // Adjust for iOS and Android status bar height
    paddingBottom: 20,
    alignItems: 'center',
  },
  header: {
    fontSize: 22,
    fontWeight: '500',
    color: 'white',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingBottom: 80, // Add padding to avoid overlap with the button
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
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
    borderRadius: 5,
  },
  label: {
    fontSize: 18,
    color: '#39434C',
    fontWeight: '500',
  },
  imageLabel: {
    fontSize: 18,
    color: '#2C85C7',
    fontWeight: '500',
    marginBottom: 20,
  },
  imagePicker: {
    height: 100,
    width: 100,
    borderRadius: 100,
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
  buttonContainer: {
    position: 'absolute',
    bottom: 20, // Fixed at the bottom with some margin
    left: 20,
    right: 20,
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
    fontWeight: '500',
  },
});

export default UserRegistration;
