import { HomeScreen } from "@/screens/Home"
import { TinhLuongScreen } from "@/screens/TinhLuong"
import WrapperDefault from "@/wrapper/WrapperDefault";

const privateRoute = [
    { name: "Home", component: HomeScreen, layout: WrapperDefault },
    { name: "TinhLuong", component: TinhLuongScreen, layout: WrapperDefault }
]

export default privateRoute;
