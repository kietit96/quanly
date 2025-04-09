import { Fragment } from "react";
import Login from "@/screens/Login";
import { Tchildren } from "@/types";
type TpublicRouter = {
    name: string;
    component: React.FC;
    layout: React.FC<Tchildren>;
}

const publicRouter: TpublicRouter[] = [
    { name: "Login", component: Login, layout: Fragment },
]

export default publicRouter