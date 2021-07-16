import React from 'react';
import styles from './About.module.css';

const About = () => {
    return (
        <main className='Container' id="about">
            <h2>About Me</h2>
            <p className={styles.aboutText}>
                After graduating from college and pursuing a career in music, the COVID-19 pandemic stopped me in my tracks.  I found out about coding through a streamer I watch on <a href='https://www.twitch.tv' target='_blank' className='nonNavLinks'>Twitch</a>.  I've been coding now for about 7 months.  If you'd like to know more about my story I have a blog post written about it <a href='https://derrickhollemandev.netlify.app/posts/hello-world.html' target='_blank' className='nonNavLinks'>here</a>.
            </p>
        </main>
    )
}

export default About;
