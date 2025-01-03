import { View, Text, StyleSheet } from "react-native";
import Entypo from '@expo/vector-icons/Entypo';
import { Redirect } from "expo-router";
export default function Home() {
  return (
    <View style={styles.center}>
      <Entypo name="home" size={24} color="black" />
      <Text style={styles.text}>Welcome to the Home Screen</Text>
      <Redirect href={'login'}/>
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
