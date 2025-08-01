import { deFormatDate, formatInputDate } from '@/functions/lib';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { useState } from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
interface Iprops {
    value: string
    onChangeValue: (value: string) => void
}
export default function DateSelect(props: Iprops) {
    const { value, onChangeValue } = props
    const [isShow, setShow] = useState(false)
    const initValue = deFormatDate(value)
    const handleCancel = () => {
        setShow(false)
    }
    const handleShow = () => {
        setShow(true)
    }
    const handleChange = (event: DateTimePickerEvent, date: Date | undefined) => {
        switch (event.type) {
            case 'dismissed': {
                handleCancel()
                break
            }
            case 'set': {
                handleCancel()
                if (date) {
                    onChangeValue(formatInputDate(date))
                }
            }
        }
    }
    return (
        <View style={{ flex: 1, width: '100%' }}>
            <TouchableOpacity style={styles.buttonPicker} onPress={handleShow}><Text>{value}</Text></TouchableOpacity>
            <Modal
                visible={isShow}
                style={{ flex: 1, width: '100%' }}
            >
                <View style={{ flex: 1, width: '100%' }}>
                    <DateTimePicker
                        mode={'date'}
                        value={new Date(initValue)}
                        onChange={handleChange}
                        locale="fr"
                    />
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonPicker: {
        width: '100%',
        padding: 15,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#a1a1a1'
    },
    modal: {
        position: 'static',
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
    }
})