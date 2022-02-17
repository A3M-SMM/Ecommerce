import { useContext } from "react";
import { CartContext } from "./CartContext";
import './assets/css/App.css';


const Cart = () => {
    
    const test = useContext(CartContext);

    return (
        <section class="about" id="about" >
        {
        test.cartList.map (item => (
            <div class="column">
            <Link to='/'> Continuar Comprando.. =) </Link>
                <a href="" class="btn" onClick={test.removeItems}> Remover Todos </a>
                <a href="" class="btn"> Tu carrito esta vacio! </a>
                <div class="image"> <img src={item.imagen[0]} alt=""/></div>
                <div class="content">
                    <h3> {item.nombre} </h3>
                    <p> {item.descripcion} usd</p>
                    <p> {item.precio} usd</p>
                    <p> {item.qty} items </p>
                    <p> {item.cost} c/u </p>
                    <div class="buttons">
                        <a href="" class="btn"> Agregar a Carrito </a>
                        <a href="" class="btn" onClick={ }> Agregar Otro Producto</a>
                        <a href="" class="btn" onClick={() => test.removeItem(item.id) }> Remover Producto</a>
                    </div>
                </div>
            </div>
        ))
        }
    </section>
    );
}

export default Cart;
