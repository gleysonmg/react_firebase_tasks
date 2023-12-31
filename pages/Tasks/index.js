import React, { useState, useEffect } from "react";
import { 
    View,
    Text,
    TouchableOpacity,
    FlatList
} from "react-native";

import database from "../../src/config/firebaseconfig";
import styles from "./style";
import { FontAwesome } from "@expo/vector-icons";

export default function Tasks({ navigation }) {

    const [task, setTask] = useState([]);

    function deleteTask(id) {
        database.collection("Tasks").doc(id).delete();
    }

    useEffect(() => {
        database.collection("Tasks").onSnapshot((query) => {
            const list = [];
            query.forEach((doc) => {
                list.push({...doc.data(), id: doc.id })
            })
            setTask(list);
        });
    }, [])
    return (
        <View style={styles.container}>
            <FlatList 
                showsVerticalScrollIndicator={false}
                data={task}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.Tasks}>
                            <TouchableOpacity
                                style={styles.deleteTask}
                                onPress={() => {
                                    deleteTask(item.id)
                                }}
                            >
                                <FontAwesome
                                    name="trash"
                                    size={23}
                                    color="#f92e6a"
                                >
                                </FontAwesome>
                            </TouchableOpacity>
                            <Text
                                style={styles.descriptionTask}
                                onPress={() => {
                                    navigation.navigate("Details", {
                                        id: item.id,
                                        description: item.description
                                    })
                                }}
                            >
                                {item.description}
                            </Text>
                        </View>
                    )
                }}
            />
            <TouchableOpacity
                style={styles.buttonNewTask}
                onPress={() => navigation.navigate("New Task")}
            >
                <Text style={styles.textButton}>New Task</Text>
            </TouchableOpacity>
        </View>
    );
}