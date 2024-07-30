import React from "react";
import { Button, Image, Text, View, StyleSheet } from "react-native";

export default function ListDetails({ title, button, image, navigation }) {
  const handlePress = () => {
    if (button === "Website") {
      navigation.navigate('WebsiteScreen', { name: title });
    } else if (button === "view about") {
      navigation.navigate('AboutScreen', { name: title });
    } else if (button === "Report") {
      navigation.navigate('ReportScreen', { name: title });
    } else if (button === "scan"){
      navigation.navigate('ScanScreen', { name: title });
    }
  };

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Button title={button} onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 10,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 10,
  },
  title: {
    marginTop: 50,
    fontSize: 18,
    marginBottom: 10,
  },
});
