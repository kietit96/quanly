import React, { useEffect, useState } from 'react';
import { useController } from 'react-hook-form';
import { StyleSheet, TextInput, View } from 'react-native';
import { TProps, Tkeyboardtype } from './type';
import { number_format } from '@/functions/format_number';
interface InputNumberFormatProps extends TProps {
    keyboardType?: Tkeyboardtype
}
function InputNumberFormat(props: InputNumberFormatProps) {
    const { style, value = 0, onChangeText, onBlur, placeholderColor = '#a1a1a1', placeholder = '', keyboardType = "default" } = props;

    const [displayValue, setDisplayValue] = useState(number_format(+value))
    const handleChangeText = (value: string) => {
        const rawValue = +value.replace(/[^0-9]/g, ''); // keep only digits
        onChangeText(rawValue.toString())
        setDisplayValue(number_format(rawValue)); // show formatted value
    }
    return (
        <View style={StyleSheet.flatten([style, styles.container])}>
            <TextInput
                keyboardType="number-pad"
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor={placeholderColor}
                value={displayValue}
                onChangeText={handleChangeText}
                onBlur={onBlur}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 50,
        paddingRight: 0,
    },
    input: {
        flex: 1,
        padding: 15,
        width: '100%',
        borderRadius: 5,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#a1a1a1',
    },
})
export default InputNumberFormat