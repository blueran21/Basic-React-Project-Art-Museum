import { NavLink } from "react-router-dom";
import './GalleryNavigation.css';

function GalleryNavigation({ galleries }) {
    return (
        <nav>
            <h1>Galleries</h1>
            <NavLink exact to='/'>Home</NavLink>
            <ul>
                {galleries.map(el => {
                    return (
                        <li key={el.id}>
                            <NavLink to={`/galleries/${el.id}`}>{el.name}</NavLink>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

export default GalleryNavigation;
