import { createContext, useState} from 'react';

export const CartContext = createContext();

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState ([]);


    const removeItems = () => {
        setCartList([]);
    }


    const removeItem = (id) => {
       setCartList(cartList.filter(item => item.id !== id))
    }

    const addToCart = (item, qty) => {
        let found = cartList.find (product => product.item === item.id);
        if (found === undefined) {

            setCartList([
                ...cartList,
                {
                    idItem: item.id,
                    nombreItem: item.nombre,
                    precioItem: item.precio,
                    qtyItem: item.qty,
                }
            ]);
        }else {
            found.qtyItem += qty;
        }    
    }

        return (
            <CartContext.Provider value={{cartList, removeItems, removeItem, addToCart}}>
                {children}
            </CartContext.Provider>

    );
}

export default CartContextProvider;