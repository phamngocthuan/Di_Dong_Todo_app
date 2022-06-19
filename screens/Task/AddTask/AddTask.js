import React, { useState } from "react";
import {
    View,
    Image,
    Text,
    TextInput,
    Button,
    Platform,
    SafeAreaView,
    CheckBox,
    Alert,
} from "react-native";
import styles from "./AddTaskCss";
import moment from "moment";
import Header from "../../Common/Header";
import Icon from "react-native-vector-icons/FontAwesome";
import TimeInput from "@tighten/react-native-time-input";
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
    const [timeStart, setTimeStart] = useState("");
    const [timeEnd, setTimeEnd] = useState("");

    const handleTimeChangeStart = (timeStart, validTime) => {
        if (!validTime) return;
        setTimeStart(timeStart);
    };
    const handleTimeChangeEnd = (timeEnd, validTime) => {
        if (!validTime) return;
        setTimeEnd(timeEnd);
    };

    const formatDateCalendar = (date, time) => {
        
        return moment(date.split("/").reverse().join('-') + " " + time).format("YYYY-MM-DD HH:mm:ss");
    }

    const handleAddTask = () => {
        if (!name || !description || !date || !color || !categories) {
            setMessage("Vui lòng điền đầy đủ thông tin!");
        } else {
            const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
            tasks.push({
                name,
                description,
                date,
                isImportant,
                color,
                status: false,
                categories,
                id: Math.floor(Math.random() * 10000000000),
                timeStart: formatDateCalendar(date, timeStart),
                timeEnd: formatDateCalendar(date, timeEnd),
            });
            localStorage.setItem("tasks", JSON.stringify(tasks));
            setMessage("Thêm công việc thành công!");
            setTimeout(() => {
                navigation.navigate("ListTask");
            }, 500);
        }
    };

    const handleChooseDate = (date, dateNumber) => {
        setDate(date);
        setDateNumber(dateNumber);
        setMessage();
    };

    const handleChooseColor = (color, colorNumber) => {
        setColor(color);
        setColorNumber(colorNumber);
        setMessage();
    };

    const handleChooseCategory = (key, value) => {
        let arr = [...categories];
        arr.forEach((x) => {
            if (x.key == key) {
                x.value = !x.value;
            }
        });
        setCategories(arr);
    };

    const [name, onChangeName] = React.useState(undefined);
    const [description, onChangeDescription] = React.useState(undefined);
    const [date, setDate] = useState(null);
    const [dateNumber, setDateNumber] = useState(null);
    const [isImportant, setIsImportant] = useState(false);
    const [color, setColor] = useState(null);
    const [colorNumber, setColorNumber] = useState(null);
    const [categories, setCategories] = useState([
        {
            icon: "",
            key: "All",
            value: false,
            title: "Tất cả",
            color: "#d3e2ef",
        },
        {
            icon: "school",
            key: "Educations",
            value: false,
            title: "Giáo dục",
            color: "#eaefd3",
        },
        {
            icon: "baseketball",
            key: "Sports",
            value: false,
            title: "Thể thao",
            color: "#deefd3",
        },
        {
            icon: "handshake",
            key: "Mettings",
            value: false,
            title: "Cuộc hẹn",
            color: "#d3efe8",
        },
        {
            icon: "user-group",
            key: "Friends",
            value: false,
            title: "Bạn bè",
            color: "#efdfd3",
        },
    ]);

    const [message, setMessage] = useState(null);

    return (
        <View style={{ backgroundColor: "white", flex: 1 }}>
            <Header
                title="Thêm công việc"
                sourceImgTitle="create_task"
                handleBack={() => navigation.navigate("Home")}
                styleHeader={{
                    paddingTop: 2,
                    paddingBottom: 2,
                    backgroundColor: "lightsalmon",
                    flex: 2,
                    flexDirection: "row",
                    alignItems: "center",
                    paddingLeft: 5,
                }}
                navigation={navigation}
            />
            <View style={{ flex: 16, padding: 15 }}>
                <SafeAreaView>
                    <Text
                        style={[
                            {
                                fontFamily: "OpenSans_400Regular",
                                color: "#676768",
                                fontSize: 18,
                                fontWeight: "bold",
                                marginBottom: -5,
                                marginTop: 10,
                            },
                        ]}
                    >
                        Tên công việc
                    </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeName}
                        value={name}
                        placeholder="Nhập tên công việc"
                        onClick={() => setMessage()}
                    />

                    <Text
                        style={[
                            {
                                fontFamily: "OpenSans_400Regular",
                                color: "#676768",
                                fontSize: 18,
                                fontWeight: "bold",
                                marginTop: 10,
                                marginBottom: -5,
                            },
                        ]}
                    >
                        Mô tả công việc
                    </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeDescription}
                        value={description}
                        placeholder="Mô tả"
                        onClick={() => setMessage()}
                    />
                    <Text
                        style={[
                            {
                                fontFamily: "OpenSans_400Regular",
                                color: "#676768",
                                fontSize: 18,
                                fontWeight: "bold",
                                marginTop: 10,
                            },
                        ]}
                    >
                        Phân loại
                    </Text>
                    <View style={[{ flexDirection: "row", flexWrap: "wrap" }]}>
                        {categories.map((x) => (
                            <View
                                style={
                                    x.value
                                        ? styles.categoryItemSelect
                                        : styles.categoryItem
                                }
                                key={x.key}
                                onPress={() =>
                                    handleChooseCategory(x.key, x.value)
                                }
                            >
                                {/* {
                                            x.icon && <Icon name="school" size={20} />
                                        } */}
                                <Text
                                    onPress={() =>
                                        handleChooseCategory(x.key, x.value)
                                    }
                                >
                                    {x.title}
                                </Text>
                            </View>
                        ))}
                    </View>

                    <Text
                        style={[
                            {
                                fontFamily: "OpenSans_400Regular",
                                color: "#676768",
                                fontSize: 18,
                                fontWeight: "bold",
                                marginTop: 10,
                            },
                        ]}
                    >
                        Chọn ngày
                    </Text>
                    {Array.from(Array(2).keys()).map((parent, indexParent) => (
                        <View style={styles.parentDateTime} key={indexParent}>
                            {Array.from(Array(3).keys()).map(
                                (child, indexChild) => (
                                    <Text
                                        key={indexChild}
                                        style={
                                            dateNumber == parent * 3 + child
                                                ? styles.dateItemSelect
                                                : styles.dateItem
                                        }
                                        onPress={() =>
                                            handleChooseDate(
                                                moment()
                                                    .add(
                                                        parent * 3 + child,
                                                        "days"
                                                    )
                                                    .format("DD/MM/YYYY"),
                                                parent * 3 + child
                                            )
                                        }
                                    >
                                        {moment()
                                            .add(parent * 3 + child, "days")
                                            .format("DD/MM/YYYY")}
                                    </Text>
                                )
                            )}
                        </View>
                    ))}

                    <View>
                        <Text
                            style={[
                                {
                                    display: "flex",
                                    alignItems: "center",
                                    fontFamily: "OpenSans_400Regular",
                                    color: "#676768",
                                    fontSize: 18,
                                    fontWeight: "bold",
                                    marginTop: 20,
                                },
                            ]}
                        >
                            Chọn thời gian
                        </Text>

                        <View
                            style={[
                                {
                                    display: "flex",
                                    fontFamily: "OpenSans_400Regular",
                                },
                            ]}
                        >
                            <Text
                                style={[
                                    {
                                        display: "flex",
                                        alignItems: "center",
                                        fontFamily: "OpenSans_400Regular",
                                        color: "#676768",
                                        fontSize: 13,
                                        fontWeight: "bold",
                                        paddingBottom: 2,
                                    },
                                ]}
                            >
                                Bắt đầu
                            </Text>
                            <TimeInput
                                setCurrentTime
                                onTimeChange={handleTimeChangeStart}
                            />
                        </View>
                        <View
                            style={[
                                {
                                    display: "flex",
                                    fontFamily: "OpenSans_400Regular",
                                },
                            ]}
                        >
                            <Text
                                style={[
                                    {
                                        display: "flex",
                                        alignItems: "center",
                                        fontFamily: "OpenSans_400Regular",
                                        color: "#676768",
                                        fontSize: 13,
                                        fontWeight: "bold",
                                        paddingBottom: 2,
                                    },
                                ]}
                            >
                                Kết thúc
                            </Text>
                            <TimeInput
                                setCurrentTime
                                onTimeChange={handleTimeChangeEnd}
                            />
                        </View>
                    </View>

                    <Text
                        style={[
                            {
                                display: "flex",
                                alignItems: "center",
                                fontFamily: "OpenSans_400Regular",
                                color: "#676768",
                                fontSize: 18,
                                fontWeight: "bold",
                                marginTop: 10,
                            },
                        ]}
                    >
                        Công việc quan trọng
                        <Text>
                            <CheckBox
                                value={isImportant}
                                onValueChange={setIsImportant}
                                style={[
                                    {
                                        transform: [
                                            { scaleX: 1.3 },
                                            { scaleY: 1.3 },
                                        ],
                                        marginLeft: 15,
                                    },
                                ]}
                                onClick={() => setMessage()}
                            />
                        </Text>
                    </Text>

                    <View>
                        <Text
                            style={[
                                {
                                    display: "flex",
                                    alignItems: "center",
                                    fontFamily: "OpenSans_400Regular",
                                    color: "#676768",
                                    fontSize: 18,
                                    fontWeight: "bold",
                                    marginTop: 20,
                                },
                            ]}
                        >
                            Gắn màu công việc
                        </Text>
                        <View
                            style={[
                                {
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginTop: 5,
                                },
                            ]}
                        >
                            {[
                                "pink",
                                "#5F7EA0",
                                "#8FCC8F",
                                "#AD28E6",
                                "#00DFFF",
                                "#CDFC5C",
                                "#F2868C",
                            ].map((value, index) => (
                                <Text
                                    style={[
                                        {
                                            width: 44,
                                            height: 44,
                                            borderRadius: 44 / 2,
                                            backgroundColor: value,
                                            borderWidth:
                                                colorNumber == index ? 3 : 0,
                                            borderColor: "#494949",
                                        },
                                    ]}
                                    onPress={() =>
                                        handleChooseColor(value, index)
                                    }
                                    key={index}
                                ></Text>
                            ))}
                        </View>
                    </View>

                    <View
                        style={[
                            {
                                display: "flex",
                                justifyContent: "center",
                                flexDirection: "row",
                                marginTop: 12,
                            },
                        ]}
                    >
                        <View
                            style={[
                                {
                                    width: 150,
                                },
                            ]}
                        >
                            <Button
                                style={[{}]}
                                title={"THÊM"}
                                onPress={handleAddTask}
                            />
                        </View>
                    </View>
                    <Text
                        style={[
                            {
                                fontSize: 16,
                                textAlign: "center",
                                marginTop: 12,
                                color: "orange",
                                fontWeight: "bold",
                                fontStyle: "italic",
                                fontFamily: "OpenSans_400Regular",
                            },
                        ]}
                    >
                        {message}
                    </Text>
                </SafeAreaView>
            </View>
        </View>
    );
};
