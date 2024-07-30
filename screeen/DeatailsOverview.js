import { FlatList, Text, View, StyleSheet } from "react-native";
import { Details } from "../data/data-links";
import ListDetails from "../components/ListDetails";

export default function DetailsOverview({ route, navigation }) {
  const { detailId, name } = route.params;

  const displayDetail = Details.filter((deitem) => {
    return deitem.categoryIds.indexOf(detailId) >= 0;
  });

  function renderDetail({ item }) {
    return (
      <ListDetails
        button={item.button}
        image={item.image}
        title={item.title}
        navigation={navigation}
      />
    );
  }

  return (
    <View style={styles.detailsContainer}>
      <Text style={styles.name}>{name}</Text>
      <FlatList
        data={displayDetail}
        keyExtractor={(item) => item.id}
        renderItem={renderDetail}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    flex: 1,
    padding: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});
