import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import professionIcons from '../profession-mapping';
import ClientPage from './ClientPage';
const Header = ({ profession = 'Doctors', setProfession = () => { }, searchQuery = '', setSearchQuery = () => { } }) => {
  const handlePress = (professionName) => {
    setProfession(professionName);
  };
  return (
    <View style={styles.screen}>
      <ClientPage searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      
    </View>
  )
}


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    width:'100%'
  },
  text: {
    fontSize: 18,
    fontWeight: 600,
    color: '#39434C',
  },
  iconContainer: {
    flexDirection: 'row',
    // flexWrap: 'wrap',  
    // justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
  },
  icon: {
    minWidth: '33%',
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