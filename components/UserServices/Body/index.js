import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity ,ScrollView} from 'react-native';
import doctorCategoriesMapping from '../doctor-categories-mapping';
import { useNavigation } from '@react-navigation/native';
const professionCategory={
    'Doctors':doctorCategoriesMapping,
  }

const Body = ({profession}) => {
    const navigation = useNavigation();
  const handlePress = (name) => {
    navigation.navigate('Detail', { profession:profession,category: name, });
  };
  
    return(
        <View style={styles.screen}>
        <Text style={styles.text}>Categories</Text>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.iconContainer}>
        {(professionCategory[profession]|| []).map((item,index)=>{
          const {Component,name}=item|| {};
          return (
            <TouchableOpacity key={index} onPress={() => handlePress(name)} style={styles.icon}>
            <View style={[
                  styles.iconBox,
                ]} >
               <View style={styles.iconSize}>
                  <Component  />
                </View>
            </View>
            <Text> {name}</Text>
          </TouchableOpacity>
          );
        })}
        </View>
           </ScrollView>
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
      flexWrap: 'wrap',  
      alignItems: 'flex-start', 
      width: '100%', 
    },
    icon: { 
      minWidth: '33%',  
      alignItems: 'center', 
      marginBottom:8
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
      backgroundColor:'#E1E7EA',
      borderRadius:50,
    },
})
  export default Body;