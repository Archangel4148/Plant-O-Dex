import { View, ScrollView, Text, Image } from "react-native";
import { StyleSheet } from "react-native";
import { iconPaths } from "../../assets/user_icons/icon_paths";
import {ImageView} from '@/components/ImageView.js';

// Function to get a random icon from the iconPaths
const getRandomIcon = () => {
  const keys = Object.keys(iconPaths);
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  return iconPaths[randomKey];
};

function getRandomImagePath() {
  // Get the keys (plant names) from the ImageView object
  const plantNames = Object.keys(ImageView);
  
  // Generate a random index based on the length of the array
  const randomIndex = Math.floor(Math.random() * plantNames.length);
  
  // Get the random plant name using the random index
  const randomPlantName = plantNames[randomIndex];
  
  // Return the corresponding image path
  return ImageView[randomPlantName];
}

const generatePost = () => {
    const postArr = []
    let profileImagePath;
    let postImagePath;
    let post;
    for (let i = 0; i < 20; i++) {
        profileImagePath = getRandomIcon();
        postImagePath = getRandomImagePath();
        post = <View key={i} style={styles.postContainer}>
                    <View style={styles.upperPost}>
                    <View style={styles.profilePicture}>
                          <Image 
                            source={profileImagePath} 
                            style={{ width: '100%', height: '100%', borderRadius: 10 }} // Adjust styles as needed
                            resizeMode="cover" // or "contain", depending on your preference
                          />
                        </View>
                        <Text style={{}}>USER Found a PLANT_NAME!!!</Text>
                    </View>
                    <View style={styles.lowerPost}>
                        <View style={styles.picture}>
                        <Image 
                            source={postImagePath} 
                            style={{ width: '100%', height: '100%', borderRadius: 10 }} // Adjust styles as needed
                            resizeMode="cover" // or "contain", depending on your preference
                          />
                        </View>
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
  