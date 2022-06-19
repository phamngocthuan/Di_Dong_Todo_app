import React, { useState } from "react";
import { View, Image, Text, CheckBox } from "react-native";
import {
    useFonts,
    Roboto_400Regular,
    Bangers_400Regular,
    OpenSans_400Regular,
} from "@expo-google-fonts/dev";

export default ({
    navigation,
    name,
    description,
    isImportant,
    color,
    date,
    id,
    status,
    tasks,
    setTasks,
    categories,
}) => {
    let [fontsLoaded] = useFonts({
        Roboto_400Regular,
        Bangers_400Regular,
        OpenSans_400Regular,
    });

    const [statusTask, setStatusTask] = useState(status);

    const [importantTask, setImportantTask] = useState(isImportant);

    const handleClickStatus = () => {
        let index = 0;
        tasks.forEach((element, _index) => {
            if (element.id == id) index = _index;
        });
        if (statusTask) {
            tasks[index].status = false;
            localStorage.setItem("tasks", JSON.stringify(tasks));
            setStatusTask(false);
            setTasks(JSON.parse(localStorage.getItem("tasks") || "[]"));
            console.log(JSON.parse(localStorage.getItem("tasks") || "[]"));
        } else {
            tasks[index].status = true;
            localStorage.setItem("tasks", JSON.stringify(tasks));
            setStatusTask(true);
            setTasks(JSON.parse(localStorage.getItem("tasks") || "[]"));
            console.log(JSON.parse(localStorage.getItem("tasks") || "[]"));
        }
    };

    const handleClickImportant = () => {
        let index = 0;
        tasks.forEach((element, _index) => {
            if (element.id == id) index = _index;
        });
        if (importantTask) {
            tasks[index].isImportant = false;
            localStorage.setItem("tasks", JSON.stringify(tasks));
            setTasks(JSON.parse(localStorage.getItem("tasks") || "[]"));
            setImportantTask(false);
        } else {
            tasks[index].isImportant = true;
            localStorage.setItem("tasks", JSON.stringify(tasks));
            setTasks(JSON.parse(localStorage.getItem("tasks") || "[]"));
            setImportantTask(true);
        }
    };

    const handleClickDelete = () => {
        let index = 0;
        tasks.forEach((element, _index) => {
            if (element.id == id) index = _index;
        });
        const tasksClone = JSON.parse(localStorage.getItem("tasks") || "[]");
        tasksClone.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(tasksClone));
        setTasks(tasksClone);
    };

    return (
        <View
            style={[
                {
                    borderColor: color,
                    borderWidth: 3,
                    display: "flex",
                    padding: 10,
                    borderRadius: 7,
                    marginBottom: 15,
                },
            ]}
        >
            <View
                style={[
                    {
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                    },
                ]}
            >
                <CheckBox
                    value={statusTask}
                    onValueChange={handleClickStatus}
                    style={[{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] }]}
                />
                <Text
                    style={[
                        {
                            fontWeight: "bold",
                            fontFamily: "OpenSans_400Regular",
                            marginLeft: 10,
                            fontSize: 18,
                        },
                    ]}
                >
                    {name}
                </Text>
            </View>

            <View
                style={[
                    {
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                    },
                ]}
            >
                <Text
                    style={[
                        {
                            marginLeft: 25,
                            fontStyle: "italic",
                            fontSize: 16,
                        },
                    ]}
                >
                    {description}
                </Text>
                <View
                    style={[
                        {
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                        },
                    ]}
                >
                    <Image
                        onClick={handleClickImportant}
                        style={{ width: 40, height: 40 }}
                        source={
                            importantTask
                                ? require("../../../assets/important.jpg")
                                : require("../../../assets/noImportant.jpg")
                        }
                    />
                    <Image
                        onClick={handleClickDelete}
                        style={{ width: 30, height: 30, marginLeft: 5 }}
                        source={require("../../../assets/delete.jpg")}
                    />
                </View>
            </View>
            <View
                style={[
                    {
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                    },
                ]}
            >
                {categories &&
                    categories.length > 0 &&
                    categories
                        .filter((x) => x.value == true)
                        .map((y) => (
                            <View
                                style={[
                                    {
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        paddingRight: 5
                                    },
                                ]}
                            >
                                <Text
                                    style={[
                                        {
                                            fontWeight: "bold",
                                            fontFamily: "OpenSans_400Regular",
                                            display: "flex",
                                            flexDirection: "row-reverse",
                                            border: "1px solid",
                                            padding: 5,
                                            borderRadius: 5,
                                            backgroundColor: "#d3e2ef",
                                        },
                                    ]}
                                >
                                    {y.title}
                                </Text>
                            </View>
                        ))}
            </View>

            <View></View>
            <Text
                style={[
                    {
                        fontWeight: "bold",
                        fontFamily: "OpenSans_400Regular",
                        display: "flex",
                        flexDirection: "row-reverse",
                    },
                ]}
            >
                {date}
            </Text>
        </View>
    );
};
