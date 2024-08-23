import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const CategoryScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../Images/Welcome-Screen.png')} 
        style={styles.logo}
      />
      <Text style={styles.title}>Kindly select a category below</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Sign-in')}>
          <Text style={styles.buttonText}>Consumer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Sign-inDis')}>
          <Text style={styles.buttonText}>Distributors</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Sign-inStore')}>
          <Text style={styles.buttonText}>Stores</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 90,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    buttonContainer: {
        width: '80%',
        justifyContent: 'space-between',
        flexDirection:'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 5,
    },
    button: {
        backgroundColor: '#Ffff',
        padding: 15,
        marginVertical: 30,
        borderRadius: 10,
        width: '45%',
        height: '50%',
        alignItems: 'center',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    buttonText: {
        fontSize: 16,
        paddingTop: 40,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default CategoryScreen;
