import React, { useState } from "react";
import { View, Image, Text , Dimensions} from "react-native";
import Task from "../Task/Task";
import moment from "moment";
import Header from "../../Common/Header";
import EventCalendar from "react-native-events-calendar";
const windowWidth = Dimensions.get("window").width;
import {
    useFonts,
    Roboto_400Regular,
    Bangers_400Regular,
    OpenSans_400Regular,
} from "@expo-google-fonts/dev";

export default ({ navigation, route }) => {
    let [fontsLoaded] = useFonts({
        Roboto_400Regular,
        Bangers_400Regular,
        OpenSans_400Regular,
    });

    const [tasks, setTasks] = useState(
        JSON.parse(localStorage.getItem("tasks") || "[]")
    );

    const getEventTask = () => {
        
        var tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        if(!tasks) return tasks;
        if(tasks && tasks.length > 0){
            for(let i = 0;i< tasks.length ;i ++){
                tasks[i].start = tasks[i].timeStart;
                tasks[i].end = tasks[i].timeEnd;
                tasks[i].title = tasks[i].name;
                tasks[i].summary = tasks[i].description;
            }
        }
        return tasks;

    }
    const [initDate, setInitDate] = useState(
        moment(new Date()).format("YYYY-MM-DD")
    );
    const _eventTapped = function (event) {
        alert(JSON.stringify(event));
    };
    const handleChangeDate = function (value) {
        setInitDate(value);
    };
    return (
        <View style={{ backgroundColor: "white", flex: 1 }}>
            <Header
                title={route.params.title}
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
                    maxHeight: 94
                }}
                navigation={navigation}
            />
            <View style={{ flex: 16, padding: 15 }}>
                {route.params.title == "Ngày hiện tại" &&
                    tasks
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
                {route.params.title == "Ngày mai" &&
                    tasks
                        .filter(
                            (task) =>
                                moment().add(1, "days").format("DD/MM/YYYY") ==
                                task.date
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
                {route.params.title == "Hôm qua" &&
                    tasks
                        .filter(
                            (task) =>
                                moment()
                                    .subtract(1, "days")
                                    .format("DD/MM/YYYY") == task.date
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
                {
                    route.params.title == "Công việc sắp tới" && (
                        <EventCalendar
                            eventTapped={_eventTapped.bind(this)}
                            events={getEventTask()}
                            width={windowWidth}
                            initDate={initDate}
                            scrollToFirst
                            upperCaseHeader
                            uppercase
                            dateChanged={handleChangeDate}
                        />
                    )
                    // tasks
                    //     .filter((task) => !(moment() < moment(task.date)))
                    //     .map((task, index) => (
                    //         <Task
                    //             name={task.name}
                    //             description={task.description}
                    //             color={task.color}
                    //             isImportant={task.isImportant}
                    //             date={task.date}
                    //             id={task.id}
                    //             status={task.status}
                    //             tasks={tasks}
                    //             setTasks={setTasks}
                    //             categories={task.categories}
                    //         />
                    //     ))
                }
                {route.params.title == "Công việc đã qua" &&
                    tasks
                        .filter((task) => moment() < moment(task.date))
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
                {route.params.title == "Tất cả công việc" &&
                    tasks.map((task, index) => (
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
                {route.params.title == "Công việc đã hoàn thành" &&
                    tasks
                        .filter((task) => task.status)
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
                {route.params.title == "Công việc chưa hoàn thành" &&
                    tasks
                        .filter((task) => !task.status)
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
