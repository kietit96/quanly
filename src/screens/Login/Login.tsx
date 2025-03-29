import { catchMessageError } from '@/catchError'
import Color from '@/constants/color'
import { LoginAuth } from '@/services/auth'
import InputPassword from '@comp/TextInput/InputPassword'
import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ViewStyle } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as yup from 'yup'
import Content from './Content'

interface Iinputform {
  username: string
  password: string
}

export default function Login() {
  const schema = yup.object().shape({
    username: yup.string().required('Tên đăng nhập không được để trống'),
    password: yup.string().required('Mật khẩu không được để trống')
  }).required()
  const { handleSubmit, control, formState: { errors } } = useForm<Iinputform>({
    defaultValues: {
      username: '',
      password: '',
    },
    resolver: yupResolver(schema),
  })
  const onSubmit = async (data: Iinputform) => {
    const { username, password } = data

    const a = await LoginAuth(username, password)
    console.log(a)
  }
  return (
    <View style={styles.backgroundLogin}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.loginForm}>
            <View style={{ gap: 15 }}>
              <Controller
                name="username"
                control={control}
                render={({ field: { onChange, value, onBlur } }) =>
                  <TextInput
                    style={styles.inputForm}
                    placeholder="Tên đăng nhập"
                    placeholderTextColor='#a1a1a1'
                    onChangeText={onChange}
                    value={value}
                    onBlur={onBlur}
                  />
                }
              />
              {errors.username && <Text style={styles.errorText}>{errors.username.message}</Text>}
              <InputPassword
                name="password"
                control={control}
                style={styles.inputForm}
                placeholder="Mật khẩu" />
              {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}
              <TouchableOpacity style={styles.buttonLogin} onPress={handleSubmit(onSubmit)}>
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
  errorText: {
    color: '#FF0000',
  }
})