import { Tchildren } from '@/types'
import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

interface IProps extends Tchildren {
    onPress?: () => void | unknown
}

export default function ButtonArrow(props: IProps) {
    const { children, onPress } = props
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            {children}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'center'
    }
})