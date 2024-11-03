import AsyncStorage from "@react-native-async-storage/async-storage";

const serverURL = "https://ad1000dre0.execute-api.us-east-2.amazonaws.com/default/items"


export default uploadToCommunity = async () => {
    let localUri;
    let userName;
    let pfpIndex;

    const postSubmission = { 
    photo : {
        uri: localUri,
        type: 'image/png',
        name: localUri + '.png',
    },
    user: userName,
    pfp: pfpIndex,
}
    let body = new FormData();
    body.append('post', postSubmission)
    body.append({})

    let xhr = new XMLHttpRequest();
    xhr.open('POST', serverURL);
    xhr.send(body);
}