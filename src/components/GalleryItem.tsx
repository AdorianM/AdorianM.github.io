import { FC } from "react";
import './GalleryItem.css';

interface IGalleryItem {
    id: number;
    title: string;
    description: string;
    imagePath: string;
    type: string;
}

const GalleryItem:FC<IGalleryItem> = (props) => {
    return (
        <div className="gallery-item">
            <img src={props.imagePath} alt={props.title} />
            <div className="gallery-item-info">
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </div>
        </div>
    );
}

export default GalleryItem;
export type {IGalleryItem}