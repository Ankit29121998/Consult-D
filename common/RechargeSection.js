import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import WalletIcon from '../assets/Wallet';
import { useNavigation } from '@react-navigation/native';
const RechargeSection = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.walletContainer}>
        <View style={styles.wallet}>
        <WalletIcon/>
        </View>
        
        <Text style={styles.amountText}>₹ 10,000</Text>
      </View>
      
      <TouchableOpacity style={styles.rechargeButton} onPress={() =>navigation.navigate("Wallet")}>
        <Text style={styles.rechargeText} > Recharge</Text>
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
    borderRadius: 25,
    width:'100%'
  },
  walletContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  wallet:{
    backgroundColor:'#2879B5',
    borderRadius:25,
    width:50,
    height:50,
    alignItems: 'center',
    justifyContent: 'center',
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
    paddingVertical: 14,

    borderRadius: 20,
  },
  rechargeText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default RechargeSection;
