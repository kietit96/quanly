import Color from '@/constants/color'
import InputPassword from '@comp/TextInput/InputPassword'
import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ViewStyle } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Content from './Content'

export default function Login() {
  const [userName, setUserName] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const handleChangeUseName = (text: string) => {
    setUserName(text)
  }
  const handleChangePassword = (text: string) => {
    setPassword(text)
  }
  return (
    <View style={styles.backgroundLogin}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.loginForm}>
            <View style={{ gap: 15 }}>
              <TextInput value={userName} onChangeText={handleChangeUseName} style={styles.inputForm} placeholder="Tên đăng nhập" placeholderTextColor='#a1a1a1' />
              <InputPassword value={password} onChangeText={handleChangePassword} placeholder="Mật khẩu" style={styles.inputForm} />
              <TouchableOpacity style={styles.buttonLogin} onPress={() => { }}>
                <Text style={styles.buttonText}>Đăng nhập</Text>
              </TouchableOpacity>
            </View>
            <Content />
          </View>
        </View>
      </SafeAreaView >
    </View >
  )
}
const styles = StyleSheet.create({
  backgroundLogin: {
    backgroundColor: Color.bg_login_primary,
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginForm: {
    backgroundColor: '#FFF',
    width: '80%',
    padding: 20,
  },
  inputForm: {
    backgroundColor: '#f2f2f2',
    height: 50,
    paddingHorizontal: 10,
  } as ViewStyle,
  buttonLogin: {
    backgroundColor: '#E1D009',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#FFF',
    textTransform: 'uppercase',
  },
})