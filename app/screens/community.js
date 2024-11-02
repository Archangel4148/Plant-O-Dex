import { View, ScrollView, Text } from "react-native";
import { StyleSheet } from "react-native";

const generatePost = () => {
    const postArr = []
    let post;
    for (let i = 0; i < 20; i++) {
        post = <View key={i} style={styles.postContainer}></View>;
        postArr.push(post)
    }
    return postArr;
}

export default function community() {
    return (
      <View>

    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Community</Text>
    </View>

    <ScrollView>
        <View style={styles.webContainer}>
        {generatePost()}

        </View>
    </ScrollView>

    </View>
    );
  }
  
 const styles = StyleSheet.create({
  webContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    gap: 10,
    marginTop: 10,
  },
  headerContainer: {
    backgroundColor: '#d2d3db',
    borderRadius: 10,

    width: '100%',
    height: 100,

    display: 'flex',
    justifyContent: 'center',
    alignItems:'center',
    alignContent: 'center'
  },
  headerText: {
    fontSize: 24,
    marginTop: 'auto',
    marginBottom: 15,
  },
  postContainer: {
    backgroundColor: "gray",
    width: 380,
    height: 80,
  }
 
})
  