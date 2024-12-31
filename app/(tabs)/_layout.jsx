import { Tabs } from "expo-router";
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: "#f8f8f8" },
        headerTintColor: "#333",
        tabBarActiveTintColor: "#2f95dc",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen
        name="index" // Maps to app/(tabs)/index.jsx (Home screen)
        options={{
          tabBarIcon: ({ color, size }) => (
           <Entypo name="home" size={24} color="red"/>
          ),
          tabBarLabel: "Home",
        }}
      />
      <Tabs.Screen
        name="AddNew"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo
              name="add-user"
              color={"blue"}
              size={24}
            />
          ),
          tabBarLabel: "Add New",
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="face-man-profile"
              size={24}
              color={"yellow"}
            />
          ),
          tabBarLabel: "Profile",
        }}
      />
    </Tabs>
  );
}
