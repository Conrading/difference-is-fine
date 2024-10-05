import React, { useState } from 'react';
import './philosophy.css';

const Philosophy = () => {
    const images = [
        'https://conrading.github.io/difference-is-fine/accessFile/05.jpg',
        'https://conrading.github.io/difference-is-fine/accessFile/06.jpg',
        'https://conrading.github.io/difference-is-fine/accessFile/07.jpg'
    ];

    const videos = [
        "https://www.youtube.com/embed/iYvSiBpKqrY",
        "https://www.youtube.com/embed/bo6mf9JpUs0"
    ];

    const media = [...images, ...videos]; // Merged list of images and videos in sequence
    const [currentItemIndex, setCurrentItemIndex] = useState(0);

    const goToNext = () => {
        // Cycle through the merged media array
        const nextIndex = (currentItemIndex + 1) % media.length;
        setCurrentItemIndex(nextIndex);
    };

    return (
        <div className="dynamic-philosophy-container">
            <div className="centered-content" onClick={goToNext}>
                {currentItemIndex < images.length ? (
                    <img
                        className="fade-in image-box"
                        src={media[currentItemIndex]}
                        alt="Philosophy"
                    />
                ) : (
                    <iframe
                        className="fade-in video-box"
                        src={media[currentItemIndex]}
                        title="Philosophy Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                )}
            </div>
        </div>
    );
};

export default Philosophy;
