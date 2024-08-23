import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Platform,SafeAreaView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const scanData = [
  { id: '1', product: 'Pdt 1', date: '05/07/2024', status: 'Original' },
  { id: '2', product: 'Pdt 2', date: '05/07/2024', status: 'Original' },
  { id: '3', product: 'Pdt 3', date: '05/07/2024', status: 'Original' },
  { id: '4', product: 'Pdt 4', date: '05/07/2024', status: 'Counterfeit' },
  { id: '5', product: 'Pdt 5', date: '05/07/2024', status: 'Original' },
  { id: '6', product: 'Pdt 6', date: '05/07/2024', status: 'Original' },
];

const ScanHistoryScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.product}</Text>
      <Text style={styles.cell}>{item.date}</Text>
      <Text style={[styles.cell, item.status === 'Original' ? styles.statusOriginal : styles.statusCounterfeit]}>
        {item.status}
      </Text>
      <TouchableOpacity style={styles.trackButton} onPress={() => navigation.navigate('ProductTrackingScreen')}>
        <Text style={styles.trackButtonText}>Track</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name={Platform.OS === 'ios' ? 'chevron-back' : 'arrow-back'} size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Scan History</Text>
      </View>
      
      <View style={styles.tableHeader}>
        <Text style={styles.tableHeaderText}>Products</Text>
        <Text style={styles.tableHeaderText}>Scanned date</Text>
        <Text style={styles.tableHeaderText}>Status</Text>
        <Text style={styles.tableHeaderText}>Track</Text>
      </View>
      
      <FlatList
        data={scanData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#007BFF',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  tableHeaderText: {
    fontWeight: 'bold',
    color: '#333',
    width: '25%',
    textAlign: 'center',
  },
  listContainer: {
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  cell: {
    width: '25%',
    textAlign: 'center',
    alignSelf: 'center',
  },
  statusOriginal: {
    color: 'green',
  },
  statusCounterfeit: {
    color: 'red',
  },
  trackButton: {
    backgroundColor: '#007BFF',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  trackButtonText: {
    color: 'white',
  },
});

export default ScanHistoryScreen;
