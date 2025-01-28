import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet ,Dimensions} from "react-native";
import PastData from "./PastData"; // Reusable component for both tabs
import BookingData from './BookingData';


const { width } = Dimensions.get('window');
 // Sample data for each tab
 const bookedData = [
  {
    id: 1,
    name: "James Carlce",
    specialty: "Cardiologist",
    rating: 4.5,
    reviews: "1.2k",
    experience: "15+ Years",
    hospital: "Medanta",
    languages: ["English", "Hindi", "Urdu"],
    callPrice: 25,
    chatPrice: 15,
  },
  {
    id: 2,
    name: "James Carlce",
    specialty: "Cardiologist",
    rating: 4.5,
    reviews: "1.2k",
    experience: "15+ Years",
    hospital: "Medanta",
    languages: ["English", "Hindi", "Urdu"],
    callPrice: 25,
    chatPrice: 15,
  },
  {
    id: 22,
    name: "James Carlce",
    specialty: "Cardiologist",
    rating: 4.5,
    reviews: "1.2k",
    experience: "15+ Years",
    hospital: "Medanta",
    languages: ["English", "Hindi", "Urdu"],
    callPrice: 25,
    chatPrice: 15,
  },
  // Add more booked data...
];

const pastData = [
  {
    id: 1,
    name: "Dr. Alex Johnson",
    specialty: "Dentist",
    rating: 4.8,
    reviews: "800",
    experience: "10+ Years",
    hospital: "Fortis",
    languages: ["English", "Hindi"],
    callPrice: 20,
    chatPrice: 10,
  },
  {
    id: 2,
    name: "Dr. Ankit Johnson",
    specialty: "Dentist",
    rating: 4.8,
    reviews: "800",
    experience: "10+ Years",
    hospital: "Fortis",
    languages: ["English", "Hindi"],
    callPrice: 20,
    chatPrice: 10,
  },
  {
    id: 3,
    name: "Dr. Ankit Johnson",
    specialty: "Dentist",
    rating: 4.8,
    reviews: "800",
    experience: "10+ Years",
    hospital: "Fortis",
    languages: ["English", "Hindi"],
    callPrice: 20,
    chatPrice: 10,
  },
  {
    id: 24,
    name: "Dr. Ankit Johnson",
    specialty: "Dentist",
    rating: 4.8,
    reviews: "800",
    experience: "10+ Years",
    hospital: "Fortis",
    languages: ["English", "Hindi"],
    callPrice: 20,
    chatPrice: 10,
  },

];
const BOOKING_TABS=["Booked", "History"];
const BookingTabs = ({navigation}) => {
  const [activeTab, setActiveTab] = useState("Booked");
  const [selectedCategory, setSelectedCategory] = useState("Doctors");
  const [selectedStatus, setSelectedStatus] = useState("All");

  const categories = ["Doctors"];
  const statuses = ["All", "Pending", "Confirmed", "Paid"];
 

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>

  
      <View>
      <Text style={styles.heading}>Booking</Text>
      </View>

    

      <View style={styles.tabContainer}>
      {BOOKING_TABS.map((tab) => (
  <TouchableOpacity
    key={tab}
    style={styles.tabButton}
    onPress={() => setActiveTab(tab)}
  >
    <View
      style={[
        styles.tabContent,
        activeTab === tab && styles.activeTabContent,
      ]}
    >
      <Text
        style={[
          styles.tabText,
          activeTab === tab && styles.activeTabText,
        ]}
      >
        {tab}
      </Text>
    </View>
  </TouchableOpacity>
))}
      </View>
      </View>

    <View style={styles.bodyContainer}>
      <View style={styles.filterRow}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.filterButton,
              selectedCategory === category && styles.activeFilterButton,
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text
              style={[
                styles.filterText,
                selectedCategory === category && styles.activeFilterText,
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      {activeTab==="Booked" ?  <View style={styles.filterRow}>
        {statuses.map((status) => (
          <TouchableOpacity
            key={status}
            style={[
              styles.filterButton,
              selectedStatus === status && styles.activeFilterButton,
            ]}
            onPress={() => setSelectedStatus(status)}
          >
            <Text
              style={[
                styles.filterText,
                selectedStatus === status && styles.activeFilterText,
              ]}
            >
              {status}
            </Text>
          </TouchableOpacity>
        ))}
      </View>:null}
     
      <View>
      {activeTab==="Booked" ? <BookingData data={bookedData}  navigation={navigation}/>:<PastData navigation={navigation} data={pastData}/>}
      </View>
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    backgroundColor: "#EBEFF5",
  },
  heading: {
    fontSize: 20,
    fontWeight: "600",
    color: "#39434C",
    marginTop:16,
  },
  headerContainer:{
    paddingTop: 24,       
    paddingHorizontal: 16,   
    backgroundColor:"#fff",
  },
  bodyContainer:{
paddingHorizontal:12,
paddingTop:8,
  },

  
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#FFFFFF", // Required for shadow to be visible
    borderRadius: 8, // Optional for a softer effect
    shadowColor: "rgba(191, 191, 191, 0.25)",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 5, 
  },

  tabButton: {
    flex: 1, // Ensures equal spacing for all tabs
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    paddingVertical:10,
    fontSize: 16,
    color: '#7C92A6',
  },
  activeTabContent: {
    width: width / BOOKING_TABS.length,
    borderBottomWidth: 2,
    borderBottomColor: '#2C85C7',
  },
  activeTabText: {
    color: '#2C85C7', 
    fontWeight: 'bold',
  },
  filterRow: {
    flexDirection: "row",
    justifyContent: "space-around-them",
    marginVertical: 4,
    gap:10,
  },
  filterButton: {
    borderWidth: 1,
    borderColor: "#C2C8CC",
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: "#FFFFFF",
  },
  activeFilterButton: {
    backgroundColor: "#2C85C7",
  },
  filterText: {
    fontSize: 14,
    color: "#697C8C",
    fontWeight: "700",
  },
  activeFilterText: {
    color: "#FFFFFF",
  },
  
});

export default BookingTabs;
