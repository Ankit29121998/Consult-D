import React from "react";
import { View, Text, Button, StyleSheet,TouchableOpacity } from "react-native";
import RegistrationUnderReviewIcon from "../assets/HomePageIcon/registration-under-review";

const RegistrationUnderReview = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <RegistrationUnderReviewIcon />
      <Text style={styles.title}>Registration Under Review</Text>
      <Text style={styles.description}>Your document is under review</Text>  
      <Text style={styles.description}>please wait until we verify it</Text> 
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
    color:'#39434C',
    marginBottom:10,
  },
  description:{
    alignItems:'center',
    fontSize:16,
    fontWeight:500,
    color:'#7C92A6',
  },
  
});

export default RegistrationUnderReview;
