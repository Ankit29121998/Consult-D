import React, { useState } from 'react';
import { View, StyleSheet, Text,TouchableOpacity } from 'react-native';
import Header from './Header';
import professionIcons from './profession-mapping';
import { useNavigation } from '@react-navigation/native';
import RechargeSection from '../../common/RechargeSection';
import Footer from './Footer';
const UserServices = () => {
  const navigation = useNavigation();
  const [profession, setProfession] = useState('Doctors');
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <View style={styles.screen}>
      <Header profession={profession} setProfession={setProfession} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <View style={styles.rechargeContainer}>
      <RechargeSection/>
      </View>
  
      <View style={styles.container}>
        <View style={styles.line} />
        <Text style={styles.text}>What are you looking for?</Text>
        <View style={styles.line} />
      </View>
      
      <View style={styles.icons}>
      {professionIcons.map((item)=>{
        const{name ,Component}=item || {};
        return(
          <TouchableOpacity
          key={name}
          style={styles.card}
          onPress={() => navigation.navigate("Categories", { profession: name })}
        >
          <Component />
          {/* <DoctorIcon /> */}
        </TouchableOpacity>
        )

      })}
      </View>
      
      <Footer />

     
     

    </View>
  )
}


const styles = StyleSheet.create({
  
  screen: {
    flex: 1,

    alignItems: 'center',
    backgroundColor: 'white',
  },
  rechargeContainer:{
    padding:16,
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
  card:{
    flexDirection: "row",
    alignItems: "center",
    padding: 4,
    backgroundColor: "#FFF", // Background color
    borderRadius: 10, // Border radius
    elevation: 3, 
   
  },
  icons:{
    flexDirection: "row",
    marginVertical:15,
    gap:12,
  }
})
export default UserServices;