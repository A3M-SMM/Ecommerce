import React, {useState} from 'react';

const ItemCount = () => {

    const [count,setCount]=useState(1);
    const inc=()=>{
        setCount(count+1);
    }

    const dec=()=>{
        if (count>0)
        setCount(count-1);
    }

return(
    <div>
        <button className='subir' onClick={dec}>-</button> {count} <button className='bajar' onClick={inc}>+</button>
    </div>
)

}

export default ItemCount;