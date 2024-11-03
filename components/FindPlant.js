import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from '@react-navigation/native';


export default FindPlant = async (plant, router) => {

    const getUser = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('userObject');
          return (jsonValue != null) ? JSON.parse(jsonValue) : {foundPlants: [],};
        } catch (e) {
          // error reading value
        }
      };
      const storeUser = async (user) => {
        try {
          const jsonValue = JSON.stringify(user);
          await AsyncStorage.setItem('userObject', jsonValue);
        } catch (e) {
          // saving error
        }
      };

    try {
        const userObject = await getUser()

        const plantName = plant.toLowerCase().replace("_", " ");
        const plantAlreadyFound = userObject["foundPlants"].some(
          (foundPlant) => foundPlant.plant_name === plantName
        );

        if (!plantAlreadyFound) {
            
            // Navigate to the Camera screen
            router.push('/screens/camera');
            
            // If the user hasn't found this plant, take them to the camera, get the picture, and bring it back for storage in their deck
            // Wait for the image URI to be saved in AsyncStorage by the Camera component
            const imageUri = await new Promise((resolve) => {
              const interval = setInterval(async () => {
                const uri = await AsyncStorage.getItem('capturedImageUri');
                if (uri) {
                  clearInterval(interval);
                  resolve(uri);
                }
              }, 1000); // Check every second
            });

            // Save the data for the community post
            userObject.lastFoundPlant = {
              plant_name: plantName,
              plant_image: imageUri
            };

            // Add the new plant entry with the captured image URI
            userObject.foundPlants.push({
              plant_name: plant.toLowerCase().replace("_", " "),
              plant_image: imageUri
            });
            // Clear capturedImageUri from AsyncStorage after using it
            await AsyncStorage.removeItem('capturedImageUri');
            console.log('Updated user object:', userObject);
        }
        await storeUser(userObject)
        router.push('/screens/personal_deck');  // Navigate to your deck after saving the image
    }
    catch (e) {
        console.log('Error finding plant to user' + e);
    }

}