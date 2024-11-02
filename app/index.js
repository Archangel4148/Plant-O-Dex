import { Text, View, Pressable } from "react-native";
import { StyleSheet } from "react-native";
import {router} from 'expo-router';

const routeToHome = () => {
  router.push('screens/home');
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
