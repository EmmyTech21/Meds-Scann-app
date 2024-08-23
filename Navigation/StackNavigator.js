import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screeen/WelcomeScreen";
import OnboardingScreen from "../screeen/OnboardingScreen";
import HomeScreen from "../screeen/HomeScreen";
import DeatailsOverview from "../screeen/DeatailsOverview";
import ScanningScreen from "../screeen/ScanningScreen";
import AboutScreen from "../screeen/AboutScreen";
import ReportScreen from "../screeen/ReportScreen";
import WebsiteScreen from "../screeen/WebsiteScreen";
import DrugDetailsScreen from "../screeen/DrugDetailsScreen";
import CategoryScreen from "../screeen/CategoryScreen";
import SignInScreen from "../screeen/Sign-In Screen";
import SignUpScreen from "../screeen/SignupScreen";
import SignUpScreenDis from "../screeen/signupDis";
import SignInDis from "../screeen/SigninDis";
import SignInStore from "../screeen/Sign-in-Store";
import SignUpScreenStore from "../screeen/Sign-upStore";
import { AuthProvider, useAuth } from '../context/AuthContext';
import ScanHistoryScreen from '../screeen/ScanHistoryScreen';
import ProductTrackingScreen from '../screeen/ProductTrackingScreen';

// Higher-order function to handle protected routes
const ProtectedComponent = (Component) => {
  return (props) => {
    const { isAuthenticated } = useAuth();
    const { navigation } = props;

    if (!isAuthenticated) {
      // Redirect to SignInScreen
      navigation.navigate('Sign-in');
      return null; // Return null to prevent rendering of the component
    }

    // If authenticated, render the component
    return <Component {...props} />;
  };
};

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Welcome" options={{ headerShown: false }} component={WelcomeScreen} />
          <Stack.Screen name="Onboarding" options={{ headerShown: false }} component={OnboardingScreen} />
          <Stack.Screen name="categoryScreen" options={{ headerShown: false }} component={CategoryScreen} />
          <Stack.Screen name="Sign-in" component={SignInScreen} />
          <Stack.Screen name="Sign-up" component={SignUpScreen} />
          <Stack.Screen name="Sign-upDis" component={SignUpScreenDis} options={{ headerShown: false }}/>
          <Stack.Screen name="Sign-inDis" component={SignInDis} options={{ headerShown: false }}/>
          <Stack.Screen name="Sign-inStore" component={SignInStore} />
          <Stack.Screen name="Sign-upStore" component={SignUpScreenStore} />
          <Stack.Screen name="ScanHistoryScreen" component={ScanHistoryScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="ProductTrackingScreen" component={ProductTrackingScreen} options={{ headerShown: false }}/>

          {/* Protected Routes */}
          <Stack.Screen
            name="scan"
            component={ProtectedComponent(DeatailsOverview)}
          />
          <Stack.Screen
            name="Home"
            component={ProtectedComponent(HomeScreen)}
          />
          <Stack.Screen
            name="ScanScreen"
            component={ProtectedComponent(ScanningScreen)}
          />
          <Stack.Screen
            name="DrugDetails"
            component={ProtectedComponent(DrugDetailsScreen)}
          />
          <Stack.Screen
            name="AboutScreen"
            component={ProtectedComponent(AboutScreen)}
          />
          <Stack.Screen
            name="ReportScreen"
            component={ProtectedComponent(ReportScreen)}
          />
          <Stack.Screen
            name="WebsiteScreen"
            component={ProtectedComponent(WebsiteScreen)}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};

export default StackNavigator;
