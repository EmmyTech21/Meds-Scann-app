import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image, Alert, ScrollView, Keyboard, TouchableWithoutFeedback, ActivityIndicator, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function SignUpScreenDis({ navigation }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [businessLocation, setBusinessLocation] = useState('');
  const [businessRegistrationNumber, setBusinessRegistrationNumber] = useState('');
  const [taxIdentificationNumber, setTaxIdentificationNumber] = useState('');
  const [password, setPassword] = useState('');
  const [govtIdImage, setGovtIdImage] = useState(null);
  const [cacCertImage, setCacCertImage] = useState(null);
  const [loading, setLoading] = useState(false); // Loading state

  const selectImage = async (setImage) => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert("Permission to access camera roll is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage({
        uri: result.assets[0].uri,
        name: result.assets[0].uri.split('/').pop(),
        type: 'image/jpeg',
      });
    }
  };

  const handleSignup = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append('fullName', fullName);
    formData.append('email', email);
    formData.append('phoneNumber', phoneNumber);
    formData.append('businessName', businessName);
    formData.append('businessLocation', businessLocation);
    formData.append('businessRegistrationNumber', businessRegistrationNumber);
    formData.append('taxIdentificationNumber', taxIdentificationNumber);
    formData.append('password', password);
    
    if (govtIdImage) {
      formData.append('govtIdImage', govtIdImage);
    }

    if (cacCertImage) {
      formData.append('cacCertImage', cacCertImage);
    }

    console.log('FormData Payload:', formData); 

    try {
      const response = await axios.post('https://meds-scan-backend.vercel.app/api/auth/register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response.data.success) {
        Alert.alert('Success', 'Registration successful!', [{ text: 'OK', onPress: () => navigation.navigate('Sign-inDis') }]);
      } else {
        Alert.alert('Error', 'Registration failed. Please try again.');
      }
    } catch (error) {
      console.log('Signup Error: ', error);
      Alert.alert('Error', 'An error occurred during registration.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name={Platform.OS === 'ios' ? 'chevron-back' : 'arrow-back'} size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerTxt}>Distribution</Text>
        </View>
        <Text style={styles.title}>Sign Up</Text>
        <Text style={styles.subtitle}>You are creating an account as a Distributor</Text>
        <Text style={styles.subtitle}>Your approval is subject to thorough verification</Text>

        <TextInput style={styles.input} placeholder="Full Name" value={fullName} onChangeText={setFullName} />
        <TextInput style={styles.input} placeholder="Email Address" value={email} onChangeText={setEmail} />
        <TextInput style={styles.input} placeholder="Phone Number" value={phoneNumber} onChangeText={setPhoneNumber} />
        <TextInput style={styles.input} placeholder="Business Name" value={businessName} onChangeText={setBusinessName} />
        <TextInput style={styles.input} placeholder="Business Location" value={businessLocation} onChangeText={setBusinessLocation} />
        <TextInput style={styles.input} placeholder="Business Registration Number" value={businessRegistrationNumber} onChangeText={setBusinessRegistrationNumber} />
        <TextInput style={styles.input} placeholder="Tax Identification Number" value={taxIdentificationNumber} onChangeText={setTaxIdentificationNumber} />
        <TextInput style={styles.input} placeholder="Password" value={password} secureTextEntry onChangeText={setPassword} />

        <View style={styles.imageInputContainer}>
          <TouchableOpacity style={styles.fileInput} onPress={() => selectImage(setGovtIdImage)}>
            <Text>Government Issued ID</Text>
          </TouchableOpacity>
          {govtIdImage && <Image source={{ uri: govtIdImage.uri }} style={styles.imagePreview} />}
        </View>

        <View style={styles.imageInputContainer}>
          <TouchableOpacity style={styles.fileInput} onPress={() => selectImage(setCacCertImage)}>
            <Text>CAC Certificate</Text>
          </TouchableOpacity>
          {cacCertImage && <Image source={{ uri: cacCertImage.uri }} style={styles.imagePreview} />}
        </View>

        <TouchableOpacity onPress={handleSignup} style={styles.submitButton}>
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.submitButtonText}>Submit</Text>
          )}
        </TouchableOpacity>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? 30 : 0,
  },
  headerTxt: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 10,
  },
  input: {
    borderColor: '#ddd',
    borderWidth: 1,
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: '#F5F5F5',
  },
  imageInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fileInput: {
    flex: 1,
    borderColor: '#ddd',
    borderWidth: 1,
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: '#F5F5F5',
  },
  imagePreview: {
    width: 40,
    height: 40,
    marginLeft: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  submitButton: {
    marginTop:10,
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
