import { Tabs } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: "white" },
        headerTintColor: "black",

        headerTitleContainerStyle: {
          width: "100%",
          paddingHorizontal: 16,
        },
        headerTitleAlign: "left",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Chats",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbox-outline" size={size} color={color} />
          ),
          headerTitle: () => (
            <View style={styles.headerRow}>
              <Text style={styles.headerText}>WhatsApp</Text>

              <View style={styles.iconRow}>
                <Feather name="camera" size={22} color="black" />
                <MaterialIcons name="more-vert" size={22} color="black" />
              </View>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="call"
        options={{
          title: "Calls",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="call" size={size} color={color} />
          ),
          headerTitle: () => (
            <View style={styles.headerRow}>
              <Text style={styles.headerText}>Calls</Text>

              <View style={styles.iconRow}>
                <EvilIcons name="search" size={26} color="black" />
                <Feather name="camera" size={22} color="black" />
                <MaterialIcons name="more-vert" size={22} color="black" />
              </View>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="updates"
        options={{
          title: "Updates",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="history" size={size} color={color} />
          ),
          headerTitle: () => (
            <View style={styles.headerRow}>
              <Text style={styles.headerText}>Updates</Text>

              <View style={styles.iconRow}>
                <EvilIcons name="search" size={26} color="black" />
                <Feather name="camera" size={22} color="black" />
                <MaterialIcons name="more-vert" size={22} color="black" />
              </View>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="tools"
        options={{
          title: "Tools",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="toolbox" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}


const styles = StyleSheet.create({
  headerRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    color: "black",
    fontSize: 24,
    fontWeight: "600",
  },
  iconRow: {
    flexDirection: "row",
    gap: 12,
  },
});
