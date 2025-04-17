import { View, Text, Dimensions, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Color from '@/constants/color';

const { width } = Dimensions.get('window');
const DATE_CELL_WIDTH = 50;
const dates = Array.from({ length: 30 }, (_, i) => (i + 1).toString().padStart(2, '0'));

const employees = [
    { name: 'Trần Hoàng Khánh', id: '11', attendance: Array(30).fill('11') },
    { name: 'Trần Ngọc Thị', id: '13', attendance: Array(30).fill('13') },
];

export default function ItemNV() {
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
                    {employees.map((employee, index) => (
                        <View key={index} style={styles.employeeRow}>
                            <View style={styles.employeeName}>
                                <Text style={styles.employeeText}>{employee.name}</Text>
                                <Text style={styles.employeeId}>{employee.id}</Text>
                            </View>

                            <View style={styles.attendanceRow}>
                                {employee.attendance.map((status, i) => (
                                    <View key={i} style={styles.attendanceCell}>
                                        <View
                                            style={[
                                                styles.statusCircle,
                                                { backgroundColor: status === '11' ? '#4A90E2' : '#2ECC71' },
                                            ]}
                                        >
                                            <Text style={styles.statusText}>{status}</Text>
                                        </View>
                                    </View>
                                ))}
                            </View>

                            <View style={styles.totalCell}>
                                <Text style={styles.totalText}>{25}</Text>
                            </View>
                        </View>
                    ))}
                </View>
            </View>
        </ScrollView>
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
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    statusText: {
        color: '#fff',
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