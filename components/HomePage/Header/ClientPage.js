import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Image,TouchableOpacity } from "react-native";
import {FontAwesome } from "@expo/vector-icons";
import SearchIcon from "../../../assets/SearchIcon";
import * as Location from 'expo-location';
import LocationIcon from '../../../assets/Location';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const ClientServicesPage = ({ searchQuery = '', setSearchQuery = () => { } }) => {
     const navigation = useNavigation();
    const [address, setAddress] = useState(null);

    const fetchLocation = async () => {
        try {

            // Request permission to access location
            const { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            // Fetch current location
            const loc = await Location.getCurrentPositionAsync({
                accuracy: Location.Accuracy.High,
            });
            const addressData = await Location.reverseGeocodeAsync({
                latitude: loc.coords.latitude,
                longitude: loc.coords.longitude,
            });
            setAddress(addressData[0]);
        } catch (error) {
            setErrorMsg(error.message);
        }
    };

    useEffect(() => {
        fetchLocation();
    }, []);
    return (
        <View style={styles.container}>
            {/* Header Section */}
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <LocationIcon />
                    <View style={styles.locationText}>
                        <Text style={styles.currentLocationText}>Your current location</Text>
                        <View style={styles.locationRow}>
                            <Text style={styles.location}>

                                {address?.district}-
                                {(address?.district?.length + address?.city?.length) > 12
                                    ? `${address.city.substring(0, 3)}...`
                                    : address?.city}
                            </Text>
 <TouchableOpacity onPress={() =>navigation.navigate("LocationSelection")} style={styles.submitButton} >
                             <MaterialIcons name="keyboard-arrow-down" size={20} color="#fff" />
                             </TouchableOpacity>                            
                        </View>
                    </View>
                    {/* <FontAwesome name="heart-o" size={24} color="#fff" style={styles.heartIcon} /> */}
                    <TouchableOpacity onPress={() =>navigation.navigate("Profile")} >
                    <Image
                        source={{ uri: "https://via.placeholder.com/50" }} // Replace with actual profile image URL
                        style={styles.profileImage}
                    />
                    </TouchableOpacity>
                    
                </View>
               
            </View>

            {/* Search Bar */}

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",

    },
    header: {
        backgroundColor: "#2C85C7",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        padding: 10,
    },
    headerContent: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 40,
    },
    locationText: {
        flex: 1,
        marginLeft: 10,
    },
    currentLocationText: {
        color: "#fff",
        fontSize: 14,
    },
    locationRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 2,
    },
    location: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
        marginRight: 5,
    },
    heartIcon: {
        marginHorizontal: 10,
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    
});

export default ClientServicesPage;
