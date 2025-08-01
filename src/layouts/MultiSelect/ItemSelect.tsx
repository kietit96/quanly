import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

interface Iprops {
    isSelected?: boolean,
    name: string,
    value: any,
    onPress: (value: string) => void
}

export default function ItemSelect(props: Iprops) {
    const { isSelected = false, name, value, onPress } = props
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => onPress(value)}>
                <Text style={[styles.text, isSelected && styles.textSelected]}>{name} {isSelected && <Text style={styles.textSelected}>✓</Text>}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 8,
        marginBottom: 8,
        borderBottomColor: '#e7e7e7ff',
        borderBottomWidth: 1,
        borderStyle: 'solid'
    },
    text: {
        fontSize: 16.5,
    },
    textSelected: {
        color: '#b2b2b2ff'
    }
})