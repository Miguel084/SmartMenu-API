import { Route, Routes } from "react-router-dom";
import CardapioAdmin from "../src/Pages/CardapioAdmin";
import Home from "../src/Pages/Home";

const rotasPublicas = [
	{
		path: "/",
		element:<Home/>,
	},
	{
		path: "/CardapioAdmin",
		element: <CardapioAdmin/>,
	},
]

function AppRoutes(){
    const routing = rotasPublicas.map((rota) => (
        <Route key={rota.path} path={rota.path} element={rota.element} />
    )); 
    return(
    <>
    <Routes>
        {routing}
    </Routes>
    </>
    )
}
export default AppRoutes;