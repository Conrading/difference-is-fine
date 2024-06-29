import React from 'react';
import './author.css'

const Author = () => {
    return (
        <div className='author-container'>
            <div>
                <img className='author-photo' src='https://pbs.twimg.com/media/FvjIH-eWYAIcGI4?format=jpg&name=small' alt='zdjędzie'/>
            </div>
            <div>
                <div className='author-line'>
                    my name is Conrading, I am from Taiwan, currently living in Wrocław, Poland.
                </div>
                <div className='author-line'>
                    I am passionate about writing story and music, you can refer to my <a href='https://soundcloud.com/conrading'>Soundcloud</a>. 
                </div>
                <div className='author-line'>
                    the story now is only available in Chinese, I am growing fanbase in instagram, hope one day I can have the story being translated. 
                </div>
            </div>
        </div>  
        )
}

export default Author