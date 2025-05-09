import { View, Text, StyleSheet, ViewStyle } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import ButtonIcon from '../ButtonIcon';

export default function ModalSettings() {
    const [isShow, setIsShow] = useState<boolean>(false)
    const handleChangeShow = () => {
        setIsShow(!isShow)
    }
    return (
        <ButtonIcon icon={<Ionicons name="settings" size={28} color="#444444" />} style={styles.color} isShow={isShow} onChangeShow={handleChangeShow}>
            <Text>Text modal</Text>
        </ButtonIcon>
    )
}
const styles = StyleSheet.create({
    color: {
        backgroundColor: '#dfd189',
    } as ViewStyle
})
