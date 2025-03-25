import { ThemeHeader } from '@/wrapper/WrapperHeader';
import SelectDate from '@/layouts/SelectDate';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function Header() {
  return (
    <ThemeHeader>
      <SafeAreaView style={styles.backgroundHeader}>
        <View style={styles.TitleHeader}>
          <Text style={styles.title}>Chấm công tháng 01/2025</Text>
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
    marginBottom: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#fff000',
    textAlign: 'center',
  }
})
