import months from '@/constants/months';
import years from '@/constants/years';
import { nextMonth, prevMonth, setDate, setMonth, setYear } from '@/store/redux/ReduxDate/slice';
import ButtonArrow from '@comp/Buttons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Picker } from '@react-native-picker/picker';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';

export default function SelectDate() {
    const dateStateTime = useSelector((state: { date: { date: number } }) => state.date.date)
    const dateState = new Date(dateStateTime)
    const dispatch = useDispatch()
    const setPreviousDate = () => {
        dispatch(prevMonth())
    }
    const setNextDate = () => {
        dispatch(nextMonth())
    }
    const setChangeMonth = (month: number) => {
        dispatch(setMonth(month))
    }
    const setChangeYear = (year: number) => {
        dispatch(setYear(year))
    }
    useEffect(() => {
        async function initializeDate() {
            try {
                const storedDate = await AsyncStorage.getItem("date");
                if (storedDate !== null) {
                    const savedTimestamp = parseInt(storedDate, 10);
                    dispatch(setDate(savedTimestamp))
                } else {
                    // If not exists, save the current Redux date value to AsyncStorage.
                    await AsyncStorage.setItem("date", dateStateTime.toString());
                }
            } catch (error) {
                console.error("Error accessing AsyncStorage:", error);
            }
        }
        initializeDate()
    }, [])
    useEffect(() => {
        async function setAsyncStorageDate() {
            try {
                await AsyncStorage.setItem("date", dateStateTime.toString());
            } catch (error) {
                console.error("Error accessing AsyncStorage:", error);
            }
        }
        setAsyncStorageDate()
    }, [dateStateTime])
    return (
        <View style={{ padding: 10, flexDirection: 'column' }}>
            <View style={styles.navigateDate}>
                <View style={styles.button}>
                    <ButtonArrow onPress={setPreviousDate}>
                        <AntDesign name="caretleft" size={24} />
                    </ButtonArrow>
                </View>
                <Picker style={styles.input} onValueChange={setChangeMonth} selectedValue={dateState.getMonth()}>
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
            <View>
                <Text>{dateState.toLocaleDateString()} {dateState.getMonth()}</Text>
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