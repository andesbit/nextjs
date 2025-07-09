'use client'
import React from "react"
import { useState } from 'react';

export const Bolo = ()=>{
    const [count, setCount] = useState(0);
/*
    useEffect(() => {
        // Aquí puedes realizar acciones cuando el contador cambia
        console.log('Contador actualizado:', count);
    }, [count]); // Se ejecuta solo cuando 'count' cambia
*/
    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return(
        <>
            hiadipa
            <div>
            <p>Contador: {count}</p>
            <button onClick={increment}>Incrementar</button>
            <button onClick={decrement}>Decrementar</button>
            </div>
        </>
    )
}