export type Tcolors = readonly [string, string, ...string[]]

type Tgradients<T> = {
    [key: string]: {
        colors: T
    }
}
const gradients: Tgradients<Tcolors> = {
    primary: { colors: ['#7c5406', '#b97d04', '#7c5406'] },
}

export default gradients