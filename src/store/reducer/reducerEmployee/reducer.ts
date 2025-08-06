import { calculate_salary, calculate_thoivu_salary } from "@/screens/Home/function"
import { ActionTypes } from "./actionType"
import { TcheckIfExit } from "./type/typeChamcong"
import { Tluongung } from "./type/typeLuongung"
import { Tphatsinh } from "./type/typePhatsinh"
import { TresultNV } from "./type/typeResult"

export type TactionType = {
    type: string,
    payload: any,
}

export type TemployeeInfo = TinputFormNV & {
    checkIfExit: TcheckIfExit,
    phatsinh: Tphatsinh,
    luongung: Tluongung,
    result: TresultNV
}

export type TinputFormNV = {
    id: number,
    title: string,
    phone: string | null,
    phone2: string | null,
    phonenguoithan: string | null,
    nganhang: string,
    nganhang_bin: string,
    nganhang_stk: string,
    ngaysinh: string,
    tamtru: string,
    address: string,
    CCCD: string,
    ngaycap: string,
    chucvu: number
    tinhtrang: number,
    ghichucanhan: string,
    list_blacklist: string,
    blacklist: string,
    luong: {
        luong: string,
        standard_working: string,
        cadiem: number,
        chinhthuc: number,
    },
}


export const initEmployeeInfo: TemployeeInfo = {
    id: 0,
    title: "",
    list_blacklist: '',
    blacklist: '',
    phone: '',
    phone2: '',
    phonenguoithan: '',
    nganhang: '',
    nganhang_bin: '',
    nganhang_stk: '',
    ngaysinh: '',
    tamtru: '',
    address: '',
    CCCD: '',
    ngaycap: '',
    chucvu: 0,
    tinhtrang: 0,
    luong: {
        luong: '',
        standard_working: '',
        cadiem: 0,
        chinhthuc: 0,
    },
    phatsinh: {
        ngayle: '',
        hotro: '',
        dongphuc: '',
        vipham: '',
        muonrieng_tinhluong: '',
    },
    checkIfExit: {
        id: -1,
        nangxuatlam: '',
        cong: '',
        tienchuyencan: ''
    },
    luongung: {
        id: -1,
        isSeen: false,
        luongung: ''
    },
    result: {
        show_chamcong: 0,
        show_tamtinh: 0,
        show_thuclanh: 0
    },
    ghichucanhan: ""
}
const reducerEmployee = (state: TemployeeInfo = initEmployeeInfo, action: TactionType) => {
    switch (action.type) {
        case ActionTypes.SET_VALUETYPE:
            return Object.assign({}, state, action.payload as TinputFormNV)
        case ActionTypes.SET_CHUYENCAN:
            return {
                ...state,
                checkIfExit: {
                    ...state.checkIfExit,
                    tienchuyencan: action.payload
                }
            }
        case ActionTypes.SET_CHAMCONG: {
            const { date, chamcong } = action.payload
            const nangxuatlam = JSON.parse(state.checkIfExit.nangxuatlam)
            const Re_chamcong_nangxuatlam = {
                ...nangxuatlam,
                [date]: {
                    textDate: chamcong.time,
                    color: chamcong.color
                }
            }
            return {
                ...state,
                checkIfExit: {
                    ...state.checkIfExit,
                    nangxuatlam: JSON.stringify(Re_chamcong_nangxuatlam),
                }
            }
        }
        case ActionTypes.SET_RESULT: {
            const real_max_day = action.payload.real_max_day as number
            const { chucvu } = state
            const { cong, tienchuyencan } = state.checkIfExit
            const { luong } = state.luong
            const { ngayle = 0, hotro = 0, dongphuc = 0, vipham = 0, muonrieng_tinhluong = 0 } = state.phatsinh

            const result = +chucvu === 2 ? calculate_thoivu_salary() : calculate_salary(+chucvu, real_max_day, +cong || 0, {
                luong: +luong,
                tienchuyencan: +tienchuyencan,
                ngayle: +ngayle,
                hotro: +hotro,
                dongphuc: +dongphuc,
                vipham: +vipham,
                luongung: action.payload.show_luongung,
                muonrieng_tinhluong: +muonrieng_tinhluong
            })
            return {
                ...state,
                result
            }
        }
        default:
            throw new Error('Invalid action type')
    }
}

export default reducerEmployee