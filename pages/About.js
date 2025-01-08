



 


import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const About = ({ navigation,route }) => {
  return (
    <View style={styles.card}>
      
      {/* Profile and Name */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://via.placeholder.com/50' }} // Replace with actual image URL
          style={styles.profileImage}
        />
        <View style={styles.info}>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>James Carlice</Text>
            <Text style={styles.verified}>✔️</Text>
          </View>
          <Text style={styles.specialization}>Cardiologist</Text>
        </View>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>4.5 ⭐</Text>
          <Text style={styles.reviews}>1.2k reviews</Text>
        </View>
      </View>

      {/* Experience and Clinic Info */}
      <View style={styles.details}>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Experience:</Text>
          <Text style={styles.detailValue}>15+ Years</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Hospital/Clinic:</Text>
          <Text style={styles.detailValue}>Medanta</Text>
        </View>
      </View>

      {/* Languages */}
      <View style={styles.languages}>
        <Text style={styles.language}>English</Text>
        <Text style={styles.language}>Hindi</Text>
        <Text style={styles.language}>Urdu</Text>
      </View>

      {/* Pricing */}
      <View style={styles.pricing}>
        <View style={styles.priceBox}>
          <Text style={styles.priceLabel}>Call</Text>
          <Text style={styles.price}>₹ 25/Min</Text>
        </View>
        <View style={styles.priceBox}>
          <Text style={styles.priceLabel}>Chat</Text>
          <Text style={styles.price}>₹ 15/Min</Text>
        </View>
      </View>

     
      {/* Buttons */}
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.callButton}>
          <Text style={styles.callButtonText}>Call/Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bookButton}>
          <Text style={styles.bookButtonText}>Book Visit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  info: {
    flex: 1,
    marginLeft: 10,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  verified: {
    fontSize: 16,
    marginLeft: 5,
    color: '#1E90FF',
  },
  specialization: {
    color: '#555',
    marginTop: 2,
  },
  ratingContainer: {
    alignItems: 'flex-end',
  },
  rating: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  reviews: {
    color: '#555',
    fontSize: 12,
  },
  details: {
    marginTop: 10,
  },
  detailRow: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  detailLabel: {
    fontWeight: 'bold',
    color: '#555',
    flex: 1,
  },
  detailValue: {
    color: '#000',
    flex: 2,
  },
  languages: {
    flexDirection: 'row',
    marginTop: 10,
  },
  language: {
    backgroundColor: '#E1E7EA',
    borderRadius: 10,
    padding: 5,
    marginRight: 5,
    fontSize: 12,
  },
  pricing: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
  },
  priceBox: {
    alignItems: 'center',
    flex: 1,
  },
  priceLabel: {
    fontSize: 14,
    color: '#555',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttons: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
  },
  callButton: {
    backgroundColor: '#27AE60',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flex: 1,
    marginRight: 5,
  },
  callButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  bookButton: {
    backgroundColor: '#2D9CDB',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flex: 1,
    marginLeft: 5,
  },
  bookButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
export default About;

