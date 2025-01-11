import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

const BookingList = ({ data }) => {
  return (
    <ScrollView contentContainerStyle={styles.listContainer}>
      {data.length > 0 ? (
        data.map((item) => (
          <View key={item.id} style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>{item.name}</Text>
              <Text style={styles.specialty}>{item.specialty}</Text>
            </View>
            <Text style={styles.rating}>
              {item.rating} ★ | {item.reviews} reviews
            </Text>
            <Text style={styles.experience}>Experience: {item.experience}</Text>
            <Text style={styles.hospital}>Hospital/Clinic: {item.hospital}</Text>
            <View style={styles.languages}>
              {item.languages.map((lang, index) => (
                <Text key={index} style={styles.languageBadge}>
                  {lang}
                </Text>
              ))}
            </View>

            {/* Call & Chat Buttons */}
            <View style={styles.actionButtons}>
              <TouchableOpacity style={styles.callButton}>
                <Text style={styles.buttonText}>Call ₹{item.callPrice}/Min</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.chatButton}>
                <Text style={styles.buttonText}>Chat ₹{item.chatPrice}/Min</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))
      ) : (
        <View style={styles.noDataContainer}>
          <Text style={styles.noDataText}>No bookings found!</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 16,
  },
  card: {
    backgroundColor: "#fff",
    marginBottom: 16,
    padding: 16,
    borderRadius: 8,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  specialty: {
    color: "#007bff",
  },
  rating: {
    marginTop: 8,
    fontSize: 14,
    color: "#888",
  },
  experience: {
    marginTop: 8,
    fontSize: 14,
    color: "#555",
  },
  hospital: {
    marginTop: 8,
    fontSize: 14,
    color: "#555",
  },
  languages: {
    flexDirection: "row",
    marginTop: 8,
  },
  languageBadge: {
    backgroundColor: "#007bff",
    color: "#fff",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginRight: 8,
  },
  actionButtons: {
    flexDirection: "row",
    marginTop: 16,
  },
  callButton: {
    flex: 1,
    backgroundColor: "#28a745",
    padding: 12,
    borderRadius: 4,
    alignItems: "center",
    marginRight: 8,
  },
  chatButton: {
    flex: 1,
    backgroundColor: "#17a2b8",
    padding: 12,
    borderRadius: 4,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  noDataContainer: {
    alignItems: "center",
    marginTop: 50,
  },
  noDataText: {
    fontSize: 16,
    color: "#888",
  },
});

export default BookingList;
