import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import professionIcons from '../profession-mapping';
import GetLocation from '../../Location';
const Header = ({profession='Doctors',setProfession=()=>{}}) => {
  const handlePress = (professionName) => {
    setProfession(professionName);
  };
    return(
        <View style={styles.screen}>
          <GetLocation />
        <Text style={styles.text}>What are you looking for?</Text>
        <View style={styles.iconContainer}>
        {professionIcons.map((item,index)=>{
          const {Component,name}=item|| {};
          return (
            <TouchableOpacity key={index} onPress={() => handlePress(name)} style={styles.icon}>
            <View style={[
                  styles.iconBox,
                ]} >
               <View style={styles.iconSize}>
                  <Component  fill={profession===name ?  '#2C85C7' : '#6E8294'} />
                </View>
            </View>
            <Text style={
               { color: profession===name ? '#2C85C7' : '#6E8294'}
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
      alignItems: 'center',
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
})
  export default Header;