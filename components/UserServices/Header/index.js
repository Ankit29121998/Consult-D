import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import professionIcons from '../profession-mapping';
import ClientPage from './ClientPage';
import RechargeSection from './RechargeSection';
const Header = ({ profession = 'Doctors',  searchQuery = '', setSearchQuery = () => { } }) => {
  
  return (
    <View style={styles.screen}>
      <ClientPage searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <RechargeSection/>
      <View style={styles.container}>
              <View style={styles.line} />
              <Text style={styles.text}>Categories</Text>
              <View style={styles.line} />
      </View>
    
      <View style={styles.iconContainer}>
        {professionIcons.map((item, index) => {
          const { Component, name } = item || {};
          return (
            <TouchableOpacity key={index} 
            // onPress={() => handlePress(name)}
             style={styles.icon}>
              <View style={[
                styles.iconBox,
              ]} >
                <View style={styles.iconSize}>
                  <Component fill={profession === name ? '#2C85C7' : '#6E8294'} />
                </View>
              </View>
              <Text style={
                { color: profession === name ? '#2C85C7' : '#6E8294' }
              }> {name}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    width:'100%'
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
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
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%',
  },
  icon: {
    width: '33%',
    alignItems: 'center',
  },
  iconBox: {
    padding: 5,
    borderRadius: 10, // Optional: rounded corners for the background box
    alignItems: 'center',  // Center the content inside the box
    justifyContent: 'center',  // Center vertically inside the box
  },
  iconSize: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchWrapper: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,

  },
})
export default Header;