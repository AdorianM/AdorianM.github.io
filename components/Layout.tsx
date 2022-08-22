import React from 'react'
import Navigation from './Navigation'
import styles from '../styles/Home.module.css'
import Spacer from '../components/Spacer'

const Layout = ({ children }) => {
    return(
        <div>
            <Navigation />

            <main className='max-width-container container main'>
                <Spacer />
                {children}
            </main>
            <footer className={styles.footer}>

            </footer>
        </div>
    )
}

export default Layout;