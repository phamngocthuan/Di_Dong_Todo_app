import React, { useState } from "react";
import {
    View,
    Image,
    Text,
} from "react-native";

export default (props) => {
    const {  title, sourceImgTitle, handleBack, styleHeader, navigation } = props;
    const goHome = () => {
        navigation.replace("Home")
    }
    return (
        <View
            style={styleHeader}
        >
            <Image
                onClick={() => handleBack()}
                style={{ width: 30, height: 30 }}
                source={require("../../assets/arrowLeft.png")}
            ></Image>
            <Image
                onClick={goHome}
                style={{ width: 80, height: 80 }}
                source={require("../../assets/" + sourceImgTitle + ".png")}
            ></Image>
            <Text
                style={[
                    {
                        fontFamily: "OpenSans_400Regular",
                        color: "#21687f",
                        fontSize: 22,
                        fontWeight: "bold",
                        paddingLeft: 5
                    },
                ]}
            >
                {title}
            </Text>
        </View>
    );
};
