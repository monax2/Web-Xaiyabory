import evpor from '/image/54555.jpg'
import Navber from '../compotnet/Navber'
import SizeBer from '../compotnet/SizeBer'
import { useState } from 'react'

export default function Developers() {
    const [onClick, setonclick] = useState(false)
    const onClickBer = (eve) => {
      setonclick(eve)
    }
    return (
        <>
        <Navber eveOn={onClickBer} />
        <SizeBer show={onClick} />
        <div className="Deve">
            <img src={evpor} className="image" alt="" />
            <div className="connet">
                <h1>(JSPH)</h1>
            </div>
        </div>
        </>
    )
}