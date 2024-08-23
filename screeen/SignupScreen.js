import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import axios from 'axios';

const SignUpScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isChecked, setChecked] = useState(false);
  const [role, setRole] = useState('user'); 

  const handleSignup = async () => {
    if (!fullName || !email || !phoneNumber || !password || !confirmPassword || !isChecked) {
      Alert.alert('Error', 'Please fill out all fields and agree to the terms.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    try {
      console.log('Attempting to register user with the following details:');
      console.log('Full Name:', fullName);
      console.log('Email:', email);
      console.log('Phone Number:', phoneNumber);

      console.log('Role:', role);

      const response = await axios.post('https://meds-scan-backend.vercel.app/api/auth/register', {
        fullName,
        email,
        phoneNumber,
        password,
        role,
      });

      console.log('Server Response:', response.data);

      // Check if the response indicates success based on the "message" field
      if (response.data.message === 'Account created successfully') {
        Alert.alert('Success', 'Registration successful!', [
          { text: 'OK', onPress: () => navigation.navigate('Sign-inStore') }
        ]);
      } else {
        console.error('Registration failed:', response.data.message || 'Unknown error');
        Alert.alert('Error', response.data.message || 'Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Signup Error:', error.message);
      if (error.response) {
        // Server responded with a status other than 200 range
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        console.error('Response headers:', error.response.headers);
      } else if (error.request) {
        // Request was made but no response was received
        console.error('Request data:', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error message:', error.message);
      }
      Alert.alert('Error', 'An error occurred during registration. Please check your network connection and try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../Images/Group 27google.png')}
        style={styles.logo}
      />
      <Text style={styles.headerText}>Sign Up</Text>
      <Text style={styles.subHeaderText}>You are creating an account as a Consumer</Text>
      <Text style={styles.subText}>Your approval is subject to thorough verification</Text>

      <TextInput
        placeholder="Full Name"
        style={styles.input}
        value={fullName}
        onChangeText={setFullName}
      />
      <TextInput
        placeholder="Email Address"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Phone Number"
        style={styles.input}
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      {/* <TextInput
        placeholder="Date of Birth"
        style={styles.input}
        value={dob}
        onChangeText={setDob}
      /> */}
      <TextInput
        placeholder="Password"
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        placeholder="Confirm Password"
        style={styles.input}
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <View style={styles.checkboxContainer}>
        <BouncyCheckbox
          size={25}
          fillColor="#007BFF"
          unfillColor="#FFFFFF"
          text="I Agree with Company Policy, Privacy Policy and Terms of Service"
          iconStyle={{ borderColor: "#007BFF" }}
          textStyle={{ color: "#666", textDecorationLine: "none" }}
          onPress={(checked) => setChecked(checked)}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Sign-in')}>
        <Text style={styles.signInText} >Already have an account? Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  logo: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
    color: '#000',
  },
  subHeaderText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
    color: '#4A4A4A',
  },
  subText: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
    color: '#888888',
  },
  input: {
    borderColor: '#E0E0E0',
    borderWidth: 1,
    padding: 15,
    borderRadius: 5,
    marginBottom: 15,
    backgroundColor: '#F8F8F8',
    fontSize: 16,
    color: '#333',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signInText: {
    color: '#007BFF',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default SignUpScreen;
