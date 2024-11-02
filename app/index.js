import { Text, View, Pressable } from "react-native";
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
      <Pressable onPress={routeToHome}>
        <Text>Click here to route home</Text>
      </Pressable>
    </View>
  );
}
