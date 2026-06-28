import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#151522",
          borderTopColor: "#2A2A3C",
        },
        tabBarActiveTintColor: "#7C3AED",
        tabBarInactiveTintColor: "#A1A1AA",
      }}
    >
      <Tabs.Screen name="index" options={{ title: "Home", tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} /> }} />
      <Tabs.Screen name="chat" options={{ title: "Chat", tabBarIcon: ({ color, size }) => <Ionicons name="chatbubble" size={size} color={color} /> }} />
      <Tabs.Screen name="playlist" options={{ title: "Playlist", tabBarIcon: ({ color, size }) => <Ionicons name="musical-notes" size={size} color={color} /> }} />
      <Tabs.Screen name="player" options={{ title: "Player", tabBarIcon: ({ color, size }) => <Ionicons name="play-circle" size={size} color={color} /> }} />
      <Tabs.Screen name="library" options={{ title: "Library", tabBarIcon: ({ color, size }) => <Ionicons name="library" size={size} color={color} /> }} />
      <Tabs.Screen name="profile" options={{ title: "Profile", tabBarIcon: ({ color, size }) => <Ionicons name="person" size={size} color={color} /> }} />
    </Tabs>
  );
}
