import React, { useState } from "react";
import { View, Image, Text } from "react-native";
import Header from "../../Common/Header";
import {
    useFonts,
    Roboto_400Regular,
    Bangers_400Regular,
    OpenSans_400Regular,
} from "@expo-google-fonts/dev";

export default ({ navigation }) => {
    let [fontsLoaded] = useFonts({
        Roboto_400Regular,
        Bangers_400Regular,
        OpenSans_400Regular,
    });

    return (
        <View style={{ backgroundColor: "white", flex: 1 }}>
            <Header
                title="Danh sách công việc"
                sourceImgTitle="list_task"
                handleBack={() => navigation.goBack()}
                styleHeader={{
                    flex: 2,
                    paddingTop: 2,
                    paddingBottom: 2,
                    backgroundColor: "lightgreen",
                    flex: 2,
                    flexDirection: "row",
                    alignItems: "center",
                    paddingLeft: 5,
                }}
                navigation = {navigation}
            />
            <View style={{ flex: 16, padding: 15 }}>
                <Text
                    onClick={() =>
                        navigation.navigate({
                            name: "Tasks",
                            params: {
                                title: "Ngày hiện tại",
                            },
                        })
                    }
                    style={{
                        margin: 5,
                        padding: 10,
                        borderRadius: 3,
                        fontFamily: "OpenSans_400Regular",
                        color: "#58b943",
                        fontWeight: "bold",
                        display: "flex",
                        fontSize: 25,
                        alignItems: "center",
                        justifyContent: "space-between",
                        borderBottom: "4px solid lightpink",
                    }}
                >
                    Ngày hiện tại{" "}
                    <Image
                        style={{ width: 30, height: 30 }}
                        source={require("../../../assets/arrowRight.png")}
                    ></Image>
                </Text>
                <Text
                    onClick={() =>
                        navigation.navigate({
                            name: "Tasks",
                            params: {
                                title: "Ngày mai",
                            },
                        })
                    }
                    style={{
                        margin: 5,
                        padding: 10,
                        borderRadius: 3,
                        fontFamily: "OpenSans_400Regular",
                        color: "#58b943",
                        fontWeight: "bold",
                        display: "flex",
                        fontSize: 25,
                        alignItems: "center",
                        justifyContent: "space-between",
                        borderBottom: "4px solid lightskyblue",
                    }}
                >
                    Ngày mai{" "}
                    <Image
                        style={{ width: 30, height: 30 }}
                        source={require("../../../assets/arrowRight.png")}
                    ></Image>
                </Text>
                <Text
                    onClick={() =>
                        navigation.navigate({
                            name: "Tasks",
                            params: {
                                title: "Hôm qua",
                            },
                        })
                    }
                    style={{
                        margin: 5,
                        padding: 10,
                        borderRadius: 3,
                        fontFamily: "OpenSans_400Regular",
                        color: "#58b943",
                        fontWeight: "bold",
                        display: "flex",
                        fontSize: 25,
                        alignItems: "center",
                        justifyContent: "space-between",
                        borderBottom: "4px solid #DDA0DD",
                    }}
                >
                    Hôm qua{" "}
                    <Image
                        style={{ width: 30, height: 30 }}
                        source={require("../../../assets/arrowRight.png")}
                    ></Image>
                </Text>
                <Text
                    onClick={() =>
                        navigation.navigate({
                            name: "Tasks",
                            params: {
                                title: "Công việc sắp tới",
                            },
                        })
                    }
                    style={{
                        margin: 5,
                        padding: 10,
                        borderRadius: 3,
                        fontFamily: "OpenSans_400Regular",
                        color: "#58b943",
                        fontWeight: "bold",
                        display: "flex",
                        fontSize: 25,
                        alignItems: "center",
                        justifyContent: "space-between",
                        borderBottom: "4px solid khaki",
                    }}
                >
                    Công việc sắp tới{" "}
                    <Image
                        style={{ width: 30, height: 30 }}
                        source={require("../../../assets/arrowRight.png")}
                    ></Image>
                </Text>
                <Text
                    onClick={() =>
                        navigation.navigate({
                            name: "Tasks",
                            params: {
                                title: "Công việc đã qua",
                            },
                        })
                    }
                    style={{
                        margin: 5,
                        padding: 10,
                        borderRadius: 3,
                        fontFamily: "OpenSans_400Regular",
                        color: "#58b943",
                        fontWeight: "bold",
                        display: "flex",
                        fontSize: 25,
                        alignItems: "center",
                        justifyContent: "space-between",
                        borderBottom: "4px solid #F5DEB3",
                    }}
                >
                    Công việc đã qua{" "}
                    <Image
                        style={{ width: 30, height: 30 }}
                        source={require("../../../assets/arrowRight.png")}
                    ></Image>
                </Text>
                <Text
                    onClick={() =>
                        navigation.navigate({
                            name: "Tasks",
                            params: {
                                title: "Tất cả công việc",
                            },
                        })
                    }
                    style={{
                        margin: 5,
                        padding: 10,
                        borderRadius: 3,
                        fontFamily: "OpenSans_400Regular",
                        color: "#58b943",
                        fontWeight: "bold",
                        display: "flex",
                        fontSize: 25,
                        alignItems: "center",
                        justifyContent: "space-between",
                        borderBottom: "4px solid lightgreen",
                    }}
                >
                    Tất cả công việc{" "}
                    <Image
                        style={{ width: 30, height: 30 }}
                        source={require("../../../assets/arrowRight.png")}
                    ></Image>
                </Text>
            </View>
        </View>
    );
};
