import { Text, View, ScrollView, TextInput, Pressable, Image, Dimensions} from "react-native";
import { StyleSheet } from "react-native";
import {router, useLocalSearchParams} from 'expo-router'
import {ImageView} from "@/components/ImageView"

const plantLockedImage = require('@/assets/temp_images/temp_plant_icon.png');
const backButtonIcon = require('@/assets/temp_images/temp_back_button.png');
const lockIconImage = require('@/assets/temp_images/temp_lock_icon.png');
const {screenWidth, screenHeight} = Dimensions.get('window');

export default function plant_locked() {
  const {plant} = useLocalSearchParams();
  console.log("Thing: " + String(plant))
  return (
    <View>
        <View styles={styles.headerContainer}>
          <Text style={styles.headerText}>Floradex</Text>
        </View>

        <ScrollView style={styles.mainScroll}>
          <View style={styles.main}>
            <View style={styles.topBar}>
            
        <Pressable 
          key={0} 
          onPress={() => { router.push({
            pathname: "/screens/home"
          }); 
        }}          
        style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}>
          <View style={styles.plantBox}>
          <Image source={backButtonIcon} style={styles.backButton}/>
          </View>
        </Pressable>

              {/* <Image source={backButtonIcon} style={styles.backButton}/> */}
              <View style={styles.pageHeader}>
                <Text style={styles.plantNameText}>{String(plant)}</Text>
                <Text style={styles.plantScientificNameText}>Scientific name here</Text>
              </View>
              <Image source={lockIconImage} style={styles.lockIcon}/>
            </View>
            <View style={styles.imageWrapper}>
              <Image source={ImageView[plant.toLowerCase()]} style={styles.plantImage}/>
            </View>
            <View>
              <Text>Location</Text>
              <Text>The plant is nestled in a sun-dappled clearing within a dense forest.
                Tall trees surround the area, their canopies forming a natural shelter that
                filters the sunlight, creating a warm and slightly humid environment ideal
                for the plant's growth. Moss covers the ground, and a gentle stream flows
                nearby, providing fresh water and creating a serene, almost mystical atmosphere.</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    mainScroll: {
    },
    main: {
      width: screenWidth,
      display: 'flex',
      flexDirection: 'column',
      paddingBottom: 200,
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
    topBar: {
      display: 'flex',
      flexDirection: 'row',
      marginLeft: '2.5%',
      marginRight: '2.5%',
      marginBottom: 20,
    },
    pageHeader: {
      display: 'flex',
      flexDirection: 'column',
      fontSize: 20,
      textAlign: 'center',
      textAlignVertical: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '62.5%',
    },
    plantNameText: {
      textTransform: 'capitalize',
      backgroundColor: '#dddddd',
      fontSize: 30,
      textAlign: 'center',
    },
    plantScientificNameText: {
      textTransform: 'capitalize',
      backgroundColor: '#eeeeee',
      fontSize: 15,
      textAlign: 'center',
    },
    imageWrapper: {
      display: 'flex',
      //width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      height: 200,
      width: '100%',
      // borderStyle: 'solid',
      // borderWidth: 5,
      // borderColor: 'red',
    },
    plantImage: {
      resizeMode: 'contain',
      aspectRatio: 1/1,
      height: 200,
      width: '100%',
      borderStyle: 'solid',
      borderWidth: 5,
      borderColor: 'black',
      //width: '88%',
    },
    backButton: {
      borderRadius: 50,
      width: 50,
      height: 50,
      resizeMode: 'contain',
      marginRight: 'auto',
    },
    lockIcon: {
      width: 50,
      height: 50,
      resizeMode: 'contain',
      marginLeft: 'auto',
    }
  })
  