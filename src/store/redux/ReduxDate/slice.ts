import { createSlice } from "@reduxjs/toolkit"
type Tdate = {
    date: number
}
const initDate: Tdate = {
    date: new Date().getTime()
}
const dateSlice = createSlice({
    name: 'date',
    initialState: initDate,
    reducers: {
        prevMonth: (state) => {
            const newDate = new Date(state.date)
            newDate.setMonth(newDate.getMonth() - 1)
            state.date = newDate.getTime()
        },
        nextMonth: (state) => {
            const newDate = new Date(state.date)
            newDate.setMonth(newDate.getMonth() + 1)
            state.date = newDate.getTime()
        },
        setMonth: (state, action: { payload: number }) => {
            const newDate = new Date(state.date)
            newDate.setMonth(action.payload)
            state.date = newDate.getTime()
        },
        setYear: (state, action: { payload: number }) => {
            const newDate = new Date(state.date)
            newDate.setFullYear(action.payload)
            state.date = newDate.getTime()
        },
        setDate: (state, action: { payload: number }) => {
            const newDate = new Date(state.date)
            newDate.setTime(action.payload)
            state.date = newDate.getTime()
        }
    }
})
export const { prevMonth, nextMonth, setMonth, setYear, setDate } = dateSlice.actions
export default dateSlice.reducer