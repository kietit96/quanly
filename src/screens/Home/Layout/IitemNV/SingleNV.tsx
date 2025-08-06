import { checkDecimal } from "@/functions/check_decimal"
import { number_format } from "@/functions/format_number"
import useStateDate from "@/hooks/useStateDate"
import { setChuyencan, setResultEmployee, setValuesEmployee } from "@/store/reducer/reducerEmployee/action"
import reducerEmployee, { initEmployeeInfo, TemployeeInfo, TinputFormNV } from "@/store/reducer/reducerEmployee/reducer"
import Cell from "@comp/Table/Cell"
import CellChkDate from "@comp/Table/CellCheckDate"
import { useCallback, useEffect, useReducer } from "react"
import { StyleSheet, View } from "react-native"
import { calculate_chuyencan, getWidthColumns } from "../../function"
import StaffEdit from "../Modal/StaffEdit"

interface IpropsSingleNV {
    employee: TemployeeInfo,
}
const columnWidths = getWidthColumns()
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
} = columnWidths

function SingleNV(propsSingleNV: IpropsSingleNV) {
    const [stateDate] = useStateDate()
    const dates = stateDate.listDates
    const { employee } = propsSingleNV
    const real_max_day = dates.length
    const [stateEmployee, dispatchEmployee] = useReducer(reducerEmployee, initEmployeeInfo, (init) => ({ ...init, ...employee }))
    const { title } = stateEmployee
    const { id: idnangxuat, nangxuatlam = "{}", tienchuyencan = 0 } = stateEmployee.checkIfExit
    const ListNangXuat = JSON.parse(nangxuatlam)
    const { show_chamcong, show_tamtinh, show_thuclanh } = stateEmployee.result
    const { luong } = stateEmployee.luong
    const { checkIfExit } = stateEmployee
    const { ngayle = 0, hotro = 0, dongphuc = 0, vipham = 0, muonrieng_tinhluong = 0 } = stateEmployee.phatsinh
    const { isSeen, luongung } = stateEmployee.luongung
    const show_luongung = !luongung ? 0 : isSeen ? 0 : +luongung
    const handleSumbitChange = useCallback((data: TinputFormNV) => {
        console.log(data)
        dispatchEmployee(setValuesEmployee(data))
    }, [])
    const handleCheckDate = (value: string) => {
        // const [stateChooseItems] = useStateChooseItem()
        // dispatchEmployee(setChamcong({
        //     date: value,
        //     chamcong: {
        //         time: stateChooseItems.choosen_item.time,
        //         color: stateChooseItems.choosen_item.rgb
        //     }
        // }))
    }
    useEffect(() => {
        const arrListNangXuat = Object.entries(ListNangXuat)
        if (arrListNangXuat.length === real_max_day) {
            const luongChuyencan = calculate_chuyencan(+luong)
            dispatchEmployee(setChuyencan(luongChuyencan))
        }
    }, [luong, checkIfExit.nangxuatlam])
    useEffect(() => {
        dispatchEmployee(setResultEmployee({ real_max_day, show_luongung }))
    }, [stateEmployee.phatsinh, luong, checkIfExit])
    return (
        <View style={styles.container}>
            <Cell useModal bold title={title} width={TITLE_CELL_WIDTH}>
                <StaffEdit onSubmit={handleSumbitChange} employeeEditInfo={stateEmployee} />
            </Cell>
            {dates.map((date, index) =>
                <CellChkDate onPress={handleCheckDate} key={index} width={DATE_CELL_WIDTH} date={date} rawlist={ListNangXuat[date]} />
            )}
            <Cell bold alert={checkDecimal(show_chamcong)} title={show_chamcong.toString()} width={CONG_CELL_WIDTH} />
            <Cell bold title={number_format(+luong)} width={SALARY_CELL_WIDTH} />
            <Cell bold title={number_format(+tienchuyencan)} width={CHUYENCAN_CELL_WIDTH} />
            <Cell bold title={number_format(+ngayle)} width={NGAYLE_CELL_WIDTH} />
            <Cell bold title={number_format(+hotro)} width={HOTRO_CELL_WIDTH} />
            <Cell bold title={number_format(show_tamtinh)} width={TONGLUONG_CELL_WIDTH} />
            <Cell bold alert title={'- ' + number_format(show_luongung)} width={UNGLUONG_CELL_WIDTH} />
            <Cell bold title={number_format(+dongphuc)} width={DONGPHUC_CELL_WIDTH} />
            <Cell bold alert title={"- " + number_format(+vipham)} width={VIPHAM_CELL_WIDTH} />
            <Cell bold alert title={"- " + number_format(+muonrieng_tinhluong)} width={UNGTHEM_CELL_WIDTH} />
            <Cell bold primary title={number_format(show_thuclanh)} width={THUCLANH_CELL_WIDTH} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#eee',
    },
    employeeId: {
        fontSize: 12,
        color: '#666',
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
})

export default SingleNV