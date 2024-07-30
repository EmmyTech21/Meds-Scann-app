import { useEffect } from "react";
import { Image, StyleSheet, View } from "react-native";


export default function WelcomeScreen({navigation}) {
  
   useEffect(()=>{
    const timer = setTimeout(()=>{
        navigation.replace('Onboarding');
    }, 10000);

    return ()=> clearTimeout(timer);
   },[navigation])

   return(
    <View  style={styles.welContainer}>
        <Image style={styles.image} source={require('../Images/Welcome-Screen.png')}/>
    </View>
   )
}


const styles = StyleSheet.create({
 welContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
 },
 image:{
    width: 300,
    height: 300,
 }
})