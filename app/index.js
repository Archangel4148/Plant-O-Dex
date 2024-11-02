import { Text, View, Pressable } from "react-native";
import { StyleSheet } from "react-native";
import {router} from 'expo-router';

const routeToHome = () => {
  router.push('screens/home');
}

const routeToLocked = () => {
  router.push('screens/plant_locked');
}

export default function Index() {
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
      <Pressable onPress={routeToLocked} style={styles.button}>
        <Text style={styles.buttonText}>Click here to route locked</Text>
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
