import * as React from 'react';
import { FC } from 'react';
import GalleryItem, {IGalleryItem} from '../components/GalleryItem';
import '../scss/Gallery.scss';
import '../scss/Content.scss';
import galleryItems from '../content/gallery/gallery.json';

const itemList: IGalleryItem[] = galleryItems

const Gallery:FC<{type: string}> = (props: {type: string}) => {

    const type = props.type
    let filteredList = itemList;
    if(type !== 'all') {
        filteredList = itemList.filter(item => item.type === type)
    }
    return (
    <div className='content-panel gallery-panel'>
        <div className="gallery">
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