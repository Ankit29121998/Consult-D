import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./pages/Home";
import About from './pages/About';
import UserRegistration from "./pages/UserRegistration";
import UserRegistrationSuccessful from "./pages/UserRegistrationSuccessful";
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}  options={{ headerShown: false }} />
        <Stack.Screen name="UserRegistration" component={UserRegistration} options={{ title: 'Step 1 of 1' }} />
        <Stack.Screen name="UserRegistrationSuccessful" component={UserRegistrationSuccessful} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
