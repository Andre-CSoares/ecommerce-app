import { BrowserRouter, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/user',
        element: <Usuario />
    },
    {
        path: '/cart',
        element: <Carrinho />
    },
    {
        path: '/product',
        element: <Produto />
    }
])