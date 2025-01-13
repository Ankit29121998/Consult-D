import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825, // Replace with your latitude
          longitude: -122.4324, // Replace with your longitude
          latitudeDelta: 0.0922, // Adjust zoom level
          longitudeDelta: 0.0421, // Adjust zoom level
        }}
      >
        <Marker
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
          title="Your Location"
          description="This is where you are!"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject, // Fills the screen
  },
});

export default MapScreen;
