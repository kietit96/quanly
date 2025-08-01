import Color from '@/constants/color';
import useStateDate from '@/hooks/useStateDate';
import Theader from '@comp/Table/Theader';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getWidthColumns } from '../../function';

const columnsWidth = getWidthColumns()
const {
    DATE_CELL_WIDTH,
    TITLE_CELL_WIDTH,
    CONG_CELL_WIDTH,
    SALARY_CELL_WIDTH,
    CHUYENCAN_CELL_WIDTH,
    NGAYLE_CELL_WIDTH,
    HOTRO_CELL_WIDTH,
    TONGLUONG_CELL_WIDTH,
    UNGLUONG_CELL_WIDTH,
    DONGPHUC_CELL_WIDTH,
    VIPHAM_CELL_WIDTH,
    UNGTHEM_CELL_WIDTH,
    THUCLANH_CELL_WIDTH
} = columnsWidth


export default function HeaderSingleNV() {
    const [stateDate, dispatch] = useStateDate()
    return (
        <>
            {/* Header with scrollable dates */}
            <Theader title="NHÂN VIÊN" width={TITLE_CELL_WIDTH} />
            {stateDate.listDates.map((date, index) => (
                <View key={index} style={styles.dateCell}>
                    <Text style={styles.dateText}>{date}</Text>
                </View>
            ))}
            <Theader title="CÔNG" width={CONG_CELL_WIDTH} />
            <Theader title="LƯƠNG CƠ BẢN" width={SALARY_CELL_WIDTH} />
            <Theader title="CHUYÊN CẦN" width={CHUYENCAN_CELL_WIDTH} />
            <Theader title="NGÀY LỄ" width={NGAYLE_CELL_WIDTH} />
            <Theader title="HỖ TRỢ" width={HOTRO_CELL_WIDTH} />
            <Theader title="TỔNG LƯƠNG" width={TONGLUONG_CELL_WIDTH} />
            <Theader title="ỨNG LƯƠNG" width={UNGLUONG_CELL_WIDTH} />
            <Theader title="ĐỒNG PHỤC" width={DONGPHUC_CELL_WIDTH} />
            <Theader title="VI PHẠM" width={VIPHAM_CELL_WIDTH} />
            <Theader title="ỨNG THÊM" width={UNGTHEM_CELL_WIDTH} />
            <Theader title="THỰC LÃNH" width={THUCLANH_CELL_WIDTH} />
        </>
    )
}

const styles = StyleSheet.create({
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
});