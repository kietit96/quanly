import { HomeScreen } from "@/screens/Home"
import { TinhLuongScreen } from "@/screens/TinhLuong"
import { Tchildren } from "@/types"
import WrapperDefault from "@comp/wrapper/WrapperDefault"
import WrapperHome from "@comp/wrapper/WrapperHome/WrapperHome"

type TprivateRoute = {
    name: string
    component: React.FC
    layout: React.FC<Tchildren>
}

const privateRoute: TprivateRoute[] = [
    { name: "Home", component: HomeScreen, layout: WrapperHome },
    { name: "TinhLuong", component: TinhLuongScreen, layout: WrapperDefault }
]

export default privateRoute;
