import React, { useState }  from 'react';
import './philosophy.css'

const Philosophy = () => {
    const [isImageEnlarged, setIsImageEnlarged] = useState(false);
    const [enlargedImageUrl, setEnlargedImageUrl] = useState(null);
    
    const handleImageClick = (imageUrl) => {
        setIsImageEnlarged(true);
        setEnlargedImageUrl(imageUrl);
    };
    
    const handleCloseClick = () => {
        setIsImageEnlarged(false);
        setEnlargedImageUrl(null);
    };
      
    return (
        <body>
            <div className='main-frame background-upper'>
                <div className="left-column">
                    <img 
                    className="thumbnail" 
                    src='https://conrading.github.io/difference-is-fine/accessFile/05.jpg' 
                    alt="Image" 
                    onClick={() => handleImageClick('https://conrading.github.io/difference-is-fine/accessFile/05.jpg')} 
                    />
                    {isImageEnlarged && (
                    <div className="overlay" onClick={handleCloseClick}>
                        <div className="enlarged-image-container">
                        <img 
                            src={enlargedImageUrl} 
                            alt="enlarged" 
                            className="enlarged-image" 
                        />
                        </div>
                    </div>
                    )}
                </div>
                <div className='right-column'>
                    <iframe className='video-centering'
                        width="392" height="697" 
                        src="https://www.youtube.com/embed/iYvSiBpKqrY" 
                        title="how God might Engineer Humans | Difference is Fine" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                    </iframe>
                </div>
            </div>
            <div className='main-frame background-bottom'>
                <div className="left-column">
                    <iframe className='video-centering'
                        src="https://www.youtube.com/embed/bo6mf9JpUs0" 
                        title="Humans might be constructed based on quantum physics to function as highly efficient Machines." 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                    </iframe>
                </div>
                <div className='right-column'>
                    <img 
                    className="thumbnail" 
                    src='https://conrading.github.io/difference-is-fine/accessFile/06.jpg' 
                    alt="Image" 
                    onClick={() => handleImageClick('https://conrading.github.io/difference-is-fine/accessFile/06.jpg')} 
                    />
                    {isImageEnlarged && (
                    <div className="overlay" onClick={handleCloseClick}>
                        <div className="enlarged-image-container">
                        <img 
                            src={enlargedImageUrl} 
                            alt="enlarged" 
                            className="enlarged-image" 
                        />
                        </div>
                    </div>
                    )}
                </div>
            </div>
        </body>
    )
}


export default Philosophy