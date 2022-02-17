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
                    costItem: item.cost,
                    qtyItem:qty
                }
            ]);
        }else {
            found.qtyItem += qty;
        }    
    }

    const calcPrecioItem =(idItem) => {
        let index =cartList.map (item => item.idItem).indexOf(idItem);
        return cartList[index].costItem * cartList[index].qtyItem;
    }

    const calSubtotal = () => {
        let totalItems = cartList.map(item=> calcPrecioItem(item.idItem));
        return totalItems.reduce((valorPrevio, valorActual) => valorPrevio + valorActual);
    }

    const calculoItems = () => {
        let cant = cartList.map(item => item.qtyItem);
        return cant.reduce(((valorPrevio,valorActual) => valorPrevio + valorActual), 0);
    }


    const onAdd = (qty) => {
        alert ("Tu seleccionaste " + qty + "items");
    }

        return (
            <CartContext.Provider value={{cartList, removeItems, removeItem, addToCart, calcPrecioItem, calSubtotal, calculoItems}}>
                {children}
            </CartContext.Provider>

    );
}

export default CartContextProvider;
