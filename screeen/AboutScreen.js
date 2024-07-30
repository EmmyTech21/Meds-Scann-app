import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

const keyFeatures = [
  'Immutable Ledger: Ensures a secure and permanent record of all transactions.',
  'Permission Network: Grants access only to authorized entities, enhancing security.',
  'Real-Time Monitoring: Continuously tracks and records environmental conditions.',
  'Smart Contracts: Automates regulatory compliance and other contractual obligations.',
];

const WhyMedScan = [
  'Tailored Solution: Designed specifically for the Nigerian market, addressing challenges and opportunities.',
  'Partnerships: Collaborating with key stakeholders, including local manufacturers and regulatory bodies to drive industry-wide change.',
  'Innovation: Continuously improving our technology to stay ahead of counterfeit threats and ensure the highest standards of product safety.',
  'At MedScan, we believe in the power of technology to create safer and more transparent supply chains. Join us in our mission to protect consumers and promote genuine products in Nigeria.',
];


export default function AboutScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.aboutContainer}>
          <Text style={styles.textHeading}>About MedScan</Text>
          <Text style={styles.textArea}>
            MedScan is at the forefront of transforming the supply chain landscape in Nigeria, focusing on the critical sectors of drugs, food and beverages.
            Leveraging advanced blockchain technology, MedScan ensures the integrity, transparency, and safety of products from production to consumption.
          </Text>
          <Text style={styles.textHeading}>Our Mission</Text>
          <Text style={styles.textArea}>
            Our mission is to combat counterfeit products and enhance consumer trust by providing a secure, transparent, and efficient supply chain solution.
            We strive to safeguard public health and bolster the economy by ensuring that only genuine, high-quality products reach the market.
          </Text>
          <Text style={styles.textHeading}>What We Do</Text>
          <Text style={styles.textArea}>
            MedScan utilizes blockchain technology to create an immutable, tamper-proof record of every transaction in the supply chain.
            Our platform provides real-time monitoring, smart contract automation, and end-to-end traceability, making it easier to detect and eliminate counterfeit products.
            By working closely with manufacturers, distributors, regulators, and consumers, we create a trustworthy ecosystem where product integrity is paramount.
          </Text>
          <Text style={styles.textHeading}>Key Features</Text>
          {keyFeatures.map((feature, index) => (
            <Text key={index} style={styles.textArea}>{`\u2022 ${feature}`}</Text>
          ))}

        <Text style={styles.textHeading}>WhyMedScan</Text>
        {WhyMedScan.map((whyscan, index) => (<Text style={styles.textArea} key={index}>{`\u2022 ${whyscan}`}</Text>) )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  scrollViewContent: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  aboutContainer: {
    flex: 1,
  },
  textHeading: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
  },
  textArea: {
    fontSize: 15,
    marginVertical: 10,
    fontWeight: '500',
  },
});
