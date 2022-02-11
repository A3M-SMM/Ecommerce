import { useEffect, useState } from 'react';
import customFetch from "../utils/customFetch";

const {data} = require ('./ItemDetail');

const ItemListContainer = () => {
    const [count,setCount] = useState ({});
    useEffect(() => {
        customFetch(2000,data[12])
        .then(resultado => setCount(resultado))
        .catch(error => console.log(error))
    }, []);


return (
    <item item={count} />
);
}

export default ItemListContainer;