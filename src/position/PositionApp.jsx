import Navber from "../compotnet/Navber";
import { useState } from "react";
import Map from "./Map";

export default function PositionApp () {
    const [onClick, setonclick] = useState(false)
    const onClickBer = (eve) => {
      setonclick(eve)
    }
    return (
        <>
         <Navber eveOn={onClickBer} />
         <Map/>
        </>
    )
}