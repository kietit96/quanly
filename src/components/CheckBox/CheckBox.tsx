import Checkbox from "expo-checkbox";
import { useState } from "react";
import { StyleSheet } from "react-native";

interface Iprops {
    onChangeValue: (value: number) => void
    value: number
}

export default function CheckBox(props: Iprops) {
    const { onChangeValue, value } = props

    const [state, setState] = useState(+value);

    const handleChangeValue = (value: boolean) => {
        const stateValue = value ? 1 : 0
        onChangeValue(stateValue)
        setState(stateValue)
    }

    return (
        <Checkbox value={!!state} onValueChange={handleChangeValue} style={styles.checkbox} />
    )
}
const styles = StyleSheet.create({
    checkbox: {
        marginVertical: 5,
        padding: 15
    },
})