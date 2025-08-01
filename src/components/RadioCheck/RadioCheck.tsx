import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Titem = {
    label: string,
    value: string,
}

interface Iprops {
    value: string,
    listCheck: Titem[],
    onChangeValue: (value: string) => void
}

export default function RadioCheckers(props: Iprops) {
    const { value, onChangeValue, listCheck } = props

    const handleChangeValue = (selectValue: string) => {
        if (selectValue === value){
            onChangeValue('0')
        } else {
            onChangeValue(selectValue)
        }
    }

    return (
        <View style={styles.container}>
            {listCheck.map((item: Titem, index: number) => (
                <TouchableOpacity style={styles.radio} key={index} onPress={() => handleChangeValue(item.value)}><MaterialIcons name={item.value === value ? 'radio-button-checked' : 'radio-button-unchecked'} size={24} color="black" /><Text style={styles.radioLabel}>{item.label}</Text></TouchableOpacity>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 15,
        gap: 10
    },
    radio: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    radioLabel: {
        fontSize: 16,
        fontWeight: '600'
    }
})