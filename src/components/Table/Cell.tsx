import Color from '@/constants/color'
import ModalWrapper from '@comp/Modal/Modal'
import { Children, memo, useState } from 'react'
import { Modal } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { View, Text, StyleSheet } from 'react-native'
interface Iprops {
  title: string
  width?: number
  primary?: boolean
  alert?: boolean
  bold?: boolean
  useModal?: boolean
}

interface ICellProps {
  title: string
  styleText: object
  styleBold: object
}

function TextCell(props: ICellProps) {
  const { title, styleText, styleBold } = props
  return (
    <Text style={[styles.text, styleBold, styleText]}>{title}</Text>
  )
}
function ModalCell(props: { children?: React.ReactNode } & ICellProps) {
  const { title, styleText, styleBold, children } = props
  const [isVisible, setVisible] = useState(false)
  return (
    <>
      <TouchableOpacity onPress={() => setVisible(true)}><Text style={[styles.text, styleBold, styleText]}>{title}</Text></TouchableOpacity>
      <Modal transparent visible={isVisible}>
        <ModalWrapper onClose={() => setVisible(false)}>{children}</ModalWrapper>
      </Modal>
    </>

  )
}
function Cell(props: { children?: React.ReactNode } & Iprops) {
  const { title, bold, width, primary, alert, useModal = false, children } = props
  const styleText = primary ? styles.textPrimary : alert ? styles.textAlert : styles.textBasic
  const styleBold = bold ? styles.textBold : {}
  const propsCell = { title, styleText, styleBold }
  return (
    <View style={[styles.container, { width }]}>
      {useModal ? <ModalCell {...propsCell}>{children}</ModalCell> : <TextCell {...propsCell} />}
    </View>
  )
}
export default memo(Cell)
const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f9f9f9',
    justifyContent: 'center',
  },
  text: {
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center'
  },
  textBold: {
    fontWeight: '800',
  },
  textAlert: {
    color: Color.alert_text
  },
  textPrimary: {
    color: Color.primary_text
  },
  textBasic: {
    color: "#000000"
  }
})