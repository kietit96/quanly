import { View, StyleSheet } from 'react-native'
import ButtonArrow from '@comp/Buttons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import months from '@/constants/months';
import { years } from '@/constants/years';
export default function SelectDate() {
    const [date, setDate] = useState(new Date())

    return (
        <View style={styles.navigateDate}>
            <View style={styles.button}>
                <ButtonArrow>
                    <AntDesign name="caretleft" size={24} />
                </ButtonArrow>
            </View>
            <Picker style={styles.input}>
                {months.map(m => <Picker.Item key={m.value} label={m.label} value={m.value} />)}
            </Picker>
            <Picker style={styles.input}>
                {years.map(y => <Picker.Item key={y.value} label={y.label} value={y.value} />)}
            </Picker>
            <View style={styles.button}>
                <ButtonArrow>
                    <AntDesign name="caretright" size={24} />
                </ButtonArrow>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    navigateDate: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 10
    },
    monthyearInput: {
        flex: 2
    },
    button: {
        flex: .8,
        backgroundColor: "#f2f2f2",
    },
    input: {
        flex: 2,
        backgroundColor: "#FFF",
    },
    yearInput: {
        flex: 2,
        backgroundColor: "#FFF",
    },
})