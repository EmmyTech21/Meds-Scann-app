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


const Stack = createStackNavigator();

const StackNavigator = ()=>{
 
  return( <NavigationContainer>
      <Stack.Navigator >
    <Stack.Screen name="Welcome"options={{headerShown: false}}  component={WelcomeScreen} />
    <Stack.Screen name="Onboarding"options={{headerShown: false}}  component={OnboardingScreen}/>
    <Stack.Screen  name="scan"   component={DeatailsOverview}/>
    <Stack.Screen   name="Home" component={HomeScreen}/>
    <Stack.Screen name="ScanScreen" component={ScanningScreen}/>
    <Stack.Screen name="DrugDetails" component={DrugDetailsScreen}/>
    <Stack.Screen  name="AboutScreen" component={AboutScreen}/>
    <Stack.Screen  name="ReportScreen"component={ReportScreen}/>
    <Stack.Screen name="WebsiteScreen" component={WebsiteScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    )
};


export default StackNavigator;