import styles from '../../../styles/Home.module.css'
import Gallery from '../../../components/Gallery'
import React from 'react'
import { useRouter } from 'next/router'


const Category = () => {
    const router = useRouter()
    const category: string = router.query.category as string
    return (
        <Gallery type={category} />
    )
}

export default Category
