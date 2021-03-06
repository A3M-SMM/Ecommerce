import { useEffect, useState } from 'react';


function Items(){
    const [productos, setProductos] =useState([]);

    useEffect(() => {
        let responde= true;
        const productos = [
                {
                id:1,
                nombre: "Paleta de Colores",
                descripcion: "Basado en 4 Colores", 
                precio: "50 usd",
                },
                
                {
                id:2,
                nombre: "Logotipo", 
                descripcion: "Elaboracion de Logo, Isologo, Isotipos o Imagotipos",
                precio: "100 usd",
                },
                
                {
                id:3,
                nombre:"Perfil en Redes",
                descripcion:"Elaboracion perfil de tu red social",
                precio:"70 usd",
                },
                
                {
                id:4,
                nombre: "Asesoria", 
                descripcion: "Te asesoramos en el manejo de tus redes",
                precio: "150 usd",
                },
                
                {
                id:5,
                nombre: "Branding", 
                descripcion: "Le damos un cambio de imagen a tu marca",
                precio: "200 usd",
                },
                
                {
                id:6,
                nombre: "Identidad de Marca", 
                descripcion: "Mejoramos tu identidad o la creamos de cero",
                precio: "250 usd",
                },
                
                {
                id:7,
                nombre: "Historias y Portadas", 
                descripcion: "Creamos plantillas para tus historias y portadas", 
                precio: "50 usd",
                },
                
                {
                id:8,
                nombre: "Mejora de Logos", 
                descripcion: "Mejoramos tu logo y/o lo modernizamos", 
                precio: "120 usd",
                },
                
                {
                id:9,
                nombre:"Landing Page", 
                descripcion:"Creamos una landing para tu megocio", 
                precio:"600 usd",
                },
                
                {
                id:10,
                nombre: "Plantillas", 
                descripcion: "Creamos set de plantillas para distintas redes, email y presentaciones", 
                precio:"200 usd",
                },
                
                {
                id:11,
                nombre: "UX|UI", 
                descripcion: "Elaboracion tus interfaces para dispositivos m??viles y paginas web",
                precio:"800 usd",
                },
                
                {
                id:12,
                nombre: "Paginas Web", 
                descripcion: "Elaboracion e implementaci??n de paginas web responsive", 
                precio: "Cotizar",
                }
        ]

        let mostrar= (productos) => {
            return productos;
        }

        let consultaProductos = (time, task) => {
            return new Promise ((resolve, reject) => {
                if (responde) {
                    setTimeout(() => {
                        resolve(task)
                    }, time);
                } else {
                    reject("Error en la Carga")
                }
        });
    }
    
    consultaProductos(2000, mostrar(productos))
        .then(resultado => setProductos(resultado))
        .catch(error => console.log(error))
}, [])

return (
    <>
      {
        productos.map(producto => (
            <div>
                <div>Id: {producto.id} </div>
                <div>Nombre: {producto.nombre}</div>
                <div>Descripcion: {producto.descripcion} </div>
                <div>Precio: {producto.precio} </div>
            </div>
     ))
      }
    </>
   );
}
export default Items;