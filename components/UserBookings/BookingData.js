



 


import React,{useState} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import CancelModal from '../CancelModal';

const BookingData = ({ navigation,route }) => {
    const[modal,setModal]=useState(false);
  return (
    <View style={styles.card}>
      
      <View style={styles.upperPart}>
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

      <View style={styles.languages}>
        <Text style={styles.language}>English</Text>
        <Text style={styles.language}>Hindi</Text>
        <Text style={styles.language}>Urdu</Text>
      </View>

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
      </View>
      {/* Profile and Name */}
     
      <View style={styles.line} />
      <View style={styles.lowerPart}>
      <View style={styles.textContainer}>
        <Text style={styles.confirmed}>Appointment Confirmed</Text>
        <Text>Tomorrow at 14:30pm</Text>
      </View>
      <TouchableOpacity  onPress={() => setModal(true)}>
      <View style={styles.locationContainer}>
          
        <Text style={styles.modalText}>See Location</Text>
  
      </View>
      </TouchableOpacity>
    </View>
    <CancelModal modalVisible={modal} setModalVisible={setModal}/>
     
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  upperPart:{
    paddingHorizontal:15,
    paddingVertical:5
  },
  lowerPart:{
    paddingHorizontal:15,
    paddingVertical:5,
    display:'flex',
    flexDirection:'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap', 
    width: '100%'

  },
  textContainer: {
    flex: 1, // Takes up available space
  },
  locationContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    backgroundColor:'#2C85C7',
    borderRadius:4,
  },
  modalText:{
    color:'#fff'
  },
  confirmed:{
    color:'#00D965',
    fontSize:16,

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
    borderColor:'#2C85C7',
    borderRadius: 15,
    paddingHorizontal:10,
    paddingVertical:4,
    marginRight: 4,
    fontSize: 12,
    color:'#2C85C7',
    borderWidth: 1,
  },
  pricing: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
  },
  priceBox: {
    display:'flex',
    flexDirection:'row',
    gap:8,
    alignItems: 'center',
    borderColor:'#2C85C7',
    borderRadius: 15,
    borderWidth: 1,
    paddingHorizontal:8,
    paddingVertical:4,
    fontSize: 18,
    color: '#2C85C7',

  },
  priceLabel: {
    fontSize: 18,
    color: '#2C85C7',
  },
  price: {
    color:'#2C85C7',
    fontSize: 18,
    fontWeight: 'bold',
  },
  line: {
    borderBottomWidth: 1, 
    borderBottomColor: '#CED5D9', 
    marginVertical: 10, 
  },
 
});
export default BookingData;

