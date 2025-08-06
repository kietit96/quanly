import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import React, { memo, useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { TProps } from './type';
function InputPassword(props: TProps) {
    const { onChangeText, onBlur, style, placeholderColor = '#a1a1a1', placeholder = '', value } = props;
    const [isShow, setIsShow] = useState<boolean>(false)
    const toggleShow = () => {
        setIsShow(!isShow)
    }
    return (
        <View style={StyleSheet.flatten([style, styles.container])}>
            <TextInput
                secureTextEntry={!isShow}
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor={placeholderColor}
                value={value}
                onChangeText={onChangeText}
                onBlur={onBlur}
            />
            <TouchableOpacity style={styles.button} onPress={toggleShow}>
                <FontAwesome5 name={isShow ? 'eye-slash' : 'eye'} size={18} color="black" />
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
    },
    button: {
        flex: 0.15,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
})
export default memo(InputPassword)