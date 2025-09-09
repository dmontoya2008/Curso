import { useState } from "react"


export default function itemColorPick() {
    const [color, setColor] = useState("#0c0c0cff");
    


  return (
    <div>
        <div>
            <button onClick = {() => setColor("#39aa52ff")}> Verde </button>
            <button onClick = {() => setColor("#df2d53ff")}> Rojo </button>
            <button onClick = {() => setColor("#2a1ed3ff")}> Azul </button>
            <button onClick = {() => setColor("#0a0a0aff")}> Negro </button>
        </div>

        <p> El color seleccionado es: {color} 
            
        </p>
    </div>
  )
}