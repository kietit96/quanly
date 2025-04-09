import { HomeScreen } from "@/screens/Home";
import { TinhLuongScreen } from "@/screens/TinhLuong";
import { Tchildren } from "@/types";
import WrapperDefault from "@comp/wrapper/WrapperDefault";

type TprivateRoute = {
    name: string;
    component: React.FC;
    layout: React.FC<Tchildren>;
}

const privateRoute: TprivateRoute[] = [
    { name: "Home", component: HomeScreen, layout: WrapperDefault },
    { name: "TinhLuong", component: TinhLuongScreen, layout: WrapperDefault }
]

export default privateRoute;
