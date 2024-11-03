import AsyncStorage from "@react-native-async-storage/async-storage";
import FormData from "form-data";

const serverURL = "https://ad1000dre0.execute-api.us-east-2.amazonaws.com/default/items"


export default uploadToCommunity = async (localUri) => {
    let userName;
    let pfpIndex;
    let plantName;

    // Retrieve username and pfp index from AsyncStorage
    try {
        const jsonValue = await AsyncStorage.getItem('userData');
        if (jsonValue) {
            const { currentUsername, currentIconIndex } = JSON.parse(jsonValue);
            userName = currentUsername;
            pfpIndex = currentIconIndex;
        }
    } catch (error) {
        console.error('Error retrieving user data:', error);
    }


    // Retrieve plant name and image from userObject
    try {
        const userObjectValue = await AsyncStorage.getItem('userObject');
        if (userObjectValue) {
            const userObject = JSON.parse(userObjectValue);
            // Assuming the last found plant is stored in userObject.lastFoundPlant
            plantName = userObject.lastFoundPlant.plant_name; 
            localUri = userObject.lastFoundPlant.plant_image; 
        }
    } catch (error) {
        console.error('Error retrieving user object:', error);
    }

    let body = new FormData();
    body.append('photo', {
        uri:   localUri, // Directly using localUri
        type: 'image/png', // Adjust according to the actual image type
        name: `${plantName}.png`, // Use a relevant name
    });
    body.append('user', userName);
    body.append('pfp', pfpIndex);
    body.append('plantName', plantName);

    
    const requestOptions = {
        method: 'PUT',
        body: body // Set body to the FormData instance
    };

    try {
        let res = await fetch(serverURL, requestOptions);
        if (res.ok) {
            let jsonData = res;
            console.log(jsonData);
        } else {
            const errorText = await res.text(); // Get error details
            console.error('Error response:', errorText);
        }
    } catch (error) {
        console.error('Fetch error:', error);
    }
}