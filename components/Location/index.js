import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import * as Location from 'expo-location';

const GetLocation = () => {
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
    <View >
        <Text >
           {address?.district},
          {address?.city},
          {address?.country}
   
        </Text>
     
     
    </View>
  );
};



export default GetLocation;
