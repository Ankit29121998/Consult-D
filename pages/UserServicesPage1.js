import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserBookingIcon from '../assets/HomePageIcon/user-booking';
import UserServicesIcon from '../assets/HomePageIcon/user-services';
import UserProfileIcon from '../assets/HomePageIcon/user-profile';
import UserHistoryIcon from '../assets/HomePageIcon/user-history';
import UserServices from '../components/UserServices';
import UserBookings from '../components/UserBookings';
import UserHistory from '../components/UserHistory';
import UserProfile from '../components/UserProfile';


// Tab Navigator
const Tab = createBottomTabNavigator();

const HomePage = () => {
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
         screenOptions={({ route }) => ({
            tabBarIcon: ({focused}) => {
              if (route.name === 'Services') {
                return <UserServicesIcon  fill={focused ? '#2C85C7' : '#6E8294'} />;
              } else if (route.name === 'Booking') {
                return <UserBookingIcon fill={focused ? '#2C85C7' : '#6E8294'}  />;
              }else if (route.name === 'History') {
                return <UserHistoryIcon fill={focused ? '#2C85C7' : '#6E8294'} />;
              }else if (route.name === 'Profile') {
                return <UserProfileIcon  fill={focused ? '#2C85C7' : '#6E8294'}  />;
              }
            },
          tabBarShowLabel: false, // Hide tab labels
          tabBarStyle: {
            backgroundColor: '#f8f8f8',
            height: 60,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            borderWidth: 0.5,
            paddingTop:10,
            borderColor: '#dcdcdc',
          },
          
          })}
      >
        <Tab.Screen name="Services" component={UserServices}   options={{ headerShown: false }} />
        <Tab.Screen name="Booking" component={UserBookings}   options={{ headerShown: false }} />
        <Tab.Screen name="History" component={UserHistory}   options={{ headerShown: false }} />
        <Tab.Screen name="Profile" component={UserProfile}   options={{ headerShown: false }} />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({

 
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    color: '#39434C',
  },
});

export default HomePage;
