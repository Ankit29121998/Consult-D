import React from 'react';
import { View, TextInput, StyleSheet, Text ,TouchableOpacity} from 'react-native';

const CommentInput = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        multiline
        numberOfLines={8} 
        placeholder="Write something  here..."
        placeholderTextColor="#6E8294"
      />
     <TouchableOpacity onPress={() => navigation.goBack()} style={styles.submitButton} >
             <Text style={styles.label} >Submit</Text>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor:'white',

  },
  
  input: {
    minHeight: 150, 
    borderColor: '#C2C8CC', // Blue border
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    textAlignVertical: 'top', 
    fontSize: 14, 
    color: '#6E8294',
    backgroundColor:'#C2C8CC'
  },
  submitButton:{
    marginTop:8,
    backgroundColor:'#2C85C7',
    alignItems:'center',
    padding:10,
    borderRadius:5,

  },
  label:{
    color:'#FFFFFF',
    fontSize:16,
  }
});

export default CommentInput;
