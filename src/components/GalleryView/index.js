import { useParams, Route } from "react-router-dom";
import ArtImageTile from '../ArtImageTile/index';
import ArtDescription from '../ArtDescription/index';

function GalleryView({ galleries }) {
    const { galleryId } = useParams();

    const targetGallery = galleries.find(el => `${el.id}` === galleryId);

    return (
        <>
            <h2>{targetGallery.name}</h2>
            <Route exact path={`/galleries/${galleryId}`}>
                <ArtImageTile art={targetGallery.objects} galleryId={galleryId}/>
            </Route>

            <Route path={`/galleries/${galleryId}/art/:artId`}>
                <ArtDescription art={targetGallery.objects} galleryId={galleryId}/>
            </Route>

        </>
    );
}

export default GalleryView;
