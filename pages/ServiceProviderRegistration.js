import React from 'react';
import {  View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'; // Expo Image Picker
import ProfessionDoctorIcon from '../assets/HomePageIcon/profession-doctor';
const ServiceProviderRegistration=({navigation})=> {
    
  return (
    <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Select Your Profession</Text>
        <Text style={styles.description}>Please select what service you</Text>
        <Text style={styles.description}>will be providing as whom</Text>
        <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate("DoctorRegistration")}>
        <ProfessionDoctorIcon /> 
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
    marginBottom:20,
  },
  description:{
    alignItems:'center',
    fontSize:16,
    fontWeight:500,
    color:'#7C92A6',
  },
  iconContainer:{
    marginTop:40,
  }
  
  
  
  
 
});

export default ServiceProviderRegistration;
