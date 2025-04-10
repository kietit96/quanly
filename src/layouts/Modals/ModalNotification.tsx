import { View, Text, StyleSheet, ViewStyle } from 'react-native'
import React, { useState } from 'react'
import ButtonIcon from '../ButtonIcon'
import Ionicons from '@expo/vector-icons/Ionicons';
export default function ModalNotification() {
    const [isShow, setIsShow] = useState<boolean>(false)
    const handleChangeShow = () => {
        setIsShow(!isShow)
    }
    return (
        <ButtonIcon icon={<Ionicons name="notifications-sharp" size={28} color="#e1e1e1" />} style={styles.color} isShow={isShow} onChangeShow={handleChangeShow}>
            <Text>Text modal</Text>
        </ButtonIcon>
    )
}
const styles = StyleSheet.create({
  color: {
    backgroundColor: '#FF2000',
  } as ViewStyle
})