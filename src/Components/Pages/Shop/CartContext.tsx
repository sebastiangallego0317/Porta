import { ReactNode, createContext, useState, useEffect } from "react";

const CartContext = createContext({} as returned)

type props = {
    children?: ReactNode
}
type returned = {
    productCount: Array<{}>,
    setProductCount: React.Dispatch<React.SetStateAction<{}[]>>




}

export const CartProvider = ({ children }: props) => {
    const [productCount, setProductCount] = useState(new Array<{}>)
    useEffect(() => {
        console.log(productCount);

    }, [productCount])

    return (
        <CartContext.Provider value={
            { productCount: productCount, setProductCount: setProductCount } as returned
        }>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext