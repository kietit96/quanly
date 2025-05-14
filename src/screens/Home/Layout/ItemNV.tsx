import { View, Text, Dimensions, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Color from '@/constants/color';
import useStateDate from '@/hooks/useStateDate';

const DATE_CELL_WIDTH = 50;

interface IProps {
    listNV: any[],
    listNV2: any[],
}

export default function ItemNV(props: IProps) {
    const { listNV, listNV2 } = props
    const [stateDate, dispatch] = useStateDate()
    const dates = Array.from({ length: stateDate.maxday }, (_, i) => (i + 1).toString().padStart(2, '0'));
    return (
        <ScrollView style={{ marginTop: 20 }} horizontal>
            <View style={styles.container}>
                {/* Header with scrollable dates */}
                <View style={styles.headerContainer}>
                    <View style={styles.datesHeader}>
                        <View style={styles.employeeHeader}>
                            <Text style={styles.headerText}>NHÂN VIÊN</Text>
                        </View>
                        <View style={styles.datesRow}>
                            {dates.map((date, index) => (
                                <View key={index} style={styles.dateCell}>
                                    <Text style={styles.dateText}>{date}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                    <View style={styles.totalHeader}>
                        <Text style={styles.headerText}>CÔNG</Text>
                    </View>
                </View>
                {/* Body with scrollable employee list */}
                <View style={styles.bodyContainer}>
                    {listNV.length > 0 && listNV.map((employee, index) => (
                        <SingleNV key={index} dates={dates} employee={employee} />
                    ))}
                </View>
            </View>
        </ScrollView>
    )
}
type singleNV = {
    id: number,
    title: string,
    checkIfExit: {
        id: number,
        nangxuatlam: string
    },
}

interface IpropsSingleNV {
    employee: singleNV,
    dates: string[]
}
function SingleNV(propsSingleNV: IpropsSingleNV) {
    const { employee, dates } = propsSingleNV
    const str_nangxuat = employee.checkIfExit.nangxuatlam || "{}"
    const ListNangXuat = JSON.parse(str_nangxuat)
    return (
        <View style={styles.employeeRow}>
            <View style={styles.employeeName}>
                <Text style={styles.employeeText}>{employee.title}</Text>
            </View>
            <View style={styles.attendanceRow}>
                {dates.map((date, i) => {
                    const status = ListNangXuat[date] || 'off'
                    const [textDate, color] = status
                    return (
                        <View key={i} style={styles.attendanceCell}>
                            <View style={[
                                styles.statusCircle,
                                { backgroundColor: status === 'off' ? '#FFF' : color },
                            ]}>
                                <Text style={[styles.statusText, { color: status === 'off' ? '#dbd6d6' : '#FFF' }]}>{status === 'off' ? date : textDate}</Text>
                            </View>
                        </View>
                    )
                })}
            </View>
            <View style={styles.totalCell}>
                <Text style={styles.totalText}>{employee.checkIfExit.cong}</Text>
            </View>
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    headerContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    datesHeader: {
        flexDirection: 'row'
    },
    employeeHeader: {
        width: 150,
        padding: 10,
        backgroundColor: '#f0f0f0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    datesRow: {
        flexDirection: 'row',
    },
    dateCell: {
        width: DATE_CELL_WIDTH,
        padding: 5,
        borderStartWidth: 1,
        borderColor: '#CCC',
        backgroundColor: Color.primary_bg,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dateText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: "#FFF"
    },
    totalHeader: {
        width: 60,
        padding: 10,
        backgroundColor: '#f0f0f0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    bodyContainer: {
        flex: 1,
    },
    employeeRow: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#eee',
    },
    employeeName: {
        width: 150,
        padding: 10,
        backgroundColor: '#f9f9f9',
        justifyContent: 'center',
    },
    employeeText: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    employeeId: {
        fontSize: 12,
        color: '#666',
    },
    attendanceRow: {
        flexDirection: 'row',
    },
    attendanceCell: {
        width: DATE_CELL_WIDTH,
        borderStartWidth: 1,
        borderColor: '#f2f2f2',
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    statusCircle: {
        width: '100%',
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#dbd6d6',
        borderRadius: 50,
    },
    statusText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    totalCell: {
        width: 60,
        padding: 10,
        backgroundColor: '#f9f9f9',
        justifyContent: 'center',
        alignItems: 'center',
    },
    totalText: {
        fontSize: 14,
        fontWeight: 'bold',
    },
});