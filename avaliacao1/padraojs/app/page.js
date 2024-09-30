'use client'
import { createContext, useState, useContext } from "react"

export default function Home() {
  const [digitado, setDigitado] = useState('')
  const [caps, setCaps] = useState(false);
  const [shift, setShift] = useState(false);


  const Teclado = () => {
    const Letra = ({ val }) => {
      function upper(val) {
        return val.toUpperCase();
      }
      function lower(val) {
        return val.toLowerCase();
      }
      if (caps) {

        val = upper(val);
      }

      if (shift) {
        if (caps) {
          val = lower(val);
        } else {
          val = upper(val)
        }
      }
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

    const handleCaps = () => {
      setCaps(!caps)
    }

    const handleShift = () => {
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
          <Letra val='q' />
          <Letra val='w' />
          <Letra val='e' />
          <Letra val='r' />
          <Letra val='t' />
          <Letra val='y' />
          <Letra val='u' />
          <Letra val='i' />
          <Letra val='o' />
          <Letra val='p' />
        </div>
        <div className="flex flex-row">
          <Letra val="a" />
          <Letra val="s" />
          <Letra val="d" />
          <Letra val="f" />
          <Letra val="g" />
          <Letra val="h" />
          <Letra val="j" />
          <Letra val="k" />
          <Letra val="l" />
          <Letra val="ç" />

        </div>
        <div className="flex flex-row">
          <Letra val="z" />
          <Letra val="x" />
          <Letra val="d" />
          <Letra val="v" />
          <Letra val="b" />
          <Letra val="n" />
          <Letra val="m" />
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
