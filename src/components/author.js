import React from 'react';
import './author.css'

//https://pbs.twimg.com/media/FvjIH-eWYAIcGI4?format=jpg&name=small
const Author = () => {
    return (
    <div className='author-container'>
        <div className='author-photo-container'>
            <img className='author-photo' src='https://conrading.github.io/wroclaw-project/accessFile/23TI43930.jpg' alt='zdjędzie'/>
        </div>
        <div className='author-line-container'>
            <div className='makeRow'>                
                <div className='social-media-link-button' onClick={() => window.open("https://www.instagram.com/differenceisfine/", "_blank")}>@differenceisfine</div>
                <div className='social-media-link-button' onClick={() => window.open("https://soundcloud.com/conrading", "_blank")}>SoundCloud</div> 
            </div>
            <div className='author-line'>
                <div>"Difference is Fine" is my story, now it is only available in Chinese, though I am translating it, hope soon you can read it. </div>
                <br/>
                <div>既然你懂中文，也許試閱「在所不息」</div>
            </div>
            <div className='author-line'>
                <div>-- 2024 二零二四年</div>
            </div>
        </div>
    </div>
    )
}

export default Author