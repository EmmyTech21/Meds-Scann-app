import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Camera } from 'expo-camera';

const ReportScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [image, setImage] = useState(null);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleImagePicker = async (source) => {
  let result;

  try {
    if (source === 'camera') {
      const { status } = await Camera.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera permissions to make this work!');
        return;
      }
      result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        base64: true, // Ensure this option is set
      });
    } else {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
        return;
      }
      result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        base64: true, // Ensure this option is set
      });
    }

    // Check if the result was canceled or if base64 is undefined
    if (result.canceled) {
      alert('Image selection was canceled');
      return;
    }

    if (result.assets && result.assets[0] && result.assets[0].base64) {
      setImage(result.assets[0].base64);
    } else {
      alert('Failed to retrieve image base64 data');
    }
  } catch (error) {
    console.error('Error picking image:', error);
    alert('Error picking image');
  }
};


  const handleSubmit = async () => {
  if (!name.trim()) {
    Alert.alert('Validation Error', 'Name is required');
    return;
  }

  if (!validateEmail(email)) {
    Alert.alert('Validation Error', 'Please enter a valid email address');
    return;
  }

  if (!message.trim()) {
    Alert.alert('Validation Error', 'Message is required');
    return;
  }

  if (!image) {
    Alert.alert('Validation Error', 'Please add an image');
    return;
  }

  try {
    const response = await fetch('https://meds-scan-backend.vercel.app/api/reports', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, phoneNumber, message, image }),
    });

    const responseData = await response.json();
    console.log('Response data:', responseData);

    if (response.ok) {
      alert('Report submitted successfully');
      setName('');
      setEmail('');
      setPhoneNumber('');
      setMessage('');
      setImage(null);
    } else {
      Alert.alert('Error', `Error submitting report: ${responseData.message || 'Unknown error'}`);
    }
  } catch (error) {
    console.error('Error:', error);
    Alert.alert('Error', 'Error submitting report: ' + error.message);
  }
};


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Report Fake Product</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
      />
      <TextInput
        style={[styles.input, styles.messageInput]}
        placeholder="Message"
        value={message}
        onChangeText={setMessage}
        multiline
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.imagePicker} onPress={() => handleImagePicker('camera')}>
          <Text style={styles.imagePickerText}>Take Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.imagePicker} onPress={() => handleImagePicker('library')}>
          <Text style={styles.imagePickerText}>Add Image</Text>
        </TouchableOpacity>
      </View>
      {image ? (
        <Image source={{ uri: `data:image/jpeg;base64,${image}` }} style={styles.imagePreview} />
      ) : (
        <Text style={styles.noImageText}>Please add an image</Text>
      )}
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  messageInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  imagePicker: {
    backgroundColor: '#007BFF',
    padding: 10,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  imagePickerText: {
    color: '#fff',
  },
  imagePreview: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  noImageText: {
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default ReportScreen;
