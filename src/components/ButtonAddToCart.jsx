

import { useState } from "react";

export default function ButtonAddToCart() {
    //let statusInCart = "No agregaste al Carrito" ;
    const [statusInCart, setStatusInCart] = useState("No agregaste al Carrito")

    function handleClick() {
        alert("Agregado al carrito");
        //statusInCart = "Agregado al carrito";
        setStatusInCart("Agregado una unidad al carrito");
    }
  return (
    <div>
        <button onClick={ handleClick } > Agregar al carrito </button>
        <div>
         <small> {statusInCart}</small>
        </div>
    </div>
    
  )
}