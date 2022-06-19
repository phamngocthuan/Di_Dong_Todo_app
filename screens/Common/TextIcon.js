import React, { useState } from "react";
import {
    View,
    Image,
    Text,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
export default (props) => {
    const {  title, sourceImgTitle, text, style } = props;

    return (
        <View style={style}>
            <Icon name="info" size={20} />
            <Text>
                {{ text}}
            </Text>
        </View>
    );
};
