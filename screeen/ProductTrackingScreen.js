import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Platform,SafeAreaView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const trackingData = [
  {
    id: '1',
    location: 'Arrived at pham centre, ikeja lagos',
    date: '05-06-2024',
    time: '12:43pm',
    scanned: true,
    stayDuration: 'Product stayed 4 days',
    departure: 'Product Departed 09-06-2024 at 15:33pm',
  },
  {
    id: '2',
    location: 'Carried by local transport',
    date: '09-06-2024',
    time: '15:45pm',
    scanned: false,
  },
  {
    id: '3',
    location: 'Arrived at goodson stores, agege lagos',
    date: '09-06-2024',
    time: '16:44pm',
    scanned: false,
    stayDuration: 'Product stayed 2 days',
    departure: 'Product Departed 11-06-2024 at 15:33pm',
  },
  {
    id: '4',
    location: 'Carried by local transport',
    date: '11-06-2024',
    time: '15:45pm',
    scanned: false,
  },
  {
    id: '5',
    location: 'Arrived at no. 10, alimosho, lagos',
    date: '11-06-2024',
    time: '17:44pm',
    scanned: true,
    stayDuration: 'Product staying over 15 days',
  },
];

const ProductTrackingScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.iconTextRow}>
        <Ionicons name="location-outline" size={20} color="#333" />
        <Text style={styles.locationText}>{item.location}</Text>
      </View>
      <Text style={styles.dateText}>Date: {item.date} Time: {item.time}</Text>
      <Text style={styles.scanStatus}>{item.scanned ? 'Product was scanned' : 'Product was not scanned'}</Text>
      {item.stayDuration && <Text style={styles.stayText}>{item.stayDuration}</Text>}
      {item.departure && <Text style={styles.departureText}>{item.departure}</Text>}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name={Platform.OS === 'ios' ? 'chevron-back' : 'arrow-back'} size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Product 1 Tracking</Text>
      </View>

      <FlatList
        data={trackingData}
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
  listContainer: {
    padding: 16,
  },
  itemContainer: {
    marginBottom: 24,
  },
  iconTextRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  locationText: {
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 8,
  },
  dateText: {
    color: '#333',
    marginBottom: 4,
  },
  scanStatus: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  stayText: {
    color: '#555',
    marginBottom: 4,
  },
  departureText: {
    color: '#555',
  },
});

export default ProductTrackingScreen;
