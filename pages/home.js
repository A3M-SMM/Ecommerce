import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from '../components/ItemListContainer';
import ItemDetail from '../components/ItemDetail';

const Home = () => { 
    return(
        <BrowserRouter>
            <Navbar/>
                <Routes>
                <Route exact path="/" element={<div className="slogan">  Si esta en tu mente.. Lo hacemos posible en A3M </div>}/>
                        <Route exact path='/' element={<ItemListContainer/>} />
                        <Route exact path= '/servicios/:1' element={<ItemListContainer/>} />
                        <Route exact path='/item/:idItem' element={<ItemDetail/>}/>
                        <Route path='*'><div> 404 Not Found! </div> </Route>
                </Routes>
            <footer><div>Copyright @A3M.SMM</div></footer> 
        </BrowserRouter>
    );
}

export default Home;
