import AsyncStorage from "@react-native-async-storage/async-storage";

const serverURL = "https://ad1000dre0.execute-api.us-east-2.amazonaws.com/default/items"


export default uploadToCommunity = async () => {
    let localUri;
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

    const postSubmission = { 
    photo : {
        uri: localUri,
        type: 'image/png',
        name: localUri + '.png',
    },
    user: userName,
    pfp: pfpIndex,
    plantName : plantName
}
    let body = new FormData();
    body.append('post', postSubmission)
    body.append({})

    let xhr = new XMLHttpRequest();
    xhr.open('POST', serverURL);
    xhr.send(body);
}