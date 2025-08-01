import { Tchildren } from '@/types'
import ModalWrapper from '@comp/Modal/Modal'
import { ReactNode } from 'react'
import { Modal, StyleProp, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native'
interface Iprops extends Tchildren {
    isShow: boolean,
    onChangeShow: () => void | unknown,
    style: StyleProp<ViewStyle>,
    icon: ReactNode
}
export default function ButtonIcon(props: Iprops) {
    const { style, isShow, icon, children, onChangeShow } = props
    return (
        <>
            <TouchableOpacity onPress={onChangeShow} style={StyleSheet.flatten([styles.button, style])}>
                {icon}
            </TouchableOpacity>
            <Modal
                transparent={true}
                visible={isShow}
                animationType="slide">
                <ModalWrapper onClose={onChangeShow}>
                    {children}
                </ModalWrapper>
            </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 42,
        aspectRatio: 1,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    }
})