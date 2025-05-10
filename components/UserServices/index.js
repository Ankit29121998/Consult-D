import React ,{useState,useEffect}from 'react';
import { View,  StyleSheet,ScrollView ,BackHandler, Alert } from 'react-native';
import Header from './Header';
import Body from './Body';
import professionMapping from '../../constant/professionMapping';

const UserServices = ({route,navigation}) => {

    const {profession='',category=''}=route.params|| {}
    let subCategories = professionMapping[profession]
  .map((item) => item[category])  
  .filter(Boolean)  
  .map((items) => items?.Sub_Categories)  
  .flat(); 
    const [subCategoriesSelected,setSubCategoriesSelected]=useState(Object.keys(subCategories[0])[0]);

    // useEffect(() => {
    //   // Custom back button handling for Android
    //   const backAction = () => {
       
    //     navigation.replace('Categories',{ profession: profession}); 
    //     return true;
    //     // return true;  // Prevent the default back behavior
    //   };
  
    //   const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);
  
    //   // Cleanup event listener when component is unmounted
    //   return () => backHandler.remove();
    // }, [navigation]);
    return(
        <View style={styles.screen}>
          <ScrollView>
          <Header  subCategories={subCategories} subCategoriesSelected={subCategoriesSelected} setSubCategoriesSelected={setSubCategoriesSelected}/>

          <Body profession={profession}  subCategories={subCategories} subCategoriesSelected={subCategoriesSelected} />
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