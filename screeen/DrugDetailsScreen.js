import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function DrugDetailsScreen({ route }) {
  const { drugDetails } = route.params;

  console.log("Drug details received in DrugDetailsScreen:", drugDetails);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Product Information</Text>
      <View style={styles.card}>
        {drugDetails ? (
          <>
            {drugDetails.productInformation && (
              <>
                <View style={styles.row}>
                  <View style={styles.column}>
                    <Text style={styles.label}>Product Name:</Text>
                    <Text style={styles.value}>{drugDetails.productInformation.productName}</Text>
                  </View>
                  <View style={styles.column}>
                    <Text style={styles.label}>Manufacturer:</Text>
                    <Text style={styles.value}>{drugDetails.manufacturerInformation.manufacturerName}</Text>
                  </View>
                </View>
                <View style={styles.columnFull}>
                  <Text style={styles.label}>Product Category:</Text>
                  <Text style={styles.value}>
                    {drugDetails.productInformation.productCategory || "Not available"}
                  </Text>
                </View>
                <View style={styles.columnFull}>
                  <Text style={styles.label}>Product Description:</Text>
                  <Text style={styles.value}>
                    {drugDetails.productInformation.productDescription || "Not available"}
                  </Text>
                </View>
                <View style={styles.columnFull}>
                  <Text style={styles.label}>ISSN:</Text>
                  <Text style={styles.value}>
                    {drugDetails.productInformation.issn || "Not available"}
                  </Text>
                </View>
              </>
            )}
            {drugDetails.manufacturerInformation && (
              <>
                <View style={styles.columnFull}>
                  <Text style={styles.label}>Contact Person:</Text>
                  <Text style={styles.value}>
                    {drugDetails.manufacturerInformation.contactPerson || "Not available"}
                  </Text>
                </View>
                <View style={styles.columnFull}>
                  <Text style={styles.label}>Email Address:</Text>
                  <Text style={styles.value}>
                    {drugDetails.manufacturerInformation.emailAddress || "Not available"}
                  </Text>
                </View>
                <View style={styles.columnFull}>
                  <Text style={styles.label}>Phone Number:</Text>
                  <Text style={styles.value}>
                    {drugDetails.manufacturerInformation.phoneNumber || "Not available"}
                  </Text>
                </View>
              </>
            )}
            {drugDetails.packageInformation && (
              <>
                <View style={styles.columnFull}>
                  <Text style={styles.label}>Package Size:</Text>
                  <Text style={styles.value}>
                    {drugDetails.packageInformation.packageSize || "Not available"}
                  </Text>
                </View>
                <View style={styles.columnFull}>
                  <Text style={styles.label}>Total Packages:</Text>
                  <Text style={styles.value}>
                    {drugDetails.packageInformation.totalPackages || "Not available"}
                  </Text>
                </View>
                <View style={styles.columnFull}>
                  <Text style={styles.label}>SKU:</Text>
                  <Text style={styles.value}>
                    {drugDetails.packageInformation.sku || "Not available"}
                  </Text>
                </View>
              </>
            )}
          </>
        ) : (
          <Text>No product information available.</Text>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  column: {
    flex: 1,
  },
  columnFull: {
    flexDirection: "column",
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  value: {
    fontSize: 16,
    color: "#666",
  },
});
