import React from 'react';
import './philosophy.css'

const Philosophy = () => {
    return (
        <body>
            <iframe className='video-centering'
            src="https://www.youtube.com/embed/TcdcQefoEWE" 
            title="YouTube video player" frameborder="0" 
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen="allowfullscreen">
            </iframe>
            <div className='opis'>
            <b>Humans are ultimate version of machine</b>,
            </div>
            <div className='opis'>
            based on this hypothesis, I have finished a story, <b>'Difference is Fine'</b>,
            </div>
            <div className='opis'>
            AI couldn't reconstruct the story by any means,
            particularly if AI literally has consciousness.
            In other words, this story shows the difference between humans and current AI,
            which perhaps further show the value of humans and AI.
            </div>
            <div className='opis'>
            I am currently <b>collecting fund</b> for translation, 
            then you can read the story, watch the story.
            </div>
            <div className='opis'>
            I wouldn't do this if I am machine.
            I do this, because I am humans.
            </div>
        </body>
    )
}

export default Philosophy