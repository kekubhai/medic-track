import { View, Text, StyleSheet, Button } from "react-native";
import Entypo from '@expo/vector-icons/Entypo';
import { Redirect } from "expo-router";
import { signOut } from "firebase/auth";
import { auth} from "../../config/firebase"
import Header from "../../components/Header";

export default function Home() {
  return (
    <View style={{
      padding:25,
      backgroundColor:'white',
      height:'200%',
    }}>
     <Header/>
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
