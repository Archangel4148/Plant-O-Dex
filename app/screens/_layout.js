import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{headerShown: false}}>
      <Stack.Screen name="home" />
      <Stack.Screen name="plant_locked" />
      <Stack.Screen name="plant_found" />


    </Stack>
  );
}
