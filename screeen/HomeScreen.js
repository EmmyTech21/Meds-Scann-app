import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { homeLinks } from '../data/data-links';
import NavLinks from '../components/NavLinks';

export default function HomeScreen({ navigation }) {
  function pressHandler(id, title) {
    navigation.navigate('scan', { detailId: id, name: title });
  }

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={homeLinks}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <NavLinks
            title={itemData.item.title}
            id={itemData.item.id}
            images={itemData.item.image}
            onPress={() => pressHandler(itemData.item.id, itemData.item.title)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f8f8f8',
  },
});
