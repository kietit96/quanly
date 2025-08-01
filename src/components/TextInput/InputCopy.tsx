import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { TProps } from './type';
function InputCopy(props: TProps) {
    const { style, value, onChangeText, onBlur, placeholderColor = '#a1a1a1', placeholder = '' } = props;

    return (
        <View style={StyleSheet.flatten([style, styles.container])}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor={placeholderColor}
                value={value}
                onChangeText={onChangeText}
            />
            <TouchableOpacity style={styles.button}>
                <FontAwesome6 name="copy" size={24} color="black" />
            </TouchableOpacity>
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
        flex: 0.85,
        paddingHorizontal: 15,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#a1a1a1",

    },
    button: {
        flex: 0.15,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
})
export default InputCopy