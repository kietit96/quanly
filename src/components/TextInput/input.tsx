import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { TProps, Tkeyboardtype } from './type';

function Input(props: { keyboardType?: Tkeyboardtype } & TProps) {
    const { style, value, onChangeText, onBlur, placeholderColor = '#a1a1a1', placeholder = '', keyboardType = "default" } = props;

    return (
        <View style={StyleSheet.flatten([style, styles.container])}>
            <TextInput
                keyboardType={keyboardType}
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor={placeholderColor}
                value={value}
                onChangeText={onChangeText}
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
export default Input