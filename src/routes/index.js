import LayoutDefault from "../components/layout/LayoutDefault";
import Product from "../pages/Product";
import Home from "../pages/Home";
import DetailProduct from "../pages/DetailProduct";
import SearchProduct from "../pages/SearchProduct";

export const routes = [
    {
        path: "/",
        element: <LayoutDefault/>,
        children: [
            {
                index: true,
                element: <Home/>,
            },
            {
                path: "product/:id",
                element: <Product />
            },
            {
                path: "detailProduct/:id",
                element: <DetailProduct />
            },
            {
                path: "product",
                element: <SearchProduct />
            },
        ]
    }
]