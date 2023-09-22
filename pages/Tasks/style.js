import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 20,
    },
    Tasks: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 5,
    },
    deleteTask: {
        justifyContent: "center",
        paddingLeft: 15,
    },
    descriptionTask: {
        width: "85%",
        alignContent: "flex-start",
        backgroundColor: "#f5f5ca",
        padding: 10,
        //paddingHorizontal: 20,
        borderRadius: 5,
        marginBottom: 5,
        marginRight: 15,
    },
    buttonNewTask: {
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
    },
});

export default styles;