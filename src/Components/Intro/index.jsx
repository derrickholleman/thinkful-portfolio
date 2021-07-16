import React from 'react';
import styles from './Intro.module.css';
import profilepic from './images/googleprofilepic.jpg'

const Intro = () => {
    return (
        <article className='Container'>
            <img src={profilepic} alt='picture of me' className={styles.profilePic}/>
            <h1>
                Hi!  I'm Derrick Holleman.
            </h1>
            <div className={styles.introText}>
                <p>
                    I am a software developer from Minneapolis, Minnesota.  I enjoy coding because I love to solve problems and learn and collaborate with others.
                </p>
                <br />
                <p>
                    Some of my other interests besides coding include...
                </p>
                <br />
                <ul style={{'color':'#787868'}}>
                    <li>Video Games</li>
                    <li>Playing Music</li>
                    <li>Science & Technology</li>
                </ul>
            </div>
        </article>
    )
}

export default Intro
