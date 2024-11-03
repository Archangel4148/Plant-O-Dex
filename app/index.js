import { Text, View, Pressable } from "react-native";
import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import {router} from 'expo-router';
import { useEffect } from "react";

const routeToHome = () => {
  router.push('screens/home');
}

const routeToLocked = () => {
  router.push('screens/plant_locked');
}

export default function Index() {
  const [loaded, error] = useFonts({
    'JetBrains': require('@/assets/fonts/JetBrainsMono-Medium.ttf'),
    'KunlimPark': require('@/assets/fonts/KulimPark-Bold.ttf'),
  });
  
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Pressable onPress={routeToHome} style={styles.button}>
        <Text style={styles.buttonText}>Click here to route home</Text>
      </Pressable>
    </View>
  );
}

const styles = {
  button: {
    borderRadius: 10,
    borderColor: 'blue',
    borderWidth: 2,
    padding: 10,
  },
  buttonText: {
    color: 'blue',
  }
}
