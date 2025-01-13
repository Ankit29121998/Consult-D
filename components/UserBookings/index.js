import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import PastData from "./PastData"; // Reusable component for both tabs
import BookingData from './BookingData';
const BookingTabs = ({navigation}) => {
  const [activeTab, setActiveTab] = useState("booked");

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

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Booking</Text>
      </View>

      {/* Tab Navigation */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === "booked" && styles.activeTab]}
          onPress={() => setActiveTab("booked")}
        >
          <Text style={styles.tabText}>Booked</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === "past" && styles.activeTab]}
          onPress={() => setActiveTab("past")}
        >
          <Text style={styles.tabText}>Past</Text>
        </TouchableOpacity>
      </View>

      {/* Reusable BookingList Component */}
      {activeTab==="booked" ? <BookingData data={bookedData} />:<PastData navigation={navigation} data={pastData}/>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    padding: 16,
    backgroundColor: "#fff",
    elevation: 2,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  tabContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    elevation: 2,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#007bff",
  },
  tabText: {
    fontSize: 16,
    color: "#555",
  },
});

export default BookingTabs;
