import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function ScanHistoryScreen() {
  const data = [
    { id: 1, product: 'Pdt 1', date: '05/07/2024', status: 'Original' },
    { id: 2, product: 'Pdt 2', date: '05/07/2024', status: 'Original' },
    { id: 3, product: 'Pdt 3', date: '05/07/2024', status: 'Original' },
    { id: 4, product: 'Pdt 4', date: '05/07/2024', status: 'Counterfeit' },
    { id: 5, product: 'Pdt 5', date: '05/07/2024', status: 'Original' },
    { id: 6, product: 'Pdt 6', date: '05/07/2024', status: 'Original' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scan History</Text>
      {data.map((item) => (
        <View key={item.id} style={styles.row}>
          <Text>{item.product}</Text>
          <Text>{item.date}</Text>
          <Text style={item.status === 'Counterfeit' ? styles.counterfeit : styles.original}>
            {item.status}
          </Text>
          <Button title="Track" onPress={() => {}} />
        </View>
      ))}
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
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    alignItems: 'center',
  },
  counterfeit: {
    color: 'red',
  },
  original: {
    color: 'green',
  },
});
