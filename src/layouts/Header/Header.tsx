import SelectDate from '@/layouts/SelectDate';
import React from 'react';
import { Button, Modal, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


import Feather from '@expo/vector-icons/Feather';
import { ThemeHeader } from '@comp/wrapper/WrapperHeader';
import ModalMessage from '../Modals/ModalMessage';
import ModalAbsent from '../Modals/ModalAbsent';
import ModalNotification from '../Modals/ModalNotification';
import ModalSettings from '../Modals/ModalSettings';
export default function Header() {
  const [isShowModal, setIsShowModal] = React.useState(false);
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
