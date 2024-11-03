import { Stack } from "expo-router";
import {router} from 'expo-router'

export default function RootLayout() {
  return (
    <Stack screenOptions={{headerShown: false}}>
      <Stack.Screen name="screens" />
    </Stack>
  );
}