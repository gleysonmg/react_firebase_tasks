import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    label: {
        width: "90%",
        marginTop: 20,
        fontSize: 14,
        marginLeft: 20,
        color: "#f92e6a"
    },
    inputText: {
        width: "90%",
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: "#f92e6a",
        marginLeft: "auto",
        marginRight: "auto",
    },
    buttonSave: {
        width: "60%",
        height: 60,
        //position: "absolute",
        bottom: 30,
        backgroundColor: "#f92e6a",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 80,
        marginLeft: "auto",
        marginRight: "auto",
    },
    textButton: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "600"
    }
});

export default styles;