import GlobalLocation from "@/global/GlobalLocation"
import Footer from "@/layouts/Footer"
import SelectLocation from "@/layouts/SelectLocation"
import { default as ThemeContextChooseItem } from "@/store/context/ContextChooseItems/theme"
import { default as ThemeContextLocation } from '@/store/context/ContextLocation/theme'
import { Tchildren } from "@/types"

export default function WrapperHome(props: Tchildren) {
    const { children } = props
    return (
        <ThemeContextLocation>
            <GlobalLocation />
            <SelectLocation />
            <ThemeContextChooseItem>
                {children}
                <Footer />
            </ThemeContextChooseItem>
        </ThemeContextLocation>
    )
}