import AntDesign from '@expo/vector-icons/AntDesign';
import React, { useState } from 'react';
import { StyleSheet, Text, ViewStyle } from 'react-native';
import ButtonIcon from '../ButtonIcon';

export default function ModalMessage() {
  const [isShow, setIsShow] = useState<boolean>(false)
  const handleChangeShow = () => {
    setIsShow(!isShow)
  }
  return (
    <ButtonIcon icon={<AntDesign name="message1" size={28} color="#e1e1e1" />} style={styles.color} isShow={isShow} onChangeShow={handleChangeShow}>
      <Text>Text Modal</Text>
    </ButtonIcon>
  )
}

const styles = StyleSheet.create({
  color: {
    backgroundColor: '#11A1E8',
  } as ViewStyle
})
