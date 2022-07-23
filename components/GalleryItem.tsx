import { FC, useEffect, useState } from "react";
import './GalleryItem.css';
import Link from "next/link"
import Image from "next/image"
import React from "react";

interface IGalleryItem {
    id: number;
    title: string;
    description: string;
    imagePath: string;
    type: string;
}

const GalleryItem:FC<IGalleryItem> = (props: IGalleryItem) => {

    const [image, setImage] = useState<string>("");

    useEffect(() => {
        // If props.image is not an external url, then we need to load the image from the local file system
        if(!props.imagePath.startsWith("http")) {
            import(`../assets/images/${props.imagePath}`).then(module => {
                setImage(module.default)
            }).catch(err => {
                console.log(err)
                setImage("")
            })
        } else {
            setImage(props.imagePath)
        }
    }, [props.imagePath])

    console.log(image)

    return (
        <Link className="gallery-item"
              href={`/${props.type}/${props.title.toLowerCase()}`}>
            <Image src={image} alt={props.title} />
            <span className={`gallery-item-info category-${props.type}`}>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </span>
        </Link>
    );
}

export default GalleryItem;
export type {IGalleryItem}