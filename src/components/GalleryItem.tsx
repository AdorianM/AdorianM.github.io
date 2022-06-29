import { FC } from "react";
import { Link } from "react-router-dom";
import './GalleryItem.css';

interface IGalleryItem {
    id: number;
    title: string;
    description: string;
    imagePath: string;
    type: string;
}

const GalleryItem:FC<IGalleryItem> = (props: IGalleryItem) => {
    return (
        <Link className="gallery-item"
              to={`/${props.type}/${props.title.toLowerCase()}`}>
            <img src={props.imagePath} alt={props.title} />
            <span className={`gallery-item-info category-${props.type}`}>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </span>
        </Link>
    );
}

export default GalleryItem;
export type {IGalleryItem}