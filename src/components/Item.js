import './assets/css/App.css';
import { Link } from 'react-router-dom';

const Item = ({ id, nombre, stock, precio, descripcion }) => {
    return (
        <section class="about" id="about" >
            <div>
                <p><strong>$ {precio}</strong></p>
                <p>{stock} unid.</p>
                <p style={{cursor: "pointer"}}></p>
                <Link to={`/item/${id}`}>Details</Link>
            </div>
        </section>
    );
}

export default Item;