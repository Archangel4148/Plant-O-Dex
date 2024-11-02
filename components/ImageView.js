import React from 'react';
import { Image, Dimensions } from 'react-native';
import Images from './Index';
const ImageView = ({ index }) => {
    return (
        <Image
            source={Images['image' + index]}
        />
    )
}
export default ImageView;