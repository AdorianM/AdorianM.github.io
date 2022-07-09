import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../scss/GalleryItem.scss';

interface IGalleryItem {
    id: number;
    title: string;
    description: string;
    imagePath: string;
    type: string;
}

const GalleryItem:FC<IGalleryItem> = (props: IGalleryItem) => {

    const [image, setImage] = useState<string | undefined>(undefined);

    useEffect(() => {
        // If props.image is not an external url, then we need to load the image from the local file system
        if(!props.imagePath.startsWith("http")) {
            import(`../assets/images/${props.imagePath}`).then(module => {
                setImage(module.default)
            }).catch(err => {
                setImage(undefined)
            })
        } else {
            setImage(props.imagePath)
        }
    }, [props.imagePath])

    return (
        <Link className="gallery-item"
              to={`/${props.type}/${props.title.toLowerCase()}`}>
            <img src={image} alt={props.title} />
            <span className={`gallery-item-info category-${props.type}`}>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </span>
        </Link>
    );
}

export default GalleryItem;
export type {IGalleryItem}