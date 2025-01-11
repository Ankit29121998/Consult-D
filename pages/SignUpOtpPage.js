import React,{useState} from 'react';
import { View, Text, StyleSheet, TextInput,TouchableOpacity ,ScrollView} from 'react-native';

const generateOTP = () => {
    const otp = Math.floor(1000 + Math.random() * 9000); 
    return otp.toString(); 
  };
  
const SignUpOtpPage = ({navigation}) => {
    const [mobileNumber, setMobileNumber] = useState('');

   
    const handleSendOTP=()=>{
        const otp = generateOTP();
        if (mobileNumber.trim() !== '') {
            navigation.navigate('SignUpWithOtp', { phoneNumber: mobileNumber,otp:otp });
          } else {
            alert('Please enter a valid mobile number');
          }
    }
    return (
        <View style={styles.container}>
           
           <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.inputContainer}>
                    <Text style={styles.text}>Enter Your mobile number!</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="+91   Mobile number"
                        keyboardType="phone-pad"
                        placeholderTextColor="#A9A9A9"
                        autoFocus={true}  
                        value={mobileNumber} // Bind the state to the TextInput
                        onChangeText={setMobileNumber} // Update state on text change
                    />
                </View>

                {/* Send OTP button */}
                <TouchableOpacity
                    style={styles.sendOtpButton}
                    onPress={() => handleSendOTP()}
                >
                    <Text style={styles.sendOtpButtonText}>Send OTP</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
         
    },
    scrollViewContent: {
        flexGrow: 1,  // Ensures content takes up enough space for scrolling
        justifyContent: 'space-between',  // Center the content when keyboard is not active
        padding: 20,
    },
    inputContainer: {
        marginBottom: 20,  // Space between input field and button
    },
    text: {
        color:'#39434C',
        fontWeight:500,
        fontSize:18,
        marginVertical:20
    },
    input: {
        height: 50,
        borderColor: '#BDC3C7',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 10,
    },
    sendOtpButton: {
        backgroundColor: '#3498DB',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    sendOtpButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    
  
});

export default SignUpOtpPage;
