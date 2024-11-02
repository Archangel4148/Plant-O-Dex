import { Stack } from "expo-router";
import { StyleSheet } from "react-native";

export default function RootLayout() {
  return (
    <Stack screenOptions={{headerShown: false}}>
      <Stack.Screen name="home" />
    </Stack>
  );
}

const styles = {
    container: {
        backgroundColor: 'blue',
    }
}
