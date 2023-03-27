import { useContext } from "react"
import Context from "../data/Context"
import ItemBer from "./ItemBer"

export default function SizeBer() {
    const manu = useContext(Context)
    return (
        <>
        <section className="sizeber">
            <ItemBer manu={manu}/>
        </section>
        </>
    )
}