import Navber from "./Navber"
import Contarner from "./Contarner"
import { useState } from "react"
export default function Web () {
    const [onClick, setonclick] = useState(false)
    const onClickBer = (eve) => {
      setonclick(eve)
    }
    return (
        <>
        <Navber eveOn={onClickBer} />
        <Contarner eveOn={onClick}/>
        </>
    )
}