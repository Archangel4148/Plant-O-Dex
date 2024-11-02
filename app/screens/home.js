import { Text, View } from "react-native";
import { StyleSheet } from "react-native";

export default function home() {
  return (
    <View
      style={
        styles.container
      }
    >
      <Text>This is the homepage</Text>
    </View>
  );
}
const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'blue',
  }
}
