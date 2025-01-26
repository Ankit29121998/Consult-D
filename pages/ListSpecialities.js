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
      <TextInput
        style={styles.searchBar}
        placeholder={`Search ${category || 'Specialties'}`}
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
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
    backgroundColor: "#F9F9F9",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  searchBar: {
    height: 45,
    borderWidth: 1,
    borderColor: "#EBEFF5",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: "#EBEFF5",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  itemText: {
    fontSize: 16,
    color: "#333",
  },
});

export default ListSpecialities;
