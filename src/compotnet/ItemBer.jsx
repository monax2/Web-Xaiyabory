import { useContext } from "react";
import Context from "../data/Context";
import { Link } from 'react-router-dom';
export default function ItemBer() {
    const manu = useContext(Context);
    return (
        <div className="manu">
        <ul className="manu-ul">
            {manu.map(item => (
        <li key={item.title}>
          <Link to={item.link}>{item.title}</Link>
        </li>
      ))}
        </ul>
        </div>
    )
}