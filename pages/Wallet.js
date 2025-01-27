import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions
} from "react-native";
const screenWidth = Dimensions.get('window').width;
const timeSlotWidth = (screenWidth - 32 - 16) / 3; 
const Wallet = () => {
  
  const [amount, setAmount] = useState("");
  const rechargePacks = [500, 1000, 2000, 5000, 10000, 15000];

  const handleAddMoney = () => {
    if (amount) {
      alert(`Adding ₹${amount} to wallet`);
    } else {
      alert("Please enter an amount or select a recharge pack.");
    }
  };

  const handlePackSelect = (packAmount) => {
    setAmount(packAmount.toString());
  };

  

  return (
    <View style={styles.container}>
      <View style={styles.header}>

    
      <Text style={styles.currentBalanceLabel}>Current Balance</Text>
      <Text style={styles.currentBalance}>₹45.6</Text>
      </View>
      <View style={styles.body}>

    
      <Text style={styles.addMoneyLabel}>Add Money to Wallet</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />

      <View  style={styles.orContainer}>
              <View style={styles.line} />
              <Text style={styles.text}>or</Text>
              <View style={styles.line} />
      </View>
      <Text style={styles.choosePackLabel}>
        Choose from the available recharge pack
      </Text>

      <View  style={styles.timeSlotRow}>
               {rechargePacks.map((slot) => (
                 <TouchableOpacity
                   key={slot}
                   onPress={() => handlePackSelect(slot)}
                   style={[
                     styles.timeSlot,
                   ]}
                 >
                   <Text
                     style={[
                       styles.timeSlotText
                     ]}
                   >
                     {slot}
                   </Text>
                 </TouchableOpacity>
               ))}
      </View>
        <View style={styles.historyButton}>
          <Text style={styles.historyText}>Recharge History</Text>
        </View>
       

    
      </View>
      <TouchableOpacity style={styles.buttonContainer}  onPress={() => handleAddMoney()} >
            <View style={styles.button}>
                <Text style={styles.buttonText}>Add Money</Text>
              </View>
            </TouchableOpacity> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header:{
    backgroundColor:'#2C85C7',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  body:{
    padding:16,
  },
  currentBalanceLabel: {
    fontSize: 16,
    textAlign: "center",
    color: "#fff",
    marginTop: 40,
  },
  currentBalance: {
    fontSize: 50,
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 30,
  },
  addMoneyLabel: {
    fontSize: 16,
    marginTop: 10,
    color: "#39434C",
    fontWeight: 700,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#C2C8CC",
    borderRadius: 8,
    width:180,
    paddingHorizontal: 10,
    marginVertical: 10,
    backgroundColor: "#fff",
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#000000',
    marginTop:4,
  },
  text: {
    marginHorizontal: 8,
    fontSize: 18,
    fontWeight: '700',
    color: '#39434C',
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginVertical:8,
  },
  timeSlotRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flexWrap: "wrap",
    marginBottom: 8,
    gap: 8,
  },
  timeSlot: {
    width: timeSlotWidth,
    paddingVertical: 10,
    paddingHorizontal:20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#6E8294',
    backgroundColor: 'transparent',
    alignItems: 'center',
    marginVertical:4,
  },
  timeSlotText:{
    color:'#6E8294',
  },
  choosePackLabel: {
    fontSize: 14,
    marginTop: 4,
    marginBottom:16,
    color: "#6E8294",
    alignSelf:'center'
  },
  
  buttonContainer: {
    paddingHorizontal:16,
    position: 'absolute',
    bottom: 10,  
    width: '100%',
  },
  button: {
    backgroundColor: '#2C85C7',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 10,  
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 500,
  },
 
  historyButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  historyText: {
    fontSize: 16,
    fontWeight: "bold",
    color:'#39434C'
  },
  
});

export default Wallet;
