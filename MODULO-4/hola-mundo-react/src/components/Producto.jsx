function Producto(props){

    let total = 2032837

    let token = true

    if(props.activo == true){
        return(
            <div className="card">

            <h2 className="card-titulo">{props.nombre}</h2>
            <p className="card-desc">{props.desc}</p>

            {token && <p>Token true</p>}
            <p>Stock: {total.toLocaleString()}</p>
            <h3 className="card-price">${props.precio.toLocaleString()}</h3>
            <button className="card-button">Comprar</button>

        </div>
        )
    }else{
        return null
    }
}

export default Producto