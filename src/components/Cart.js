import { useContext } from "react";
import { CartContext } from "./CartContext";
import './assets/css/App.css';


const Cart = () => {
    
     const test = useContext(CartContext);

    const createOrder = () => {
		const itemsForDB = test.cartList.map(item => ({
		  id: item.idItem,
		  title: item.nameItem,
		  price: item.costItem
		}));

    test.cartList.forEach(async (item) => {
      const itemRef = doc(db, "products", item.idItem);
      await updateDoc(itemRef, {
        stock: increment(-item.qtyItem)
      });
    });

    let order = {
      buyer: {
        name: "A3M SMM",
        email: "a3m.smm@gmail.com",
        phone: "5698745131"
      },
      total: test.calcTotal(),
      items: itemsForDB,
      date: serverTimestamp()
    };
  
    console.log(order);
    
    const createOrderInFirestore = async () => {
      // Add a new document with a generated id
      const newOrderRef = doc(collection(db, "orders"));
      await setDoc(newOrderRef, order);
      return newOrderRef;
    }
  
    createOrderInFirestore()
      .then(result => alert('La Orden ha sido creada. Por favor tome el ID de su orden.\n\n\nOrder ID: ' + result.id + '\n\n'))
      .catch(err => console.log(err));
  
    test.removeList();
  
  }

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
