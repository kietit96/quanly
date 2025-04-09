import Footer from "@/layouts/Footer";
import SelectLocation from "@/layouts/SelectLocation";
import { Tchildren } from "@/types";
import { default as ThemeContextLocation } from '@/store/context/ContextLocation/theme'
import GlobalLocation from "@/global/GlobalLocation";

export default function WrapperDefault(props: Tchildren) {
    const { children } = props;
    return (
        <ThemeContextLocation>
            <GlobalLocation />
            <SelectLocation />
            {children}
            <Footer />
        </ThemeContextLocation>
    )
}