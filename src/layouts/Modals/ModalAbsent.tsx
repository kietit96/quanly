import Feather from '@expo/vector-icons/Feather';
import React, { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import ButtonIcon from '../ButtonIcon';
export default function ModalAbsent() {
    const [isShow, setIsShow] = useState<boolean>(false)
    const handleChangeShow = () => {
        setIsShow(!isShow)
    }
    return (
        <ButtonIcon icon={<Feather name="coffee" size={28} color="#e1e1e1" />} style={styles.color} isShow={isShow} onChangeShow={handleChangeShow}>
            <Text>Text modal</Text>
        </ButtonIcon>
    )
}

const styles = StyleSheet.create({
    color: { backgroundColor: '#532523' },
})