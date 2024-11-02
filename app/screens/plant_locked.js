import { Text, View, ScrollView, TextInput, Pressable, Image, Dimensions} from "react-native";
import { StyleSheet } from "react-native";

const plantLockedImage = require('@/assets/temp_images/temp_plant_icon.png');
const {screenWidth, screenHeight} = Dimensions.get('window');

export default function plant_locked() {
  return (
    <View>
        <View styles={styles.headerContainer}>
          <Text style={styles.headerText}>Floradex</Text>
        </View>

        <ScrollView>
          <View style={styles.main}>
            <View>
              <Text style={styles.pageHeader}>Plant Name!</Text>
            </View>
            <View style={styles.imageWrapper}>
              <Image source={plantLockedImage} style={styles.plantImage}/>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    main: {
      width: screenWidth,
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
      fontSize: 24,
      margin: 50,
    },
    pageHeader: {
      fontSize: 20,
      marginTop: 'auto',
      marginBottom: 15,
    },
    imageWrapper: {
      display: 'flex',
      width: '100%',
      alignItems: 'center',
    },
    plantImage: {
      display: 'flex',
      resizeMode: 'contain',
      width: '88%'
      //height: 100,
      //maxWidth: '100%',
    }
  })
  