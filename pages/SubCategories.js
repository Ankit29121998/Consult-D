
// import { ScrollView } from 'react-native';
// import UserServices from "../components/UserServices";
// import professionMapping from "../constants/professionMapping";
// const SubCategories=({ navigation, route })=>{
//     const { profession ,category} = route?.params;
//     return(
//         <ScrollView>
//  <UserServices profession={profession} category={category}/>
//         </ScrollView>
       
//     )
// };
// export default SubCategories;
import React from 'react';
import { View, StyleSheet,ScrollView,TouchableOpacity,Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserBookingIcon from '../assets/HomePageIcon/user-booking';
import UserServicesIcon from '../assets/HomePageIcon/user-services';
import UserProfileIcon from '../assets/HomePageIcon/user-profile';
import UserHistoryIcon from '../assets/HomePageIcon/user-history';
import UserServices from '../components/UserServices';
import UserBookings from '../components/UserBookings';
import UserHistory from '../components/UserHistory';
import UserProfile from '../components/UserProfile';
import UserHomePage from '../components/HomePage';
import AdviloIcon from '../assets/Advilo';
import HomePageIcon from '../assets/HomePage';
// Tab Navigator
const Tab = createBottomTabNavigator();
const AdviloPlaceholder = () => <></>;
const SubCategories = ({navigation}) => {

  return (
    <View style={styles.container}>
      <Tab.Navigator initialRouteName="Services"
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
              }else  if (route.name === 'HomePage') {
                return <HomePageIcon  fill={focused ? '#2C85C7' : '#6E8294'} />;
              }
            },
          tabBarShowLabel: false, // Hide tab labels
          tabBarStyle: {
            backgroundColor: '#fff',
            height: 60,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            borderWidth: 0.5,
            paddingTop:10,
            borderColor: '#dcdcdc',
          },
          
          })}
      >
         <Tab.Screen
        name="HomePage"
        component={AdviloPlaceholder}  // Placeholder component for rendering
        options={{
          headerShown: false,
          
          tabBarButton: (props) => (
            <TouchableOpacity
            style={styles.iconContainer} 
              // {...props}
              onPress={() => {
                navigation.navigate('UserServicesPage');  
              }}
            >
               <HomePageIcon fill="#2C85C7" />

            </TouchableOpacity>
          ),
        }}
      />
        <Tab.Screen name="Services" component={UserServices}   options={{ headerShown: false }} />
        <Tab.Screen name="Booking" component={UserBookings}   options={{ headerShown: false }} />
        <Tab.Screen name="History" component={UserHistory}   options={{ headerShown: false }} />
        <Tab.Screen name="Profile" component={UserProfile}   options={{ headerShown: false }} />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
    shadowColor: '#BFBFBF', // Shadow color
    shadowOffset: { width: 0, height: 0 }, // Shadow offset
    shadowOpacity: 0.25, // Opacity of the shadow
    shadowRadius: 7, // Blur radius of the shadow
  },
 
  
  iconContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:10,
    height: 38, 
    borderRightWidth: 1, 
    borderRightColor: '#DDE4EE',
  }
});

export default SubCategories;

