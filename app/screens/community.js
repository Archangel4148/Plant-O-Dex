import { View, ScrollView, Text } from "react-native";
import { StyleSheet } from "react-native";

const generatePost = () => {
    const postArr = []
    let post;
    for (let i = 0; i < 20; i++) {
        post = <View key={i} style={styles.postContainer}>
                    <View style={styles.upperPost}>
                        <View style={styles.profilePicture}></View>
                        <Text style={{}}>USER Found a PLANT_NAME!!!</Text>
                    </View>
                    <View style={styles.lowerPost}>
                        <View style={styles.picture}></View>
                    </View>
               </View>;
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
    width: 380,
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',

    gap: 5,
    
  },
  upperPost: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

    gap: 20,

    marginRight: 'auto',
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 100,
    borderColor: 'black',
    borderWidth: 3,
  },
  picture: {
    width: 360,
    height: 360,

    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 10,
  },
 
})
  