import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import Color from '@/constants/color'
import ItemNV from './ItemNV'

type Tprops = {
    company: {
        id: number,
        title: string,
        address: string,
        phone: string,
        email: string,
    }
}

export default function ItemCompany(props: Tprops) {
    const { company } = props
    return (
        <View style={styles.container}>
            <View style={styles.upper}>
                <ScrollView style={{ marginRight: 15 }} horizontal={true}>
                    <Text style={styles.title}>{company.title}</Text>
                </ScrollView>
                <Button color={Color.primary} title='Thêm Công Ty' />
            </View>
            <Text style={styles.address}>{company.address}</Text>
            <ItemNV />
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