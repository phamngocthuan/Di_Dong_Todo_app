import React, { useState } from "react";
import { View, Image, Text, Dimensions } from "react-native";
import Header from "../../Common/Header";
import moment from "moment";
import Task from "../Task/Task";

import {
    useFonts,
    Roboto_400Regular,
    Bangers_400Regular,
    OpenSans_400Regular,
} from "@expo-google-fonts/dev";
const width = 390;
export default ({ navigation }) => {
    let [fontsLoaded] = useFonts({
        Roboto_400Regular,
        Bangers_400Regular,
        OpenSans_400Regular,
    });

    const [tasks, setTasks] = useState(
        JSON.parse(localStorage.getItem("tasks") || "[]")
    );


    return (
        <View style={{ backgroundColor: "white", flex: 1 }}>
            <Header
                title="Công việc hôm nay"
                sourceImgTitle="task_tody"
                handleBack={() => navigation.navigate("Home")}
                styleHeader={{
                    paddingTop: 2,
                    paddingBottom: 2,
                    backgroundColor: "lightskyblue",
                    flex: 2,
                    flexDirection: "row",
                    alignItems: "center",
                    paddingLeft: 5,
                }}
                navigation={navigation}
            />
            <View style={{ flex: 16, padding: 15 }}>
                {tasks
                    .filter(
                        (task) => moment().format("DD/MM/YYYY") == task.date
                    )
                    .map((task, index) => (
                        <Task
                            name={task.name}
                            description={task.description}
                            color={task.color}
                            isImportant={task.isImportant}
                            date={task.date}
                            id={task.id}
                            status={task.status}
                            tasks={tasks}
                            setTasks={setTasks}
                            categories={task.categories}
                        />
                    ))}

            </View>
        </View>
    );
};
