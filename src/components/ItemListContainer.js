import { useEffect, useState } from 'react';
import ItemList from '../components/ItemList';
import { useParams } from 'react-router';
import customFetch from "../utils/customFetch";
import { firestoreFetchOne } from "../firebase/firestoneFetch";

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();

    //componentDidUpdate
    useEffect(() => {
        firestoreFetch(idCategory)
            .then(result => setDatos(result))
            .catch(err => console.log(err));
    }, [idCategory]);

    //componentWillUnmount
    useEffect(() => {
        return (() => {
            setDatos([]);
        })
    }, []);

return (
    <item item={datos} />
);
}

export default ItemListContainer;
