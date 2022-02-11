import React, {useContext, useEffect, useState} from 'react';
import { CartContext } from './CartContext';

const ItemCount = ({ stock = 5, initial = 0, onAdd }) => {
    const [count, setCount]= useState(0);

    const test = useContext(CartContext);

    useEffect(() => {
        setCount(initial);
    },[]);

    const inc=()=>{
        if (count<stock){
             setCount(count+1);
        }     
    }
    const dec=()=>{
        if (count >initial) {
            setCount(count-1);
        }
    }

return(
    <div>
        <button className='subir' onClick={dec}>-</button> {count} <button className='bajar' onClick={inc}>+</button> 
        <p>Stock: {stock} </p>
        <a className="btn" onClick={ () => onAdd(count) } >Agregar a Carrito</a>
    </div>
 
)

}

export default ItemCount;