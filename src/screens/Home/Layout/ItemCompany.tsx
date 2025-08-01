import Color from '@/constants/color'
import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import HeaderSingleNV from './IitemNV/HeaderSingleNV'
import ItemNV from './ItemNV'

interface Iprops {
    seenStaffs: Set<number>,
    company: {
        id: number,
        title: string,
        address: string,
        phone: string,
        email: string,
        listNV: any[],
        listNV2: any[],
    }
}

export default function ItemCompany(props: Iprops) {
    const { company, seenStaffs } = props
    return (
        <View style={styles.container}>
            <View style={styles.upper}>
                <ScrollView style={{ marginRight: 15 }} horizontal={true}>
                    <Text style={styles.title}>{company.title}</Text>
                </ScrollView>
                <Button color={Color.primary} title='Thêm Công Ty' />
            </View>
            <Text style={styles.address}>{company.address}</Text>
            <ItemNV seenStaffs={seenStaffs} listNV={company.listNV} listNV2={company.listNV2}>
                <HeaderSingleNV />
            </ItemNV>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginVertical: 5,
        padding: 10,
    },
    upper: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 21,
        fontWeight: 500
    },
    address: {
        marginTop: 10,
        fontSize: 16,
    }
})