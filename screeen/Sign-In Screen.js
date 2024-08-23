import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useAuth();

  const handleSignIn = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password.');
      return;
    }

    try {
      const response = await axios.post('https://meds-scan-backend.vercel.app/api/auth/login', {
        email,
        password,
      });

      if (response.data.token) {
        signIn();
        navigation.navigate('Home');
      } else {
        Alert.alert('Error', response.data.message || 'Sign-in failed. Please try again.');
      }
    } catch (error) {
      Alert.alert('Error', 'An error occurred during sign-in.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Sign In</Text>
      <Text style={styles.subHeaderText}>You are signing in as a Consumer</Text>

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
          <Text style={styles.forgotPasswordText}>Forget Password?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Sign-up')}>
          <Text style={styles.signupLink}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.dividerContainer}>
        <Text style={styles.dividerText}>────────  Sign In with  ────────</Text>
      </View>

      <TouchableOpacity style={styles.googleButton}>
        <Text style={styles.googleButtonText}>G</Text>
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
  headerText: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 10,
    textAlign: 'center',
  },
  subHeaderText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#707070',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    borderColor: '#E0E0E0',
    borderWidth: 1,
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
    backgroundColor: '#F9F9F9',
  },
  checkboxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  checkboxText: {
    color: '#707070',
    fontSize: 14,
  },
  forgotPasswordText: {
    color: '#007BFF',
    fontSize: 14,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  signupText: {
    color: '#707070',
    fontSize: 14,
  },
  signupLink: {
    color: '#007BFF',
    fontSize: 14,
    marginLeft: 5,
  },
  dividerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  dividerText: {
    color: '#C0C0C0',
    fontSize: 14,
  },
  googleButton: {
    backgroundColor: '#4285F4',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    alignSelf: 'center',
    width: 60,
    height: 60,
  },
  googleButtonText: {
    color: '#FFF',
    fontSize: 28,
    fontWeight: 'bold',
  },
});

export default SignInScreen;
