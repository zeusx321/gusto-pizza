import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Menu from "../pages/Menu";

const router = createBrowserRouter([
    {path: '/', element: <Home />},
    {path: '/menu', element: <Menu />}
])

export default router;