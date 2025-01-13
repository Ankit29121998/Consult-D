import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./pages/Home";
import UserRegistration from "./pages/UserRegistration";
import UserRegistrationSuccessful from "./pages/UserRegistrationSuccessful";
import ServiceProviderRegistration from "./pages/ServiceProviderRegistration";
import DoctorRegistration from "./pages/DoctorRegistration";
import RegistrationUnderReview from "./pages/RegistrationUnderReview";
import UserServicesPage from "./pages/UserServicesPage";
import About from './pages/About';
import SignUp from './pages/SignUp';
import SignUpOtpPage from "./pages/SignUpOtpPage";
import SignUpWithOtp from "./pages/SignUpWithOtp";
import BookVisitAppointment from './pages/BookVisitAppointment';
import CommentPage from './pages/CommentPage';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUp">
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name="SignUpOtpPage" component={SignUpOtpPage} options={{
          headerShown: true,
          title: '',
        }} />
        <Stack.Screen name="SignUpWithOtp" component={SignUpWithOtp} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="UserRegistration" component={UserRegistration} options={{ title: 'Step 1 of 1' }} />
        <Stack.Screen name="UserRegistrationSuccessful" component={UserRegistrationSuccessful} options={{ headerShown: false }} />
        <Stack.Screen name="ServiceProviderRegistration" component={ServiceProviderRegistration} options={{ title: 'Step 1 of 2' }} />
        <Stack.Screen name="DoctorRegistration" component={DoctorRegistration} options={{ title: 'Step 2 of 2' }} />
        <Stack.Screen name="RegistrationUnderReview" component={RegistrationUnderReview} options={{ headerShown: false }} />
        <Stack.Screen name="BookVisitAppointment" component={BookVisitAppointment} options={{ title: 'Book Visit Appointment' }} />

        
        <Stack.Screen name="UserServicesPage" component={UserServicesPage} options={{ headerShown: false }} />
        <Stack.Screen name="Detail" component={About} options={({ route }) => ({ title: route.params?.category })} />
        <Stack.Screen name="CommentPage" component={CommentPage}  options= {{ title: 'Write a Comment' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
