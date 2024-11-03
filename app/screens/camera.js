import { CameraView, Camera,  CameraType, useCameraPermissions, takePictureAsync} from 'expo-camera';
import { useState, useRef, useEffect } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useFocusEffect } from 'expo-router';
import { useCallback } from 'react';
import * as FileSystem from 'expo-file-system';



export default function camera() {
  const [facing, setFacing] = useState('back');
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef(null);

  const saveImage = async (uri) => {
    try {
      // Define the file path where the image will be saved
      const fileUri = FileSystem.documentDirectory + '/test.jpg';
      
      // Download the image from the URI
      const response = await FileSystem.downloadAsync(uri, fileUri);
      console.log(response)
      // Check if the download was successful
      
    } catch (error) {
      console.error(error);
        }
  };

  useFocusEffect(
    useCallback(() => {
      console.log('Hello, I am focused!');
      if (cameraRef.current) {
        cameraRef.current.resumePreview()
      }
      return () => {
        console.log('This route is now unfocused.');
        if (cameraRef.current) {
            cameraRef.current.pausePreview()
          }
        
      }
    }, [])
  );
  

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  const captureImage = async () => {
    if (cameraRef.current) {
        const options = { quality: 0.5, base64: true };
      const photo = await cameraRef.current.takePictureAsync(options);
      saveImage(photo.uri)
      console.log(photo.uri); // You can handle the photo here (e.g., display it, save it, etc.)
    }
  };

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  return (
    <View style={styles.container}>
        
      <CameraView  style={styles.camera} facing={facing} ref={cameraRef}>
        <View style={styles.buttonContainer}>
            <View style={{display: 'flex', alignSelf: 'flex-end', alignItems: 'center', flexDirection: 'row', alignContent: 'center'}}>
                <TouchableOpacity onPress={captureImage} style={{ width: 90, height: 90, borderRadius: 100, borderWidth: 6, borderColor: 'white'}}>

                </TouchableOpacity>
          </View>
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});
