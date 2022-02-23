import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from '../components/ItemListContainer';
import ItemDetail from '../components/ItemDetail';
import CartContextProvider from "../context/CartContext";
import { useContext } from "react";

const Home = () => { 

    const test = useContext(CartContext);
    return(
        <CartContextProvider>
            <BrowserRouter>
                <Navbar/>
                    <Routes>
                    <Route exact path="/" element={<div className="slogan">  Si esta en tu mente.. Lo hacemos posible en A3M </div>}/>
                            <Route exact path='/' element={<ItemListContainer/>} />
                            <Route exact path= '/servicios/WuwoOSINFxcXZiKm3R1x' element={<ItemListContainer/>} />
                            <Route exact path='/item/i3pqaIGbQs2vvEuquCw5' element={<ItemDetail/>}/>
                            <Route path='*'><div> 404 Not Found! </div> </Route>
                            <Route path='/cart'><div> <Cartwidget/></div> </Route>
                    </Routes>
                <footer><div>Copyright @A3M.SMM</div></footer> 
            </BrowserRouter>
        </CartContextProvider>
    );
}

export default Home;
