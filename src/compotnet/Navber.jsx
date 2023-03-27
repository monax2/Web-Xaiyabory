import ItemBer from "./ItemBer"
import logo from '/image/54555.jpg'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from "react"
export default function Navber ({ eveOn }) {
    const [onClickber,setOnclickBer] = useState(false);
    const onClick = () => {
        onClickber ? setOnclickBer(false) : setOnclickBer(true)
    }
    eveOn(onClickber)
    return (
        <>
        <nav>
            <div className="logo">
                <img className="logo-image" src={logo} alt="" />
                <p className="logo-text">JSPH</p>
            </div>
            <ItemBer/>
            <div onClick={onClick} className={onClickber ? "onbergou" : "bergou"}>
            <FontAwesomeIcon icon={faBars} />
            </div>
        </nav>
        </>
    )
}