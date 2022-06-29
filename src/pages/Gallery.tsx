import * as React from 'react';
import { FC } from 'react';
import GalleryItem, {IGalleryItem} from '../components/GalleryItem';
import './Gallery.css';

const itemList: IGalleryItem[] = [
    {
        id: 1,
        title: 'Design',
        description: 'Check out my design projects',
        imagePath: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        type: 'design'
    },
    {
        id: 2,
        title: 'cat maths',
        description: 'Math is cool!',
        imagePath: 'https://picsum.photos/300/350',
        type: 'math'
    },
    {
        id: 3,
        title: 'Physics',
        description: 'Study matter now!',
        imagePath: 'https://picsum.photos/300/360',
        type: 'physics'
    },
    {
        id: 4,
        title: 'Others',
        description: 'Others is the collection of all other categories.',
        imagePath: 'https://picsum.photos/300/380',
        type: 'others'
    }

]

const Gallery:FC<{type: string}> = (props: {type: string}) => {
    const type = props.type
    let filteredList = itemList;
    if(type !== 'all') {
        filteredList = itemList.filter(item => item.type === type)
    }
    return (
    <div className='gallery-panel'>
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