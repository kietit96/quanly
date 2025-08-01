import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import React, { useState, memo } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { TProps } from './type';
import { useController } from 'react-hook-form';
function InputPassword(props: TProps) {
    const { style, placeholderColor = '#a1a1a1', placeholder = '', name, control } = props;
    const { field } = useController({ name, control })

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
                value={field.value}
                onChangeText={field.onChange}
                onBlur={field.onBlur}
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