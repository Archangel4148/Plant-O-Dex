import { Stack, Tabs } from "expo-router";
import {View} from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


export default function screens() {
  return (

    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue', headerShown: false}}>
    <Tabs.Screen
        name="community"
        options={{
          title: 'Community',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
    <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="cards-playing-spade-multiple-outline" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="personal_deck"
        options={{
          title: 'Personal Deck',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="cards-playing-spade-multiple-outline" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <FontAwesome name="cog" size={24} color={color} />,
        }}
      />
      
      <Tabs.Screen
        name="plant_locked"
        options={{
          title: 'plant_locked',
          href: null,
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="plant_found"
        options={{
          title: 'plant_found',
          href: null,
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      
      
    </Tabs>

  );
}
