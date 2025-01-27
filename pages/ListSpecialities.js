import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import SearchIcon from "../assets/SearchIcon";


const ListSpecialities = ({route,navigation}) => {
  const { profession,category,list_of_specialities}=route?.params
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSpecialties = list_of_specialities.filter((specialty) =>
    Object.keys(specialty).some(key =>
      key.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const handlePress = (name) => {
    navigation.navigate('Detail', { profession: profession, category: name });
  };

  
  const renderItem = ({ item }) => {
    let key, value;
    for (let k in item) {
      if (item.hasOwnProperty(k)) {
        key = k;
        value = item[k];
        break;
      }
    }
    const {  IconComponent,route_category} = value;
    return (
      <TouchableOpacity key={key} style={styles.itemContainer}  onPress={()=>handlePress(route_category)}>
        <View style={styles.iconBox}>
        <IconComponent/>
        </View>
        <Text style={styles.itemText}>{key}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>

   
      <View style={styles.searchBar}>
                    <SearchIcon />
                    <TextInput
                        style={styles.searchInput}
                        placeholder={`Search ${category || 'Specialties'}`}
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                     
                    />
                </View>
                </View>

      <FlatList
        data={filteredSpecialties}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  header:{
    padding:16,
  },
  searchContainer:{
    padding:16
  },
  searchBar: {
    flexDirection: "row",
    backgroundColor: "#EBEFF5",
    alignItems: "center",
    paddingHorizontal: 10,
    borderRadius: 10,
    elevation: 3,
    height:45,
},
searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#6E8294",
},
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#FFFFFF",
   borderBottomWidth:2,
   borderColor:'#EBEFF5',
    elevation: 2,
  },
  iconBox:{
    marginRight:20
  },
  
  itemText: {
    fontSize: 16,
    color: "#555B61",
    fontWeight:700,
  },
});

export default ListSpecialities;
