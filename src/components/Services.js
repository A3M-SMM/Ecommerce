//Funcion para agregar componentes,debo aplicar la propiedad "props" y tratarlo como objeto

function Services(props){
    return(
        <>
            <h2>{props.nombre}</h2>
            <p className="descripcion">{props.descripcion}</p>
            <p className="precio">{props.precio}</p>
        </>
    );
}

export default Services;


