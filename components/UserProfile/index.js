// import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import NotificationIcon from '../../assets/Notification';
import EditProfileIcon from '../../assets/EditProfile';


const ProfilePage = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Profile</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.iconButton}>
            {/* <Bell size={20} color="#000" /> */}
            <NotificationIcon />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <EditProfileIcon/>
            {/* <Edit3 size={20} color="#000" /> */}
          </TouchableOpacity>
        </View>
      </View>

      {/* Profile Info */}
      <View style={styles.profileInfoContainer}>
        <Image
                  source={{ uri: 'https://via.placeholder.com/50' }} // Replace with actual image URL
                  style={styles.profileImage}
                />
        <Text style={styles.profileName}>Georgy Luchkin</Text>
      </View>

      {/* Wallet Section */}
      <View style={styles.walletContainer}>
        <Text style={styles.walletAmount}>₹ 500.81</Text>
        <TouchableOpacity style={styles.addMoneyButton}>
          <Text style={styles.addMoneyText}>Add Money</Text>
        </TouchableOpacity>
      
      </View>

      {/* Options List */}
      <View style={styles.optionsContainer}>
        <View style={styles.optionRow}>
          <Text style={styles.optionText}>Biometric</Text>
          <Text style={styles.optionValue}>Disabled</Text>
        </View>

        <View style={styles.optionRow}>
          <Text style={styles.optionText}>Payment Method</Text>
        </View>

        <View style={styles.optionRow}>
          <Text style={styles.optionText}>Support</Text>
          <Text style={styles.optionValue}>Need help? Reach us on WhatsApp</Text>
        </View>

        <View style={styles.optionRow}>
          <Text style={styles.optionText}>Like us? Give us 5 stars</Text>
        </View>
      </View>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#39434C',
  },
  iconContainer: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 15,
  },
  profileInfoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  walletContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#2C85C7',
    paddingHorizontal: 16,
    paddingVertical:24,
    borderRadius: 10,
    marginBottom: 20,
  },
  walletAmount: {
    fontSize: 28,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  addMoneyButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
  },
  addMoneyText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C85C7',
  },
  optionsContainer: {
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    paddingTop: 20,
    marginBottom: 20,
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  optionText: {
    fontSize: 16,
    color: '#000',
  },
  optionValue: {
    fontSize: 14,
    color: '#6E8294',
  },
  logoutButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#2C85C7',
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 10,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2C85C7',
  },
});

export default ProfilePage;
