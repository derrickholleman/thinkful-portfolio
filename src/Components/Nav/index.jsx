import React from 'react';
import styles from './Nav.module.css';

const Nav = () => {
    return (
        <nav>
            <div className='Container' style={{'margin':'0rem'}}>
                <ul className={styles.navContainer}>
                    <li className={styles.navItem}>
                        <span>Intro</span>
                    </li>
                    <li className={styles.navItem}>
                        <span>About</span>
                    </li>
                    <li className={styles.navItem}>
                        <span>Contact</span>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav
