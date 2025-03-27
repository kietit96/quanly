import Footer from "@/layouts/Footer";
import { Tchildren } from "@/types";


export default function WrapperDefault(props: Tchildren) {
    const { children } = props;
    return (
        <>
            {children}
            <Footer />
        </>
    )
}