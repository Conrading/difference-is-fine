import React from 'react';
import './author.css'

//https://pbs.twimg.com/media/FvjIH-eWYAIcGI4?format=jpg&name=small
const Author = () => {
    return (
    <div className='author-container'>
        <div className='author-photo-container'>
            <img className='author-photo' src='https://conrading.github.io/difference-is-fine/accessFile/23TI43930.jpg' alt='zdjędzie'/>
        </div>
        <div className='author-line-container'>
            <div className='makeRow'>                
                <div className='social-media-link-button' onClick={() => window.open("https://www.instagram.com/differenceisfine/", "_blank")}>Instagram</div>
                <div className='social-media-link-button' onClick={() => window.open("https://soundcloud.com/conrading", "_blank")}>SoundCloud</div> 
                <div className='social-media-link-button' onClick={() => window.open("https://www.youtube.com/@differenceisfine", "_blank")}>Youtube</div> 
            </div>
            <div className='author-line'>
                <div>Engineer who studied law, living in Wrocław, dreamed of being an artist, dreams of dying as an artist. </div>
                <br/>
                <div>若不嫌棄，也許試閱「在所不息」</div>
            </div>
            <div className='author-line'>
                <div>-- 2024 November Wrocław</div>
            </div>
        </div>
    </div>
    )
}

export default Author