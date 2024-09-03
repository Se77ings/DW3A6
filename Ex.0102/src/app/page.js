'use client'

import { useState } from "react"

export default function Home({ nome }) {



  const VolumeComponent = (name) => {
    const [volume, setVolumes] = useState(0);

    console.log(volume)

    return (<div className=" flex flex-col space-x-1 w-80">
      <p className="">{name.name}</p>
      <div className="flex flex-row">

        <button className="controlsCfg bg-red-500 w-10 h-10 rounded-full" onClick={() => { volume != 0 ? setVolumes(volume - 1) : "" }}>-</button>
        <p className="botaoCfg">{volume}</p>
        <button className="controlsCfg bg-green-400 w-10 h-10 rounded-full" onClick={() => { volume != 10 ? setVolumes(volume + 1) : "" }}>+</button>
        <div className="flex flex-row ml-5">

          {/* {volume == 0 ? <p>Volume mínimo</p> : (volume == 10 ? <p>Volume máximo</p> : null)} */}
          {
            volume === 0 && <p>Volume Mínimo</p>
          }{
            volume === 10 && <p>Volume Mínimo</p>
          }
        </div>
      </div>

    </div>)

  }

  return (
    <>
      <div style={{ flex: 1, flexDirection: "row", padding: 40 }}>
        <VolumeComponent name="Guitarra" />
        <VolumeComponent name="Baixo" />
        <VolumeComponent name="Microfone" />
      </div >
    </>

  )

}



