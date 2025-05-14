import { createSlice } from "@reduxjs/toolkit"
export type Tdate = {
    date: number,
    maxday: number
}
const date = new Date()

const initDate: Tdate = {
    date: date.getTime(),
    maxday: new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
}
const dateSlice = createSlice({
    name: 'date',
    initialState: initDate,
    reducers: {
        prevMonth: (state) => {
            const newDate = new Date(state.date)
            newDate.getFullYear() === 2022 && newDate.getMonth() === 0 ? newDate.setMonth(0) : newDate.setMonth(newDate.getMonth() - 1)
            state.maxday = new Date(newDate.getFullYear(), newDate.getMonth() + 1, 0).getDate()
            state.date = newDate.getTime()
        },
        nextMonth: (state) => {
            const newDate = new Date(state.date)
            newDate.getFullYear() === 2040 && newDate.getMonth() === 11 ? newDate.setMonth(11) : newDate.setMonth(newDate.getMonth() + 1)
            state.maxday = new Date(newDate.getFullYear(), newDate.getMonth() + 1, 0).getDate()
            state.date = newDate.getTime()
        },
        setMonth: (state, action: { payload: number }) => {
            const newDate = new Date(state.date)
            newDate.setMonth(action.payload)
            state.maxday = new Date(newDate.getFullYear(), newDate.getMonth() + 1, 0).getDate()
            state.date = newDate.getTime()
        },
        setYear: (state, action: { payload: number }) => {
            const newDate = new Date(state.date)
            newDate.setFullYear(action.payload)
            state.maxday = new Date(newDate.getFullYear(), newDate.getMonth() + 1, 0).getDate()
            state.date = newDate.getTime()
        },
        setDate: (state, action: { payload: number }) => {
            const newDate = new Date(state.date)
            newDate.setTime(action.payload)
            state.maxday = new Date(newDate.getFullYear(), newDate.getMonth() + 1, 0).getDate()
            state.date = newDate.getTime()
        }
    }
})
export const { prevMonth, nextMonth, setMonth, setYear, setDate } = dateSlice.actions
export default dateSlice.reducer