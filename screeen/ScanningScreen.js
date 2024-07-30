import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, Alert } from "react-native";
import { Camera, CameraView } from "expo-camera";

export default function ScanningScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getCameraPermissions();
  }, []);

  const handleBarCodeScanned = async ({ type, data }) => {
    if (scanned) return;

    setScanned(true);
    console.log(`Scanning barcode: ${data}`);

    let issn = null;

    try {
      // Attempt to parse the data as a URL
      const url = new URL(data);

      // Extract the ISSN from the URL query parameters
      issn = url.searchParams.get("issn");

      if (!issn) {
        throw new Error('ISSN not found in URL');
      }
      
      console.log(`Extracted ISSN from URL: ${issn}`);
    } catch (e) {
      // If data is not a URL, treat it as a direct ISSN
      issn = data;
      console.log(`Scanned data is not a URL, using data as ISSN: ${issn}`);
    }

    // Validate ISSN
    if (!issn || isNaN(Number(issn))) {
      Alert.alert("Invalid QR Code", "The scanned QR code does not contain a valid ISSN.");
      setScanned(false);
      return;
    }

    // Fetch drug details from API
    try {
      const apiUrl = `https://meds-scan-backend.vercel.app/api/products/scan/productIPR?issn=${encodeURIComponent(issn)}`;
      console.log(`Fetching data from: ${apiUrl}`);

      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(`Response status: ${response.status}`);

      if (!response.ok) {
        const errorText = await response.text();
        console.error(`Error response: ${errorText}`);
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const drugDetails = await response.json();
      console.log("Fetched drug details:", drugDetails);
      navigation.navigate("DrugDetails", { drugDetails });
    } catch (error) {
      console.error("Error fetching drug details:", error);
      Alert.alert("Error", `Failed to fetch drug details: ${error.message}`);
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <CameraView
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
        barcodeScannerSettings={{
          barcodeTypes: ["qr", "pdf417"],
        }}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
});
