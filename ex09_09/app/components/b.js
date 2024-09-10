'use client'
import { useState } from "react"

export default function ComponenteB( handleOperacao) {
const [selecionado, setSelecionado] = useState(null)

const handleClick = (selecao) => {
    setSelecionado(selecao)
    handleOperacao(selecao)
}


    return(
        <div className="flex flex-col">
            <button onClick={() => { handleClick("+") }}>+</button>
            <button onClick={() => { handleClick("-") }}>-</button>
            <button onClick={() => { handleClick('*') }}>*</button>
            <button onClick={() => { handleClick('/') }}>/</button>
            {selecionado && <p> {selecionado}</p>}

        </div>
    )
}
