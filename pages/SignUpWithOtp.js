import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';

// Function to generate a random 4-digit OTP
const generateOTPRandom = () => {
    const otp = Math.floor(1000 + Math.random() * 9000);
    return otp.toString();
};

const SignUpWithOtp = ({ navigation, route }) => {
    const { phoneNumber, otp: initialOtp } = route.params;

    const [otp, setOtp] = useState(['', '', '', '']); // OTP state
    const [generatedOtp, setGeneratedOtp] = useState(initialOtp); // OTP from route params
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);

    const refs = []; // To manage input refs

    const handleInputChange = (value, index) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Automatically move to the next input field
        if (value && index < otp.length - 1) {
            refs[index + 1]?.focus();
        }
        const allFieldsFilled = newOtp.every(val => val !== '');
        setIsButtonEnabled(allFieldsFilled);
    };

    const handleKeyPress = (key, index) => {
        if (key === 'Backspace' && index > 0 && !otp[index]) {
            refs[index - 1]?.focus();
        }
    };

    const handleResend = () => {
        const newOtp = generateOTPRandom();
        setGeneratedOtp(newOtp); 
        console.log('New OTP:', newOtp);

    };

    const handleNext = () => {
        
        const enteredOtp = otp.join('');
        if (enteredOtp === generatedOtp) {
            navigation.navigate('UserRegistration');
        } else {
            alert(`Incorrect OTP. Please try again.${generatedOtp}`);
        }
    };
    console.log(initialOtp,"initialOtp")

    return (
        <KeyboardAvoidingView
            style={styles.container}

        >
            <Text style={styles.title}>Enter OTP Code</Text>
            <Text style={styles.subtitle}>
                Code has been sent to  +91{phoneNumber}
            </Text>
            <View style={styles.otpContainer}>
                {otp.map((_, index) => (
                    <TextInput
                        key={index}
                        style={styles.otpInput}
                        keyboardType="numeric"
                        maxLength={1}
                        value={otp[index]}
                        onChangeText={(value) => handleInputChange(value, index)}
                        onKeyPress={({ nativeEvent: { key } }) => handleKeyPress(key, index)}
                        ref={(ref) => (refs[index] = ref)} // Store references for auto-focus
                    />
                ))}
            </View>

            <TouchableOpacity onPress={handleResend}>
                <Text style={styles.resendText}>
                    Didn’t receive the OTP? <Text style={styles.resendLink}>Resend Code</Text>
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={isButtonEnabled ? styles.nextButton : styles.nextButtonDisabled}  onPress={handleNext}  disabled={!isButtonEnabled}>
            <Text style={styles.nextButtonText}>
               Next</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent:'center',
        padding: 20,
        backgroundColor:'white'
    },
    title: {
        fontSize: 20,
        fontWeight: '500',
        color: '#39434C',
        textAlign: 'center',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#7D7D7D',
        textAlign: 'center',
        marginBottom: 30,
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginBottom: 20,
    },
    otpInput: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: '#EBEFF5',
        backgroundColor:'#EBEFF5',
        borderRadius: 8,
        textAlign: 'center',
        fontSize: 20,
        color: '#2C85C7',
    },
    resendText: {
        textAlign: 'center',
        fontSize: 14,
        color: '#39434C',
        marginBottom: 40,
    },
    resendLink: {
        color: '#2C85C7',
        textDecorationLine: 'underline',
    },
    nextButton: {
        backgroundColor: '#3498DB',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    nextButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    nextButtonDisabled:{
        backgroundColor: '#8DB8D9',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
    }
   
});

export default SignUpWithOtp;
