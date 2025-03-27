import { ThemeHeader } from '@/wrapper/WrapperHeader';
import SelectDate from '@/layouts/SelectDate';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
export default function Header() {
  return (
    <ThemeHeader>
      <SafeAreaView style={styles.backgroundHeader}>
        <View>
          <View style={styles.TitleHeader}>
            <Text style={styles.title}>Chấm công tháng 01/2025</Text>
          </View>
          <View style={styles.features}>
            <TouchableOpacity style={{ ...styles.feature, ...styles.message }}><AntDesign name="message1" size={28} color="#e1e1e1" /></TouchableOpacity>
            <TouchableOpacity style={{ ...styles.feature, ...styles.coffee }}><Feather name="coffee" size={28} color="#e1e1e1" /></TouchableOpacity>
            <TouchableOpacity style={{ ...styles.feature, ...styles.notification }}><Ionicons name="notifications-sharp" size={28} color="#e1e1e1" /></TouchableOpacity>
            <TouchableOpacity style={{ ...styles.feature, ...styles.setting }}><Ionicons name="settings" size={28} color="#444444" /></TouchableOpacity>
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
  feature: {
    width: 42,
    aspectRatio: 1,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  message: {
    backgroundColor: '#11A1E8',
  },
  coffee: {
    backgroundColor: '#532523',
  },
  notification: {
    backgroundColor: '#FF2000',
  },
  setting: {
    backgroundColor: '#dfd189'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#fff000',
    textAlign: 'center',
  }
})
