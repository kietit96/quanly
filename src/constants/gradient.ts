export type Tcolors = readonly [string, string, ...string[]]

type Tgradients<T> = {
    [key: string]: {
        colors: T
    }
}
const gradients: Tgradients<Tcolors> = {
    primary: { colors: ['#7c5406', '#b97d04', '#7c5406'] },
    targetLow: { colors: ['#43b4c6', '#3ea9ba'] },
    targetMedium: { colors: ['#04bfad', '#03b2a1'] },
    targetHigh: { colors: ['#7db07c', '#73a372'] }
}

export default gradients