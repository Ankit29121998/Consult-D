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
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}  options={{ headerShown: false }} />
        <Stack.Screen name="UserRegistration" component={UserRegistration} options={{ title: 'Step 1 of 1' }} />
        <Stack.Screen name="UserRegistrationSuccessful" component={UserRegistrationSuccessful} options={{ headerShown: false }} />
        <Stack.Screen name="ServiceProviderRegistration" component={ServiceProviderRegistration} options={{ title: 'Step 1 of 2' }} />
        <Stack.Screen name="DoctorRegistration" component={DoctorRegistration} options={{ title: 'Step 2 of 2' }} />
        <Stack.Screen name="RegistrationUnderReview" component={RegistrationUnderReview} options={{ headerShown: false }} />
  
        <Stack.Screen name="UserServicesPage" component={UserServicesPage} options={{ headerShown: false }} />
        <Stack.Screen name="Detail" component={About} options={({ route }) => ({ title: route.params?.category })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
