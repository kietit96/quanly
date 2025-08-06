type TPriceInfo = {
    [key: string]: number
}
export function calculate_chuyencan(luong: number) {
    return Math.round(luong / 30)
}
export function calculate_salary(chucvu: number, real_max_day: number, cong: number, priceInfo: TPriceInfo) {
    if (cong === 0) {
        return {
            show_chamcong: 0,
            show_tamtinh: 0,
            show_thuclanh: 0,
        }
    }
    let newChamcong: number = cong
    let maxDay = 30
    if (chucvu === 1 || chucvu === 3) {
        if (real_max_day === 31 && cong >= 30) {
            newChamcong = cong - 1;
        }
        else if (+real_max_day < 30) {
            newChamcong = real_max_day;
            maxDay = real_max_day
        }
    }
    if (chucvu === 0) {
        newChamcong = cong
        if (cong === real_max_day && real_max_day < 30) {
            maxDay = real_max_day
            newChamcong = real_max_day
        }
    }
    const {
        luong,
        tienchuyencan,
        ngayle,
        hotro,
        dongphuc,
        vipham,
        luongung,
        muonrieng_tinhluong
    } = priceInfo
    const result = Math.round((luong / maxDay) * newChamcong)
    const tamtinh = result + tienchuyencan + ngayle + hotro
    const thuclanh = tamtinh - (vipham + +muonrieng_tinhluong) + dongphuc - luongung;
    return {
        show_chamcong: newChamcong,
        show_tamtinh: tamtinh,
        show_thuclanh: thuclanh,
    }
}

export function calculate_thoivu_salary() {
    return {
        show_chamcong: 0,
        show_tamtinh: 0,
        show_thuclanh: 0,
    }
}

export function getWidthColumns() {
    return {
        DATE_CELL_WIDTH: 50,
        TITLE_CELL_WIDTH: 150,
        CONG_CELL_WIDTH: 65,
        SALARY_CELL_WIDTH: 140,
        CHUYENCAN_CELL_WIDTH: 135,
        NGAYLE_CELL_WIDTH: 135,
        HOTRO_CELL_WIDTH: 135,
        TONGLUONG_CELL_WIDTH: 140,
        UNGLUONG_CELL_WIDTH: 135,
        DONGPHUC_CELL_WIDTH: 135,
        VIPHAM_CELL_WIDTH: 135,
        UNGTHEM_CELL_WIDTH: 135,
        THUCLANH_CELL_WIDTH: 135
    }
}