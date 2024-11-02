import { Stack, Tabs } from "expo-router";
import {View} from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';


export default function screens() {
  return (

    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue', headerShown: false}}>
    <Tabs.Screen
        name="home"
        options={{
          title: 'home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="plant_locked"
        options={{
          title: 'plant_locked',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="plant_found"
        options={{
          title: 'plant_found',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      
    </Tabs>

  );
}
