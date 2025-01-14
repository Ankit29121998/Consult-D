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
                    <Text style={styles.text}>Enter your mobile number!</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="+91  |  Mobile number"
                        keyboardType="phone-pad"
                        placeholderTextColor="#7C92A6"
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
        backgroundColor:'white',
         
    },
    scrollViewContent: {
        flexGrow: 1,  
        justifyContent: 'space-between',  
        padding: 10,
    },
    inputContainer: {
        marginBottom: 20,  
    },
    text: {
        color:'#39434C',
        fontWeight:500,
        fontSize:18,
        marginVertical:20
    },
    input: {
        height: 45,
        borderColor: '#C2C8CC',
        backgroundColor:'#EBEFF5',
        borderWidth: 1,
        borderRadius: 5,
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
