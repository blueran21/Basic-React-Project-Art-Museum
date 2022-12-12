import { Link } from 'react-router-dom';
import './ArtImageTile.css';

function ArtImageTile(props) {
    const arts = props.art;
    const galleryId = props.galleryId;

    return (
        <ul>
            {arts.map(el => {
                return (
                    <li key={el.id}>
                        <Link to={`/galleries/${galleryId}/art/${el.id}`}>
                            <img src={`${el.images[0].baseimageurl}`} alt=''></img>
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}

export default ArtImageTile;
