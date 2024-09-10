'use client'
import { useState } from "react"


export default function ComponenteA() {

    const [selecionado, setSelecionado] = useState(null)

    const handleClick = (selecao) => {
        setSelecionado(selecao)
    }

    return (
        <div>
            <p></p>
            <div className="mx-20">
                <div className="flex flex-row">

                    <button onClick={() => { handleClick(1) }} disabled={(selecionado && selecionado != 1 ? true : false)}>1</button>
                    <button onClick={() => { handleClick(2) }} disabled={(selecionado && selecionado != 2 ? true : false)}>2</button>
                    <button onClick={() => { handleClick(3) }} disabled={(selecionado && selecionado != 3 ? true : false)}>3</button>
                </div>
                <div className="flex flex-row">

                    <button onClick={() => { handleClick(4) }} disabled={(selecionado && selecionado != 4 ? true : false)}>4</button>
                    <button onClick={() => { handleClick(5) }} disabled={(selecionado && selecionado != 5 ? true : false)}>5</button>
                    <button onClick={() => { handleClick(6) }} disabled={(selecionado && selecionado != 6 ? true : false)}>6</button>
                </div>
                <div className="flex flex-row">
                    <button onClick={() => { handleClick(7) }} disabled={(selecionado && selecionado != 7 ? true : false)}>7</button>
                    <button onClick={() => { handleClick(8) }} disabled={(selecionado && selecionado != 8 ? true : false)}>8</button>
                    <button onClick={() => { handleClick(9) }} disabled={(selecionado && selecionado != 9 ? true : false)}>9</button>
                </div>
                <div className="flex flex-row-reverse">

                    <button onClick={() => { handleClick(0) }} disabled={(selecionado && selecionado != 0 ? true : false)}>0</button>
                    <button onClick={() => { setSelecionado(null) }}>CLS</button>


                </div>
                {selecionado && <p>Valor selecionado : {selecionado}</p>}
            </div></div>
    )
}