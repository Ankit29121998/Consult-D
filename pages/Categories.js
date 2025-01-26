import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import professionMapping from '../constant/professionMapping';

const Categories = ({ navigation, route }) => {
  const { profession } = route.params;
  const categories = professionMapping[profession];
  const handleClick = (key, value) => {
    if (value.length === 0 || value === undefined) {
      navigation.navigate('Detail', { profession: profession, category: key});
    } else {
      navigation.navigate('SubCategories', { profession: profession, category: key });
    }
  }
  return (
    <View style={styles.screen}>
      <Text>
        {(categories || []).map((item, index) => {
          const key = Object.keys(item)[0];
          const value = item[key];
          const { Sub_Categories=[] ,IconComponent=null,route_category} = value || {};
         
          return (
            <View key={index}>
              <TouchableOpacity onPress={() => handleClick(route_category, Sub_Categories)}>
                <View>
                  <IconComponent/>
                </View>
              </TouchableOpacity>


            </View>
          );
        })}
      </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'white',
    height: '100%',


  }
})

export default Categories;