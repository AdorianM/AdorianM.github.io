import * as React from 'react';
import { FC } from 'react';
import css from '../styles/Gallery.module.scss'
import GalleryItem, {IGalleryItem} from '../components/GalleryItem';
import galleryItems from '../content/gallery/gallery.json';

const itemList: IGalleryItem[] = galleryItems

const Gallery:FC<{type: string}> = (props: {type: string}) => {

    const type = props.type
    let filteredList = itemList;
    if(type !== 'home') {
        filteredList = itemList.filter(item => item.type === type)
    }

    return (
    <div className={`content-panel ${css['gallery-panel']}`}>
        <div className={css.gallery}>
            {
                filteredList.map((item:IGalleryItem) => {
                    return (
                        <GalleryItem key={item.id} {...item} />
                    );
                })
            }
        </div>
    </div>
    );
}

export default Gallery;