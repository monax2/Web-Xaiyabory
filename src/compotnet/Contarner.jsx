import Showbody from "./Showbody"
import SizeBer from "./SizeBer"
import BoxsideShwo from "./BoxsideShwo"
export default function Contarner({ eveOn }) {
    return (
        <>
            <main className={eveOn ? "showSizeber" : "" }>
                <Showbody/>
                <SizeBer/>
                <BoxsideShwo id={"conpan1"}/>
            </main>
        </>
    )
}