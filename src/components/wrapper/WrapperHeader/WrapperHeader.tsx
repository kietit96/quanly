import { Tchildren } from '@/types'
import { LinearGradient } from 'expo-linear-gradient'
import gradients, { Tcolors } from '@/constants/gradient'
export default function WrapperHeader({ children }: Tchildren) {
    const colors: Tcolors = gradients.primary.colors
    return (
        <LinearGradient colors={colors}>
            {children}
        </LinearGradient>
    )
}