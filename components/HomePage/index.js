import React, { useState } from 'react';
import { View, StyleSheet, Text,TouchableOpacity } from 'react-native';
import Header from './Header';
import Body from './Body';
import DoctorIcon from './Doctor'
import { useNavigation } from '@react-navigation/native';
import RechargeSection from '../../common/RechargeSection';
const UserServices = () => {
  const navigation = useNavigation();
  const [profession, setProfession] = useState('Doctors');
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <View style={styles.screen}>
      <Header profession={profession} setProfession={setProfession} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <RechargeSection/>
      <View style={styles.container}>
        <View style={styles.line} />
        <Text style={styles.text}>What are you looking for?</Text>
        <View style={styles.line} />
      </View>
          <TouchableOpacity style={styles.card} onPress={() =>navigation.navigate("Categories", {profession: 'Doctors' })} >  <DoctorIcon/></TouchableOpacity>
     

    </View>
  )
}


const styles = StyleSheet.create({
  
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#C2C8CC',
  },
  text: {
    marginHorizontal: 8,
    fontSize: 18,
    fontWeight: '700',
    color: '#555B61',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
})
export default UserServices;