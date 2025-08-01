import SelectDate from '@/layouts/SelectDate';
import { ThemeHeader } from '@comp/wrapper/WrapperHeader';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ModalAbsent from '../Modals/ModalAbsent';
import ModalMessage from '../Modals/ModalMessage';
import ModalNotification from '../Modals/ModalNotification';
import ModalSettings from '../Modals/ModalSettings';
import useStateDate from '@/hooks/useStateDate';
export default function Header() {
  const [dateTimeState, dispatch] = useStateDate()
  const date = new Date(dateTimeState.date)
  const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
  return (
    <ThemeHeader>
      <View style={styles.backgroundHeader}>
        <View style={styles.TitleHeader}>
          <Text style={styles.title}>Chấm công tháng {month}/2025</Text>
        </View>
        <View style={styles.features}>
          <ModalMessage />
          <ModalAbsent />
          <ModalNotification />
          <ModalSettings />
        </View>
        <SelectDate />
      </View>
    </ThemeHeader>
  )
}
const styles = StyleSheet.create({
  backgroundHeader: {
    paddingTop: 10,
  },
  TitleHeader: {
    marginBottom: 10,
  },
  features: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 10,
    marginBottom: 10,
    gap: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#fff000',
    textAlign: 'center',
  }
})
