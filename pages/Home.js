
import React from "react";
import { View, Text, StyleSheet,TouchableOpacity} from "react-native";
import ConsultServiceProviderIcon from '../assets/HomePageIcon/consult-service-provider';
import UserClientIcon from '../assets/HomePageIcon/user-client';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose Your Role </Text>

      <TouchableOpacity onPress={() => navigation.navigate("UserRegistration")}>
        <UserClientIcon />
        </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("ServiceProviderRegistration")}>
        <ConsultServiceProviderIcon />
        </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default Home;

