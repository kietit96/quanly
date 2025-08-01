import Color from '@/constants/color';
import useStateDate from '@/hooks/useStateDate';
import { getListFeedback } from '@/services/getListFeedback';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View, ViewStyle } from 'react-native';
import ButtonIcon from '../ButtonIcon';
import MessageItem from './modal/MessageItem';
import { returnTextMonth } from '@/functions/lib';
export default function ModalMessage() {
  const [dateTimeState, dispatch] = useStateDate()
  const date = new Date(dateTimeState.date)
  const [isShow, setIsShow] = useState<boolean>(false)
  const [list_message, setListMessage] = useState<any>([])
  const handleChangeShow = () => {
    setIsShow(!isShow)
  }
  useEffect(() => {
    const loadFeedback = async () => {
      const resultList = await getListFeedback(date.getMonth(), date.getFullYear())
      setListMessage(resultList.data)
    }
    loadFeedback()
  }, [dateTimeState])
  return (
    <ButtonIcon icon={<AntDesign name="message1" size={28} color="#e1e1e1" />} style={styles.color} isShow={isShow} onChangeShow={handleChangeShow}>
      <View style={styles.container}>
        <Text style={styles.titleModal}>Tin nhắn nhân viên - tháng {returnTextMonth(date.getMonth())}</Text>
        <ScrollView keyboardShouldPersistTaps="handled">
          <View style={styles.table}>
            {
              list_message && list_message.map((item: any, index: number) => (
                <MessageItem key={index} {...item} />
              ))
            }
          </View>
        </ScrollView>
      </View>
    </ButtonIcon >
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 2,
    backgroundColor: '#fff',
    borderRadius: 10,
    flex: 1,
    width: "100%"
  },
  table: {
    width: "100%",
  },
  titleModal: {
    backgroundColor: Color.primary,
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '800',
    textTransform: 'uppercase',
    paddingVertical: 10,
    margin: 0,
    borderRadius: 8,
  },
  color: {
    backgroundColor: '#11A1E8',
  } as ViewStyle
})
