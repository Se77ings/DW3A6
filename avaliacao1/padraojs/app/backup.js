'use client'
import { createContext, useState, useContext } from "react"

export default function Home() {
  const [digitado, setDigitado] = useState('')
  const [caps, setCaps] = useState(false);
  const [shift, setShift] = useState(false);


  const Teclado = ({ }) => {
    const Letra = ({ val }) => {
      //aqui posso usar o toLowerCase na verdade.... facilita
      return (
        <li className="p-2 m-2 border w-8 text-center rounded hover:cursor-pointer hover:text-black hover:bg-white"
          onClick={() => {
            if (shift) {
              setDigitado(digitado + `${val}`)
              handleShift();
            } else {
              setDigitado(digitado + `${val}`)
            }
          }}>{val}</li>
      )
    }

    const disableAll = () => {
      setCaps(false)
      setShift(false)
    }

    const handleCaps = () => {
      disableAll();
      setCaps(!caps)
    }

    const handleShift = () => {
      disableAll();
      setShift(!shift)
    }

    const handleBackspace = () => {
      let substr = digitado.substr(0, digitado.length - 1)
      setDigitado(substr)
    }

    const handleSpace = () => {
      if (!digitado.endsWith(' ')) {
        setDigitado(digitado + ' ')
      }

    }

    return (
      <ul>
        <div className="flex flex-row">
          <Letra val={`${caps || shift ? 'Q' : 'q'}`} />
          <Letra val={`${caps || shift ? 'W' : 'w'}`} />
          <Letra val={`${caps || shift ? 'E' : 'e'}`} />
          <Letra val={`${caps || shift ? 'R' : 'r'}`} />
          <Letra val={`${caps || shift ? 'T' : 't'}`} />
          <Letra val={`${caps || shift ? 'Y' : 'y'}`} />
          <Letra val={`${caps || shift ? 'U' : 'u'}`} />
          <Letra val={`${caps || shift ? 'I' : 'i'}`} />
          <Letra val={`${caps || shift ? 'O' : 'o'}`} />
          <Letra val={`${caps || shift ? 'P' : 'p'}`} />
        </div>
        <div className="flex flex-row">
          <Letra val={`${caps || shift ? "A" : "a"}`} />
          <Letra val={`${caps || shift ? "S" : "s"}`} />
          <Letra val={`${caps || shift ? "D" : "d"}`} />
          <Letra val={`${caps || shift ? "F" : "f"}`} />
          <Letra val={`${caps || shift ? "G" : "g"}`} />
          <Letra val={`${caps || shift ? "H" : "h"}`} />
          <Letra val={`${caps || shift ? "J" : "j"}`} />
          <Letra val={`${caps || shift ? "K" : "k"}`} />
          <Letra val={`${caps || shift ? "L" : "l"}`} />
          <Letra val={`${caps || shift ? "Ç" : "ç"}`} />

        </div>
        <div className="flex flex-row">
          <Letra val={`${caps || shift ? "Z" : "z"}`} />
          <Letra val={`${caps || shift ? "X" : "x"}`} />
          <Letra val={`${caps || shift ? "C" : "d"}`} />
          <Letra val={`${caps || shift ? "V" : "v"}`} />
          <Letra val={`${caps || shift ? "B" : "b"}`} />
          <Letra val={`${caps || shift ? "N" : "n"}`} />
          <Letra val={`${caps || shift ? "M" : "m"}`} />
        </div>
        <div className="flex flex-row">
          <li className={`p-2 m-2 border  text-center rounded hover:cursor-pointer hover:bg-red-400 hover:text-black ${caps ? "bg-red-400" : "bg-black"}`} onClick={handleCaps}>Caps Lock</li>
          <li className={`p-2 m-2 border  text-center rounded hover:cursor-pointer hover:bg-red-400 hover:text-black ${shift ? "bg-red-400" : "bg-black"}`} onClick={handleShift}>Shift</li>
          <li className="p-2 m-2 border  text-center rounded hover:cursor-pointer hover:bg-red-400 hover:text-black" onClick={handleBackspace}>Backspace</li>
          <li className="p-2 m-2 border  text-center rounded hover:cursor-pointer hover:bg-red-400 hover:text-black" onClick={handleSpace}>Space</li>
          <li className="p-2 m-2 border  text-center rounded hover:cursor-pointer hover:bg-red-400 hover:text-black" onClick={() => { setDigitado('') }}>Clear</li>

        </div>
      </ul>
    )
  }

  return (
    <div className=" flex justify-center">

      <div className="flex flex-col p-12">
        {/* <input className="text-black w-20" value={digitado} onChange={(e)=>setDigitado(e.target.value)}/> */}
        <input value={digitado} disabled className="text-black bg-white" onChange={(e) => { setDigitado(e.target.value) }}></input>
        <Teclado />
      </div>
    </div>
  );
}
