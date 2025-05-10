import React,{useState} from 'react';
import { View, TextInput, StyleSheet, Text ,TouchableOpacity} from 'react-native';

const CommentInput = ({navigation}) => {
  const [comment,setComment]=useState('');
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        multiline
        numberOfLines={8} 
        placeholder="Write something  here..."
        placeholderTextColor="#6E8294"
        value={comment}
        onChange={(value)=>setComment(value)}
      />
     <TouchableOpacity onPress={() => navigation.goBack()} 
       disabled={comment.length === 0}style={[
          styles.submitButton,
          comment.length === 0 && styles.disabledButton,
        
        ]}>
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
    padding: 16,
    textAlignVertical: 'top', 
    fontSize: 16, 
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
  },
  disabledButton: {
    backgroundColor: 'gray',
  }
});

export default CommentInput;
