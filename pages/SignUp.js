import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Swiper from 'react-native-swiper';
import First from '../assets/SignUpPageIcon/first';
import Second from '../assets/SignUpPageIcon/second';
import Third from '../assets/SignUpPageIcon/third';

const SignUp = ({ navigation }) => {
  const slides = [
    {
      Title: (
        <Text style={styles.title}>
          Your trusted platform {"\n"}with experts
        </Text>
      ),
      Description: (
        <Text style={styles.description}>
          Connect with qualified consultants,{"\n"} book visit appointments, and online {"\n"}consultations all in one place.
        </Text>
      ),
      SvgComponent: First,
    },
    {
      Title: (
        <Text style={styles.title}>
          Connect with Verified {"\n"}Experts Across Industries
        </Text>
      ),
      Description: (
        <Text style={styles.description}>
          AdviLo connects you with certified{"\n"} experts to address your needs quickly {"\n"} and securely.
        </Text>
      ),
      SvgComponent: Second,
    },
    {
      Title: (
        <Text style={styles.title}>
          AdviLo Makes {"\n"}Consulting Simple
        </Text>
      ),
      Description: (
        <Text style={styles.description}>
          One App, Many Experts{"\n"} Legal, financial, and healthcare{"\n"} advice—always within reach.
        </Text>
      ),
      SvgComponent: Third,
    },
  ];

  return (
    <View style={styles.container}>
      <Swiper
        loop={false}
        dot={<View style={styles.dot} />}
        activeDot={<View style={styles.activeDot} />}
        style={styles.swipeContainer}
      >
        {slides.map((slide, index) => {
          const Svg = slide.SvgComponent;
          return (
            <View style={styles.slide} key={index}>
              {slide.Title}
              <Svg />
              {slide.Description}
            </View>
          );
        })}
      </Swiper>

      <View style={styles.inputContainer}>
        <Text style={styles.text}>Enter Your mobile number! </Text>
        <TextInput
          onFocus={() => navigation.navigate("SignUpOtpPage")}
          style={styles.input}
          placeholder="+91   Mobile number"
          keyboardType="phone-pad"
          placeholderTextColor="#A9A9A9"
        />
        <Text
          onPress={() => navigation.navigate("Home")}
          style={styles.troubleText}
        >
          Trouble signing in?
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  swipeContainer: {
    flex: 3, // Ensure swiper takes a larger portion of the screen
    backgroundColor: '#2C85C7',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 20,
  },
  description: {
    marginTop: 10,
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  dot: {
    backgroundColor: '#216394',
    width: 8,
    height: 6,
    borderRadius: 4,
    marginHorizontal: 3,
  },
  activeDot: {
    backgroundColor: '#FFFFFF',
    width: 30,
    height: 6,
    borderRadius: 4,
    marginHorizontal: 3,
  },
  inputContainer: {
    padding: 20,
  },
  input: {
    height: 50,
    borderColor: '#BDC3C7',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  troubleText: {
    color: '#3498DB',
    fontSize: 14,
    textAlign: 'left',
    textDecorationLine: 'underline',
    marginBottom: 20,
  },
  text: {
    color: '#39434C',
    fontWeight: '500',
    fontSize: 18,
    marginVertical: 20,
  },
});

export default SignUp;
