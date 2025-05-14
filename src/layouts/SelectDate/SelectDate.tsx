import months from '@/constants/months';
import years from '@/constants/years';
import useStateDate from '@/hooks/useStateDate';
import { nextMonth, prevMonth, setMonth, setYear } from '@/store/redux/ReduxDate/slice';
import ButtonArrow from '@comp/Buttons/Arrow';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Picker } from '@react-native-picker/picker';
import { StyleSheet, View } from 'react-native';

export default function SelectDate() {
    const [dateTimeState, dispatch] = useStateDate()
    const dateState = new Date(dateTimeState.date)
    const setPreviousDate = () => {
        dispatch(prevMonth())
    }
    const setNextDate = () => {
        dispatch(nextMonth())
    }
    const setChangeMonth = (month: string) => {
        dispatch(setMonth(+month))
    }
    const setChangeYear = (year: number) => {
        dispatch(setYear(year))
    }

    return (
        <View style={styles.navigateDate}>
            <View style={styles.button}>
                <ButtonArrow onPress={setPreviousDate}>
                    <AntDesign name="caretleft" size={24} />
                </ButtonArrow>
            </View>
            <Picker style={styles.input} onValueChange={setChangeMonth} selectedValue={dateState.getMonth().toString()}>
                {months.map(m => <Picker.Item key={m.value} label={m.label} value={m.value} />)}
            </Picker>
            <Picker style={styles.input} onValueChange={setChangeYear} selectedValue={dateState.getFullYear()}>
                {years.map(y => <Picker.Item key={y.value} label={y.label} value={y.value} />)}
            </Picker>
            <View style={styles.button}>
                <ButtonArrow onPress={setNextDate}>
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