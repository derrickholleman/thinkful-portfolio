import React from 'react';
import styles from './Nav.module.css';
import { Link } from "react-scroll";

const Nav = () => {
    return (
        <nav>
            <div className='Container' style={{'margin':'0rem'}}>
                <ul className={styles.navContainer}>
                    <li className={styles.navItem}>
                            <Link
                            activeClass={styles.active}
                            to="intro"
                            spy={true}
                            smooth={true}
                            offset={-170}
                            duration={200}>
                                Intro
                            </Link>
                    </li>
                    <li className={styles.navItem}>
                            <Link
                            activeClass={styles.active}
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-270}
                            duration={200}>
                                About
                            </Link>
                    </li>
                    <li className={styles.navItem}>
                            <Link
                            activeClass={styles.active}
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={200}>
                                Contact
                            </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav
