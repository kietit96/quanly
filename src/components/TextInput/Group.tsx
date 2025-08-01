import { StyleSheet, Text, View } from "react-native";

interface Iprops {
    children: React.ReactNode;
    label: string;
}

function GroupInput(props: Iprops): React.JSX.Element {
    const { children, label } = props;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{label}:</Text>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 5,
        color: '#333',
    }
})

export default GroupInput;