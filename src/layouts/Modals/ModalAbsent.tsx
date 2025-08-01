import Color from '@/constants/color';
import { returnTextMonth } from '@/functions/lib';
import useStateDate from '@/hooks/useStateDate';
import { getListAbsent } from '@/services/getListAbsent';
import Feather from '@expo/vector-icons/Feather';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import ButtonIcon from '../ButtonIcon';
import AbsentItem from './modal/AbsentItem';
export default function ModalAbsent() {
    const [isShow, setIsShow] = useState<boolean>(false)
    const [listAbsent, setListAbsent] = useState<any>([])
    const [dateTimeState, dispatch] = useStateDate()
    const date = new Date(dateTimeState.date)
    const handleChangeShow = () => {
        setIsShow(!isShow)
    }
    useEffect(() => {
        async function loadListAbsent() {
            const list_absent = await getListAbsent(date.getMonth(), date.getFullYear())
            setListAbsent(list_absent.data)
        }
        loadListAbsent()
    }, [dateTimeState])
    return (
        <ButtonIcon icon={<Feather name="coffee" size={28} color="#e1e1e1" />} style={styles.color} isShow={isShow} onChangeShow={handleChangeShow}>
            <View style={styles.container}>
                <Text style={styles.titleModal}>Nhân viên xin nghỉ - Tháng {returnTextMonth(date.getMonth())}</Text>
                <ScrollView keyboardShouldPersistTaps="handled">
                    {listAbsent && listAbsent.map((item: any, index: number) => (
                        <AbsentItem key={index} {...item} />
                    ))}
                </ScrollView>
            </View>
        </ButtonIcon>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 2,
        backgroundColor: '#C7C7C7',
        borderRadius: 10,
        flex: 1,
        width: "100%"
    },
    titleModal: {
        backgroundColor: Color.primary,
        color: '#FFFFFF',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '800',
        textTransform: 'uppercase',
        paddingVertical: 10,
        margin: 0,
        borderRadius: 8,
    },
    color: { backgroundColor: '#532523' },
})