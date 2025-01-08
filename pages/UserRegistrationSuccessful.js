import React from "react";
import { View, Text, Button, StyleSheet,TouchableOpacity } from "react-native";
import SuccessIcon from "../assets/HomePageIcon/registration-successful";

const UserRegistrationSuccessful = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SuccessIcon />
      <Text style={styles.title}>Registration Successful</Text>
      <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("UserServicesPage")}>
      <View style={styles.button}>
          <Text style={styles.buttonText}>Done</Text>
        </View>
      </TouchableOpacity>    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 500,
    color:'#39434C'
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

export default UserRegistrationSuccessful;
