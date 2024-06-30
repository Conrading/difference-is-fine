import React from 'react';
import './philosophy.css'

const Philosophy = () => {
    return (
        <body>
            <div className='video-container'>
                <iframe className='video-centering'
                    width="392" height="697" 
                    src="https://www.youtube.com/embed/iYvSiBpKqrY" 
                    title="how God might Engineer Humans | Difference is Fine" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                </iframe>
                <iframe className='video-centering'
                    width="392" height="697" 
                    src="https://www.youtube.com/embed/bo6mf9JpUs0" 
                    title="Humans might be constructed based on quantum physics to function as highly efficient Machines." 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                </iframe>
            </div>
            <div className='opis'>
            <b>Humans are ultimate version of machine</b>,
            </div>
            <div className='opis'>
            based on this hypothesis, I have finished a story, <b>'Difference is Fine'</b>,
            </div>
        </body>
    )
}


export default Philosophy