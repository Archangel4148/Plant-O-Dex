import { View, ScrollView, Text, Image } from "react-native";
import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";

import { ImageView } from '@/components/ImageView.js';
import { names } from '@/assets/random_usernames.js'
import { getRandomIcon } from '@/assets/user_icons/icon_paths.js'

function getRandomImagePath() {
  // Get the keys (plant names) from the ImageView object
  const plantNames = Object.keys(ImageView);
  
  const randomIndex = Math.floor(Math.random() * plantNames.length);
  
  // Get a random plant name using the random index
  const randomPlantName = plantNames[randomIndex];

  const formattedPlantName = randomPlantName
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter of each word
    .join(' ');
  
  // Return the corresponding image path
  return {
    plantname: formattedPlantName, 
    imagepath: ImageView[randomPlantName]
  };
}

const getRandomUsername = () => {
  const usernames = names.usernames;
  const randomIndex = Math.floor(Math.random() * usernames.length);
  return usernames[randomIndex]; // Return a random username
};

const generatePost = () => {
    const postArr = []
    let profileImagePath;
    let post;
    for (let i = 0; i < 20; i++) {
        profileImagePath = getRandomIcon();
        const { plantname: postPlantName, imagepath: postImagePath } = getRandomImagePath();
        post = 
        <View key={i} style={styles.postContainer}>
          <View style={styles.postHeader}>
            <View style={styles.profilePictureContainer}>
              <Image 
                source={profileImagePath} 
                style={styles.profilePicture}
              />
            </View>
            <Text style={styles.communityPostText}>{getRandomUsername()} Found a {postPlantName.replace(/_/g, " ")}!!!</Text>
          </View>
          <View style={styles.postImageContainer}>
            <Image 
                source={postImagePath} 
                style={styles.postImage}
              />
          </View>
        </View>;
        postArr.push(post)
    }
    return postArr;
}

export default function community() {
  const [loaded, error] = useFonts({
    'JetBrains': require('@/assets/fonts/JetBrainsMono-Medium.ttf'),
    'KunlimPark': require('@/assets/fonts/KulimPark-Bold.ttf'),
  });
    return (
      <View style={{backgroundColor: "#E3FFE5"}}>
        <View style={[styles.headerContainer, {backgroundColor: "#E3FFE5"}]}>
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
    marginBottom: 110,
    marginLeft: 50,
    marginRight: 50,
  },
  communityPostText: {
    fontFamily: 'KumlinPark',
    height: 20,
  },
  postImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    resizeMode: "cover",
  },
  postImageContainer: {
    width: 360,
    height: 360,

    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 10,
  },
  headerContainer: {
    backgroundColor: '#d2d3db',
    borderRadius: 10,

    width: '100%',
    height: 100,

    display: 'flex',
    justifyContent: 'center',
    alignItems:'center',
    alignContent: 'center',
  },
  headerText: {
    fontFamily: 'JetBrains',
    fontSize: 28,
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
  postHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

    gap: 20,

    marginRight: 'auto',
  },
  profilePictureContainer: {
    width: 50,
    height: 50,
    borderRadius: 100,
    borderColor: 'black',
    borderWidth: 3,
  },
  profilePicture: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    resizeMode: 'cover',
  },
  picture: {

  },
 
})
  