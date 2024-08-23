import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert ,SafeAreaView,Platform} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import axios from 'axios';

const SignInDis = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {

    navigation.navigate('ScanHistoryScreen');
    // if (!email || !password) {
    //   Alert.alert('Error', 'Please enter both email and password.');
    //   return;
    // }

    // try {
    //   const response = await axios.post('https://meds-scan-backend.vercel.app/api/auth/login', {
    //     email,
    //     password,
    //   });

    //   if (response.data.success) {
    //     Alert.alert('Success', 'Sign-in successful!');
    //     // Navigate to the distributor dashboard or home screen
    //     navigation.navigate('Home');
    //   } else {
    //     Alert.alert('Error', response.data.message || 'Sign-in failed. Please try again.');
    //   }
    // } catch (error) {
    //   console.error('SignInDis Error:', error);
    //   Alert.alert('Error', 'An error occurred during sign-in.');
    // }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.component}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={()=>navigation.goBack()}>
          {Platform.OS === 'android' ? (
          <Ionicons name="arrow-back" size={24} color="black" />
        ) : (
          <Ionicons name="chevron-back" size={24} color="black" />
        )}
          </TouchableOpacity>
          <Text style={styles.headerTxt}>Distribution</Text>
        </View>
      <Text style={styles.headerText}>Sign In</Text>
      <Text style={styles.subHeaderText}>You are signing in as a Distributor</Text>
      
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <View style={styles.checkboxContainer}>
        <TouchableOpacity>
          <Text style={styles.checkboxText}>Remember me</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.checkboxText}>Forget Password?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Sign-upDis')}>
        <Text style={styles.signUpText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.googleButton}>
        <Text style={styles.googleButtonText}>Sign In with Google</Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  component:{
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Center the content horizontally
    position: 'relative', // Ensure the absolute position works relative to this
    marginBottom:30
  },
  backButton: {
    position: 'absolute', // Position the back button absolutely
    left:0, // Or whatever padding you need from the left
  },
  headerTxt: {
    textAlign: 'center',
    fontSize: 18, // Adjust the font size as needed
    fontWeight: 'bold', // Optional: makes the text bold
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subHeaderText: {
    fontSize: 18,
    marginBottom: 20,
  },
  input: {
    borderColor: '#ddd',
    borderWidth: 1,
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: '#F5F5F5',
  },
  checkboxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  checkboxText: {
    color: '#777',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signUpText: {
    color: '#007BFF',
    textAlign: 'center',
    marginBottom: 20,
  },
  googleButton: {
    backgroundColor: '#4285F4',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  googleButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SignInDis;
