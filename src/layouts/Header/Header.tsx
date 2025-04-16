import SelectDate from '@/layouts/SelectDate';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


import { ThemeHeader } from '@comp/wrapper/WrapperHeader';
import ModalAbsent from '../Modals/ModalAbsent';
import ModalMessage from '../Modals/ModalMessage';
import ModalNotification from '../Modals/ModalNotification';
import ModalSettings from '../Modals/ModalSettings';
export default function Header() {
  return (
    <ThemeHeader>
      <SafeAreaView style={styles.backgroundHeader}>
        <View>
          <View style={styles.TitleHeader}>
            <Text style={styles.title}>Chấm công tháng 01/2025</Text>
          </View>
          <View style={styles.features}>
            <ModalMessage />
            <ModalAbsent />
            <ModalNotification />
            <ModalSettings />
          </View>
        </View>
        <SelectDate />
      </SafeAreaView>
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
