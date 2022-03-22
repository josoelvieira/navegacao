import { Link } from "react-router-dom";
import "./Menu.css";



const Menu = (props) => (
    <aside className="menu">
        <nav>
            <ul>
                <li>
                    <Link to="/">Início</Link>
                </li>
                <li>
                    <Link to="/param/123">Param #01</Link>
                </li>
                <li>
                    <Link to="/param/JosoelVieira">Param #01</Link>
                </li>
                <li>
                    <Link to="/about">Sobre</Link>
                </li>
                <li>
                    <Link to="/jorge">Erro</Link>
                </li>
            </ul>
        </nav>
    </aside>
);
export default Menu;
