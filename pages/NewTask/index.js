import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import database from "../../src/config/firebaseconfig";
import styles from "./style";


export default function NewTask() {

    const [description, setDescription] = useState(null);

    function addTask() {
        database.collection("Tasks").add({
            description: description,
            status: false
        })

        //navigation.navigate("Task");
    }
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Description</Text>
            <TextInput
                style={styles.inputText}
                placeholder="Ex.: Estudar Javascript"
                onChangeText={setDescription}
                value={description}
            />
            <TouchableOpacity
                style={styles.buttonSave}
                onPress={() => { addTask() }}
            >
                <Text style={styles.textButton}>Save</Text>
            </TouchableOpacity>
        </View>
    );
}