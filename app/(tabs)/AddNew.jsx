
import { View, Text, StyleSheet } from "react-native";

export default function AddNew() {
  return (
    <View style={styles.center}>
      <Text style={styles.text}>Add New Content Here</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
