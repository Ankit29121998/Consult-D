import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from "react-native";

const ConsultationHistory = () => {
  const [activeTab, setActiveTab] = useState("Chat History");

  // Sample data for chat history
  const data = [
    {
      id: 1,
      name: "Sara Lamarnet",
      message: "Hello sir, I want to file my ITR...",
      time: "2:53pm",
      avatar: "https://via.placeholder.com/50",
      isOnline: true,
    },
    {
      id: 2,
      name: "Sara Lamarnet",
      message: "Hello sir, I want to file my ITR...",
      time: "2:53pm",
      avatar: "https://via.placeholder.com/50",
      isOnline: true,
    },
    {
      id: 3,
      name: "Sara Lamarnet",
      message: "Hello sir, I want to file my ITR...",
      time: "2:53pm",
      avatar: "https://via.placeholder.com/50",
      isOnline: true,
    },
    // Add more entries as needed
  ];

  // Render a single item in the list
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.message}>{item.message}</Text>
      </View>
      <View>
        <Text style={styles.time}>{item.time}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>

        <Text style={styles.headerText}>Consultation History</Text>
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === "Wallet History" && styles.activeTab,
          ]}
          onPress={() => setActiveTab("Wallet History")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "Wallet History" && styles.activeTabText,
            ]}
          >
            Wallet History
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === "Call History" && styles.activeTab,
          ]}
          onPress={() => setActiveTab("Call History")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "Call History" && styles.activeTabText,
            ]}
          >
            Call History
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === "Chat History" && styles.activeTab,
          ]}
          onPress={() => setActiveTab("Chat History")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "Chat History" && styles.activeTabText,
            ]}
          >
            Chat History
          </Text>
        </TouchableOpacity>
      </View>

      {/* List */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
    elevation: 2,
  },
  backButton: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  tabs: {
    flexDirection: "row",
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  tab: {
    marginRight: 16,
    paddingVertical: 8,
  },
  tabText: {
    fontSize: 16,
    color: "#555",
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#007bff",
  },
  activeTabText: {
    color: "#007bff",
    fontWeight: "bold",
  },
  list: {
    padding: 16,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 12,
    marginBottom: 10,
    borderRadius: 8,
    elevation: 2,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  message: {
    fontSize: 14,
    color: "#888",
  },
  time: {
    fontSize: 12,
    color: "#aaa",
  },
});

export default ConsultationHistory;
