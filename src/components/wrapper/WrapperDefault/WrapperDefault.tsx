import GlobalLocation from "@/global/GlobalLocation";
import Footer from "@/layouts/Footer";
import SelectLocation from "@/layouts/SelectLocation";
import { default as ThemeContextLocation } from '@/store/context/ContextLocation/theme';
import { Tchildren } from "@/types";

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