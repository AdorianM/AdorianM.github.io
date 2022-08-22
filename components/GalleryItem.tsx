import { FC, useEffect, useState } from "react";
// import './GalleryItem.css';
import css from '../styles/Gallery.module.scss'
import Link from "next/link"
import Image from "next/future/image"
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

    const categoryCss = css[`category-${props.type}`]
    return (
        <Link href={`/articles/${props.type}/${props.title.toLowerCase()}`}>
            <a className={css['gallery-item']}>
                <Image src={image} alt={props.title} width={300} height={350} style={{objectFit: "cover"}}/>
                <span className={`${css['gallery-item-info']} ${categoryCss}`}>
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                </span>
            </a>
        </Link>
    );
}

export default GalleryItem;
export type {IGalleryItem}