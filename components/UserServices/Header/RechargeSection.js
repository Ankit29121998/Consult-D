import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Import wallet icon or use any other icon library
import WalletIcon from '../../../assets/Wallet';
const RechargeSection = () => {
  return (
    <View style={styles.container}>
      <View style={styles.walletContainer}>
        <WalletIcon/>
        <Text style={styles.amountText}>₹ 10,000</Text>
      </View>
      
      <TouchableOpacity style={styles.rechargeButton}>
        <Text style={styles.rechargeText}>Recharge</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#2879B5',
    borderRadius: 20,
    margin: 20,
  },
  walletContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  walletIcon: {
    backgroundColor: '#2A76E3',

  },
  amountText: {
    marginLeft:10,
    fontSize: 18,
    color: '#2879B5',
    fontWeight: '600',
  },
  rechargeButton: {
    backgroundColor: '#2879B5',
    paddingHorizontal: 20,
    paddingVertical: 12,

    borderRadius: 20,
  },
  rechargeText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default RechargeSection;
