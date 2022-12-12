import { Link, useParams } from 'react-router-dom';
import '../ArtImageTile/ArtImageTile.css';

function ArtDescription(props) {
    const arts = props.art;
    const galleryId = props.galleryId;
    const {artId} = useParams();

    const selectedArt = arts.find(el => `${el.id}` === artId);
    const realUrl = selectedArt.url

    return (
        <>
            <div>
                <Link to={`/galleries/${galleryId}`}>Back to Gallery</Link>
            </div>
            <div>
                <Link to={{ pathname: realUrl}} target="_blank">{selectedArt.title}</Link>
            </div>
            <div>
                <h2>{selectedArt.description}</h2>
                <h2>{selectedArt.creditline}</h2>
                <h2>{selectedArt.technique}</h2>
            </div>
            <ul>
                {selectedArt.images.map(el => {
                    return (
                        <li key={el.imageid}>
                            <img src={`${el.baseimageurl}`} alt=''></img>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

export default ArtDescription;
