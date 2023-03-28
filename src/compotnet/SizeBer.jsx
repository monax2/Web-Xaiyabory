import { useContext } from "react"
import Context from "../data/Context"
import ItemBer from "./ItemBer"

export default function SizeBer({show}) {
    const manu = useContext(Context)
    return (
        <>
        <section className="sizeber" id = {show ? "showber" : "sizeber"}>
            <ItemBer manu={manu}/>
        </section>
        </>
    )
}