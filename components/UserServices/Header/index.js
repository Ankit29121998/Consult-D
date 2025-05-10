import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import ClientPage from './ClientPage';
import RechargeSection from '../../../common/RechargeSection';
const Header = ({ subCategories,subCategoriesSelected,setSubCategoriesSelected=()=>{} }) => {

  const handlePress=(val)=>{
    setSubCategoriesSelected(val)
  }
  return (
    <View style={styles.screen}>
      <ClientPage />
            <View style={styles.rechargeContainer}><RechargeSection/></View>
  
      <View style={styles.container}>
              <View style={styles.line} />
              <Text style={styles.text}>Categories</Text>
              <View style={styles.line} />
      </View>
    
      <View style={styles.iconContainer}>
        {(subCategories || []).map((item, index) => {
         
         let key, value;

      
         for (let k in item) {
           if (item.hasOwnProperty(k)) { 
             key = k; 
             value = item[k]; 
             break; 
           }
         }

         const{IconComponent}=value || {}
          return (
            
            <TouchableOpacity key={index} 
            onPress={() => handlePress(key)}
             style={styles.icon}>
              <View style={[
                styles.iconBox,
              ]} >
                <View style={styles.iconSize}>
                  <IconComponent 
                  fill={subCategoriesSelected === key ? '#2C85C7' : '#F1F6FE'} 
                  insidefill={subCategoriesSelected === key ? '#fff' : '#2C85C7'} 
                  />
                </View>
              </View>
              <Text style={
                { color: subCategoriesSelected === key ? '#2C85C7' : '#6E8294' }
              }> {key}</Text>
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
    width:'100%',
    backgroundColor:"white",

  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
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
    fontSize: 16,
    fontWeight: '500',
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