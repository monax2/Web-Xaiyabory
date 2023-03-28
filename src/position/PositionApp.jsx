import Navber from "../compotnet/Navber";
import { useState } from "react";
import Map from "./Map";
import SizeBer from './../compotnet/SizeBer'

export default function PositionApp () {
    const [onClick, setonclick] = useState(false)
    const onClickBer = (eve) => {
      setonclick(eve)
    }
    return (
        <>
         <Navber eveOn={onClickBer} />
         <SizeBer show={onClick} />
         <Map/>
        </>
    )
}