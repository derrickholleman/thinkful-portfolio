import React from 'react'
import styles from './Contact.module.css';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';

const Contact = () => {
    return (
        <article className='Container'>
            <h3>Contact Me!</h3>
            <p className={styles.contactText}>
                I'd love to hear from you!  Please feel free to contact me at the following:
            </p>
            <ol className={styles.contactLinks}>
                <li><a href='https://www.linkedin.com/in/derrickholleman/' target='_blank'><AiFillLinkedin /></a></li>
                <li><a href='https://github.com/derrickholleman' target='_blank'><AiFillGithub /></a></li>
            </ol>
        </article>
    )
}

export default Contact
