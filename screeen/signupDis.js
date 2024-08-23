import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import axios from 'axios';

export default function SignUpScreenDis({ navigation }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
//   const [dob, setDob] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [businessLocation, setBusinessLocation] = useState('');
  const [businessRegistrationNumber, setBusinessRegistrationNumber] = useState('');
  const [taxIdentificationNumber, setTaxIdentificationNumber] = useState('');
  const [password, setPassword] = useState('');
  const [govtIdImage, setGovtIdImage] = useState(null);
  const [cacCertImage, setCacCertImage] = useState(null);

  const selectImage = (setImage) => {
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = { uri: response.uri, name: response.fileName, type: response.type };
        setImage(source);
      }
    });
  };

  const handleSignup = async () => {
    const formData = new FormData();
    formData.append('fullName', fullName);
    formData.append('email', email);
    formData.append('phoneNumber', phoneNumber);
    // formData.append('birthDate', dob);
    formData.append('businessName', businessName);
    formData.append('businessLocation', businessLocation);
    formData.append('businessRegistrationNumber', businessRegistrationNumber);
    formData.append('taxIdentificationNumber', taxIdentificationNumber);
    formData.append('password', password);
    
    if (govtIdImage) {
      formData.append('govtIdImage', {
        uri: govtIdImage.uri,
        name: govtIdImage.name,
        type: govtIdImage.type,
      });
    }

    if (cacCertImage) {
      formData.append('cacCertImage', {
        uri: cacCertImage.uri,
        name: cacCertImage.name,
        type: cacCertImage.type,
      });
    }

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
      console.error('Signup Error: ', error);
      Alert.alert('Error', 'An error occurred during registration.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <Text style={styles.subtitle}>You are creating an account as a Distributor</Text>
      <Text style={styles.subtitle}>Your approval is subject to thorough verification</Text>

      <TextInput style={styles.input} placeholder="Full Name" value={fullName} onChangeText={setFullName} />
      <TextInput style={styles.input} placeholder="Email Address" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Phone Number" value={phoneNumber} onChangeText={setPhoneNumber} />
      {/* <TextInput style={styles.input} placeholder="Date of Birth" value={dob} onChangeText={setDob} /> */}
      <TextInput style={styles.input} placeholder="Business Name" value={businessName} onChangeText={setBusinessName} />
      <TextInput style={styles.input} placeholder="Business Location" value={businessLocation} onChangeText={setBusinessLocation} />
      <TextInput style={styles.input} placeholder="Business Registration Number" value={businessRegistrationNumber} onChangeText={setBusinessRegistrationNumber} />
      <TextInput style={styles.input} placeholder="Tax Identification Number" value={taxIdentificationNumber} onChangeText={setTaxIdentificationNumber} />
      <TextInput style={styles.input} placeholder="Password" value={password} secureTextEntry onChangeText={setPassword} />

      <TouchableOpacity style={styles.fileInput} onPress={() => selectImage(setGovtIdImage)}>
        <Text>Government Issued ID (Choose File)</Text>
        {govtIdImage && <Image source={{ uri: govtIdImage.uri }} style={styles.imagePreview} />}
      </TouchableOpacity>

      <TouchableOpacity style={styles.fileInput} onPress={() => selectImage(setCacCertImage)}>
        <Text>CAC Certificate (Choose File)</Text>
        {cacCertImage && <Image source={{ uri: cacCertImage.uri }} style={styles.imagePreview} />}
      </TouchableOpacity>

      <Button title="Submit" onPress={handleSignup} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
  },
  fileInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
    justifyContent: 'center',
  },
  imagePreview: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
});
