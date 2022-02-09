import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'; 
import './assets/css/App.css';
import Search from './components/Search';


import Services from './components/Services';
import data from './components/ItemListContainer';

//Importart Componentes "Carrito"
import CartWidget from './components/CartWidget';

//Importart Componentes "Cuenta"
import ItemCount from './components/ItemCount';

//Importart Componentes "Items"
import ItemList from './components/ItemList';
import Items from './components/ItemList';


function App() {

  return (
  <BrowserRouter>
    <div className="App">
    <header>
          <a href="#" className="logo"><span>A3M.</span>SMM</a>
          <label for="menu-bar" className="fas fa-bars"></label>
          <nav className="navbar">
              <a href="#">INICIO</a>
              <a href="#">SERVICIOS</a>
              <a href="#">PLANES</a>
              <a href="#">CONTACTO</a>
          </nav>

        <div>
          <input type="text" className="form" placeholder=" Buscar"></input>
          <input type="submit" className='btn' value="Search"></input>
        </div>  

        <div className="navbar">
          <a href="#">REGISTRO</a>
          <a href="#">LOGIN</a>
        </div> 
        
        <div className="components">
          <CartWidget/>
        </div>

        </header>

      <section className='service'>
        <div className='box-container'>
        <div className='box'> 
        <img src='https://a3m-smm.netlify.app/img/f-icon1.png'></img>
        <div className='Title'><Services nombre="Paleta de Colores" descripcion="Basado en 4 Colores" precio="50 usd"/>
        </div>
        <div className="contador" ><ItemCount/></div>
        </div>

        <div className='box'>
        <img src='https://a3m-smm.netlify.app/img/f-icon2.png'></img>
        <div className='Title'><Services nombre="Logotipo" descripcion="Elaboracion de Logo, Isologo, Isotipos o Imagotipos" precio="100 usd"/></div>
        <div className="contador"><ItemCount/></div>
        </div>

        <div className='box'>
        <img src='https://a3m-smm.netlify.app/img/f-icon3.png'></img>
        <div className='Title'><Services nombre="Perfil en Redes" descripcion="Elaboracion perfil de tu red social" precio="70 usd"/></div>
        <div className="contador"><ItemCount/></div>
        </div>

        <div className='box'>
        <img src='https://a3m-smm.netlify.app/img/f-icon1.png'></img>
        <div className='Title'><Services nombre="Asesoria" descripcion="Te asesoramos en el manejo de tus redes" precio="150 usd"/></div>
        <div className="contador"><ItemCount/></div>
        </div>

        <div className='box'>
        <img src='https://a3m-smm.netlify.app/img/f-icon2.png'></img>
        <div className='Title'><Services nombre="Branding" descripcion="Le damos un cambio de imagen a tu marca" precio="200 usd"/></div>
        <div className="contador"><ItemCount/></div>
        </div>

        <div className='box'>
        <img src='https://a3m-smm.netlify.app/img/f-icon3.png'></img>
        <div className='Title'><Services nombre="Identidad de Marca" descripcion="Mejoramos tu identidad o la creamos de cero" precio="250 usd"/></div>
        <div className="contador"><ItemCount/></div>
        </div>
    
        <div className='box'>
        <img src='https://a3m-smm.netlify.app/img/f-icon1.png'></img>
        <div className='Title'><Services nombre="Historias y Portadas" descripcion="Creamos plantillas para tus historias y portadas" precio="50 usd"/></div>
        <div className="contador"><ItemCount/></div>
        </div>

        <div className='box'>
        <img src='https://a3m-smm.netlify.app/img/f-icon2.png'></img>
        <div className='Title'><Services nombre="Mejora de Logos" descripcion="Mejoramos tu logo y/o lo modernizamos" precio="120 usd"/></div>
        <div className="contador"><ItemCount/></div>
        </div>

        <div className='box'>
        <img src='https://a3m-smm.netlify.app/img/f-icon3.png'></img>
        <div className='Title'><Services nombre="Landing Page" descripcion="Creamos una landing para tu megocio" precio="600 usd"/></div>
        <div className="contador"><ItemCount/></div>
        </div>

        <div className='box'>
        <img src='https://a3m-smm.netlify.app/img/f-icon1.png'></img>
        <div className='Title'><Services nombre="Plantillas" descripcion="Creamos set de plantillas para distintas redes, email y presentaciones" precio="200 usd"/></div>
        <div className="contador"><ItemCount/></div>
        </div>

        <div className='box'>
        <img src='https://a3m-smm.netlify.app/img/f-icon2.png'></img>
        <div className='Title'><Services nombre="UX|UI" descripcion="Elaboracion tus interfaces para dispositivos móviles y paginas web" precio="800 usd"/></div>
        <div className="contador"><ItemCount/></div>
        </div>

        <div className='box'>
        <img src='https://a3m-smm.netlify.app/img/f-icon3.png'></img>
        <div className='Title'><Services nombre="Paginas Web" descripcion="Elaboracion e implementación de paginas web responsive." precio="Cotizar"/></div>
        <div className="contador"><ItemCount/></div>
        </div>

        </div>
      </section>

     </div>
     <footer/>
    </BrowserRouter>
  );
}
export default App;

