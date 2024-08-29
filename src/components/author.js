import React from 'react';
import './author.css'

const Author = () => {
    return (
        <div className='author-container'>
            <div className='author-photo-container'>
                <img className='author-photo' src='https://pbs.twimg.com/media/FvjIH-eWYAIcGI4?format=jpg&name=small' alt='zdjędzie'/>
            </div>
            <div className='author-line-container'>
                <div className='author-line'>
                    <div><a href="https://www.instagram.com/differenceisfine/">Instagram</a></div>
                    <div><a href='https://soundcloud.com/conrading'>SoundCloud</a></div> 
                    <br/>
                    <div>"Difference is Fine" is my story, now it is only available in Chinese, though I am translating it, hope soon you can read it. </div>
                    </div>
                <div className='author-line'>
                    <div><a href="https://www.instagram.com/differenceisfine/">Instagram</a></div>
                    <div><a href='https://soundcloud.com/conrading'>SoundCloud</a></div> 
                    <br />
                    <div>既然你懂中文，也許可以試閱一點「在所不息」</div>
                </div>
                <div className='author-line'>
                    <div>-- 2024 二零二四年</div>
                </div>
            </div>
        </div>  
        )
}

export default Author