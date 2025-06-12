import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons';

import { useColorScheme } from "@/lib/useColorScheme";
import { colors } from "@/constants/colors";

export default function TabsLayout() {
  const { colorScheme } = useColorScheme();

  const iconMap: Record<string, { focused: string; unfocused: string }> = {
    index: { focused: 'home', unfocused: 'home-outline' },
    search: { focused: 'search', unfocused: 'search-outline' },
    matches: { focused: 'heart', unfocused: 'heart-outline' },
    messages: { focused: 'chatbubble', unfocused: 'chatbubble-outline' },
    settings: { focused: 'person', unfocused: 'person-outline' },
  };

  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          height: 88,
          paddingTop: 4,
        //   paddingBottom: 8,
          backgroundColor:
            colorScheme === "dark"
              ? colors.dark.background
              : colors.light.background,
        },
        tabBarActiveTintColor:
          colorScheme === "dark"
            ? colors.dark.foreground
            : colors.light.foreground,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color }) => {
          const { focused: focusedName, unfocused: unfocusedName } = iconMap[route.name] || {};
          const name = focused ? focusedName : unfocusedName;
          return <Ionicons name={name as any} size={22} color={color} />;
        },
      })}
    >
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="search" options={{ title: "Search" }} />
      <Tabs.Screen name="matches" options={{ title: "Matches" }} />
      <Tabs.Screen name="messages" options={{ title: "Messages" }} />
      <Tabs.Screen name="settings" options={{ title: "Profile" }} />
    </Tabs>
  );
}
