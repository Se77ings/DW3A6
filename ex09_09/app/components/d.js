'use client'
import { useState, createContext } from "react"
import ComponenteA from "./a"
import ComponenteB from "./b"
import ComponenteC from "./c"
export const EquacaoContext = createContext(false);



export default function ComponenteD() {
    const [valorA, setValorA] = useState(null)
    const [valorC, setValorC] = useState(null)
    const [operacao, setOperacao] = useState(null)

    function handleOperacao(v){
        console.log(v)
    }

    return (

        <EquacaoContext.Provider value={{ operacao: handleOperacao }}>
            <>
                <ComponenteA />
                <ComponenteB />
                <ComponenteC />
                <p>O resultado é:  </p>
                {operacao && <p>Valor operacao : {operacao}</p>}
            </>
        </EquacaoContext.Provider >
    )
}