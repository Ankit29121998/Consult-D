import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const UserBookings = () => (
    <View style={styles.screen}>
      <Text style={styles.text}>This is the Bookings Screen</Text>
    </View>
);
  
const styles = StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#39434C',
    },
})
  export default UserBookings;