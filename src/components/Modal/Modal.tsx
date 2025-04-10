import { Tchildren } from '@/types';
import AntDesign from '@expo/vector-icons/AntDesign';
import React from 'react';
import { StyleSheet, TouchableHighlight, View } from 'react-native';
interface IProps extends Tchildren {
    onClose: () => void
}
export default function ModalWrapper(props: IProps) {
    const { children, onClose } = props
    return (
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                {children}
            </View>
            <TouchableHighlight onPress={onClose} style={styles.closeButton}>
                <AntDesign name="closecircle" size={24} color="#FF2000" />
            </TouchableHighlight>
        </View>
    )
}
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '95%',
        marginHorizontal: 'auto',
    },
    modalView: {
        width: '100%',
        height: '100%',
        margin: 20,
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
    },
    closeButton: {
        backgroundColor: '#FFF',
        position: 'absolute',
        top: 0,
        right: 2,
        padding: 2,
        borderRadius: 50,
    }
})