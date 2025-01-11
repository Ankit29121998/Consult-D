import React ,{useState}from 'react';
import { View,  StyleSheet } from 'react-native';
import Header from './Header';
import Body from './Body';

const UserServices = () => {
    const [profession,setProfession]=useState('Doctors');
    const [searchQuery,setSearchQuery]=useState('');
    return(
        <View style={styles.screen}>
            <Header profession={profession}  setProfession={setProfession} searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
            <Body profession={profession}  searchQuery={searchQuery} />
      </View>
    )
}
  

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 18,
      fontWeight: 600,
      color: '#39434C',
    },
})
  export default UserServices;