import React from 'react';
import './author.css'

const Author = () => {
    return (
        <div className='author-container'>
            <div>
                <img className='author-photo' src='https://pbs.twimg.com/media/FvjIH-eWYAIcGI4?format=jpg&name=small' alt='zdjędzie'/>
            </div>
            <div className='author-line-container'>
                <div className='author-line'>
                    <div>my name is Conrading, I am from Taiwan, currently living in Wrocław, Poland. </div>
                    <div>是暢又澍，來自台灣，現居波蘭 Wrocław。</div>
                </div>
                <div className='author-line'>
                    <div>I am passionate about writing story and music, you can refer to my <a href='https://soundcloud.com/conrading'>SoundCloud</a>.</div> 
                    <div>寫作和音樂反映我的靈魂，小說以外，你也可以參考我在<a href='https://soundcloud.com/conrading'>SoundCloud</a>的音樂。</div>
                </div>
                <div className='author-line'>
                    <div>the story "Difference is Fine" now is only available in Chinese, before I have it translated, you can find different topics associated with the story on <a href="https://www.instagram.com/differenceisfine/">Instagram</a>, such as quantum mechanics. </div>
                    <div>既然你懂中文，可以看看我的「在所不息」，除此之外，我同時還在<a href="https://www.instagram.com/differenceisfine/">Instagram</a>分享了關於這故事的其他創作，可以從其他方面看量子力學是如何啟發我完成這個故事。</div>
                </div>
                <div className='author-line'>
                    <div>-- 2024 二零二四年</div>
                </div>
            </div>
        </div>  
        )
}

export default Author