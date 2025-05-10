import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import * as Location from "expo-location";
import { MaterialIcons } from "@expo/vector-icons";

const LocationSelection = ({ navigation }) => {
  const [address, setAddress] = useState(null); // To store fetched location
  const [errorMsg, setErrorMsg] = useState(null); // To store errors

  // Fetch location when the component mounts
  useEffect(() => {
    fetchLocation();
  }, []);

  const fetchLocation = async () => {
    try {
      // Request permission to access location
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      // Fetch current location
      const loc = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });

      // Reverse geocode to get address
      const addressData = await Location.reverseGeocodeAsync({
        latitude: loc.coords.latitude,
        longitude: loc.coords.longitude,
      });
      console.log(addressData,"Addresss")

      // Set address (city and district)
      setAddress(addressData[0]);
    } catch (error) {
      setErrorMsg(error.message);
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="close" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Enter your city or locality</Text>
      </View>

      {/* Search Input */}
      <View style={styles.searchBar}>
        <MaterialIcons name="search" size={24} color="#A9A9A9" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search your location here"
          placeholderTextColor="#A9A9A9"
        />
      </View>

      {/* Options */}
      <View style={styles.options}>
        <TouchableOpacity onPress={fetchLocation}>
          <Text style={styles.linkText}>Use current location</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.linkText}>
            Search in entire {address?.region || "your area"}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Recent Search */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recent Search</Text>
          <TouchableOpacity>
            <Text style={styles.clearText}>CLEAR</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.listItem}>
          <View>
            <Text style={styles.listTitle}>{address?.city || "City Name"}</Text>
            <Text style={styles.listSubtitle}>
              {address?.region || "Region Name"}
            </Text>
          </View>
          <Text style={styles.listTag}>LOCALITY</Text>
        </TouchableOpacity>
      </View>

      {/* Top Localities */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          Top localities in {address?.city || "your city"}
        </Text>
        {/* Example: Replace with fetched localities */}
        <TouchableOpacity style={styles.listItem}>
          <Text style={styles.listTitle}>Locality 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItem}>
          <Text style={styles.listTitle}>Locality 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItem}>
          <Text style={styles.listTitle}>Locality 3</Text>
        </TouchableOpacity>
      </View>

      {/* Display Error if Exists */}
      {errorMsg && <Text style={styles.errorText}>{errorMsg}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  searchBar: {
    flexDirection: "row",
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  options: {
    marginBottom: 20,
  },
  linkText: {
    color: "#2C85C7",
    fontSize: 16,
    marginBottom: 10,
  },
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  clearText: {
    color: "#2C85C7",
    fontSize: 14,
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  listTitle: {
    fontSize: 16,
  },
  listSubtitle: {
    color: "#A9A9A9",
    fontSize: 14,
  },
  listTag: {
    color: "#2C85C7",
    fontSize: 14,
  },
  errorText: {
    color: "red",
    marginTop: 10,
  },
});

export default LocationSelection;
