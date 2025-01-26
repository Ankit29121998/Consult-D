import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Specialities from '../../../assets/Specialities';

const Body = ({ profession, subCategories, subCategoriesSelected }) => {
  const navigation = useNavigation();

  const handlePress = (name) => {
    navigation.navigate('Detail', { profession: profession, category: name });
  };

  // Filter and get the selected subcategories
  let selectedSubCategory = subCategories
    .map(item => item[subCategoriesSelected])
    .filter(Boolean);

  // Get the limit for displaying categories
  let lengthDisplay = selectedSubCategory.map(item => item?.category_to_display_upto)[0];

  // Get the sliced subcategories
  let childSubCategories = selectedSubCategory
    .map(item => item?.Sub_Categories)
    .flat()
    
  let displayChildSubCategories=childSubCategories.slice(0, lengthDisplay);


    const handleViewAllPress = (name) => {
      navigation.navigate('ListSpecialities',{ profession: profession, category:subCategoriesSelected,list_of_specialities:childSubCategories});  // Navigate to SurgicalSpecialties screen
    };

  return (
    <View style={styles.screen}>
      <View style={styles.categoriesHeader}>
        <Text style={styles.text}>{subCategoriesSelected}</Text>
        {selectedSubCategory[0]['view_all']? <TouchableOpacity onPress={()=>handleViewAllPress(subCategoriesSelected)}>
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>:null}
       
      </View>

      {/* Subcategories ScrollView */}
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.iconContainer}>
          {displayChildSubCategories.length > 0 ? (
            displayChildSubCategories.map((item, index) => {
              let key, value;
              for (let k in item) {
                if (item.hasOwnProperty(k)) {
                  key = k;
                  value = item[k];
                  break;
                }
              }
              const { IconComponent, route_category } = value || {};

              return (
                <TouchableOpacity key={index} onPress={() => handlePress(route_category)} style={styles.icon}>
                  <View style={styles.iconBox}>
                    <View style={styles.iconSize}>
                      <IconComponent />
                    </View>
                  </View>
                  <Text style={styles.iconText}>{key}</Text>
                </TouchableOpacity>
              );
            })
          ) : (
            <View style={styles.noResultsContainer}>
              <Text style={styles.noResultsText}>No results found</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoriesHeader: {
    flexDirection: 'row',  // Arrange text in a row
    alignItems: 'center',  // Align vertically in the center
    justifyContent: 'space-between',  // Space between the category title and 'View All'
    padding: 16,
    width: '100%',
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    color: '#555B61',
  },
  viewAllText: {
    fontSize: 16,
    color: '#2C85C7',
    textDecorationLine: 'underline',  // Underline for "View All"
  },
  iconContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    width: '100%',
  },
  icon: {
    width: '33%',
    alignItems: 'center',
    marginBottom: 8,
  },
  iconBox: {
    padding: 5,
    borderRadius: 10,  // Optional: rounded corners for the background box
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconSize: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F1F6FE',
    borderRadius: 50,
  },
  iconText: {
    marginTop: 5,  // Space between icon and text
    fontSize: 14,
    color: '#39434C',
    textAlign: 'center',  // Ensure the text is centered under the icon
  },
  scrollViewContent: {
    paddingBottom: 20,
  },
  noResultsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  noResultsText: {
    fontSize: 18,
    color: '#39434C',
  },
});

export default Body;
