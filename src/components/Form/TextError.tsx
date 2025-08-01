import { StyleSheet, Text } from "react-native";

export default function TextError(props: { message: string }) {
    const { message } = props
    return (
        <Text style={styles.container}>{message}</Text>
    )
}

const styles = StyleSheet.create({
    container: {
        fontSize: 14,
        color: "red",
        marginTop: 5,
    }
})