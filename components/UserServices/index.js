import React ,{useState}from 'react';
import { View,  StyleSheet,ScrollView } from 'react-native';
import Header from './Header';
import Body from './Body';


const UserServices = ({profession,category}) => {

    const [searchQuery,setSearchQuery]=useState('');
    return(
        <View style={styles.screen}>
          <ScrollView>
          <Header profession={profession} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

<Body profession={profession}  searchQuery={searchQuery} />
          </ScrollView>
           
      </View>
    )
}
  

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'white',
    },
    text: {
      fontSize: 18,
      fontWeight: 600,
      color: '#39434C',
    },
})
  export default UserServices;