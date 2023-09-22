import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import database from "../../src/config/firebaseconfig";
import styles from "./style";


export default function Details({ navigation, route }) {

    const [descriptionEdit, setDescriptionEdit] = useState(route.params.description);
    const idTask = route.params.id;

    function editTask(description, id) {
        database.collection("Tasks").doc(id).update({
            description: description,
            status: false
        })

        navigation.navigate("Tasks");
    }
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Description</Text>
            <TextInput
                style={styles.inputText}
                placeholder="Ex.: Estudar Javascript"
                onChangeText={setDescriptionEdit}
                value={descriptionEdit}
            />
            <TouchableOpacity
                style={styles.buttonSave}
                onPress={() => { editTask(descriptionEdit, idTask) }}
            >
                <Text style={styles.textButton}>Save</Text>
            </TouchableOpacity>
        </View>
    );
}