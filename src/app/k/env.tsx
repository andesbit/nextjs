import React from "react"
import { env } from "process";
export const DisplayValueEnv = ()=>{
    
    return(
        <>
          
            <div>
            <p>value: {process.env.NEXT_PUBLIC_VALUE1}</p>
            </div>
        </>
    )
}