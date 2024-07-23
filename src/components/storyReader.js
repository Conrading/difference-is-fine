
import React, { useState } from 'react';
import './storyReader.css';


const PDFViewer = () => {
  const [preReadingToggle, setPreReadingToggle] = useState(true);

  const pdfWidth = "100%"
  const pdfHeight = "100%"
  const storySource = "https://conrading.github.io/wroclaw-project/Difference_is_Fine[githubVersion].pdf";
  //const pdfUrl = `${storySource}#toolbar=0`;
  const pdfUrl = `${storySource}`;
  const isMobile = window.innerWidth <= 900;

  const switchPreReading = () => {
    if (preReadingToggle === true) {setPreReadingToggle(false)} else {alert('System Error')}
  }
  return (
    <div>
      {preReadingToggle === true && 
      <div className='preReadingContainer'>
        <div className='preReadingText'>Hey, the story currently is only available in Chinese</div>
        <div className='preReadingText'>maybe follow <a href="https://www.instagram.com/differenceisfine/">Instagram</a> to see interesting update</div>
        {isMobile ? 
        (
          <div className='preReadingText'>
            <br />
            <div>and sorry story is not available on phone interface</div> 
            <div>抱歉無法在手機試閱</div>
          </div>
        ): (
          <div onClick={switchPreReading} className='preReadingToggle'>試閱100頁</div>
        )
        }
      </div>}
      {preReadingToggle === false && 
      <div>
        <div className="pdf-viewer-container">
          <iframe src={pdfUrl} className="pdf-iframe" title="PDF Viewer" width={pdfWidth} height={pdfHeight}/>
        </div>
        <div className='jumpToPudu'>到 <a href='https://www.pubu.com.tw/ebook/451257'>Pubu</a> 閱讀全部 | click <a href='https://www.pubu.com.tw/ebook/451257'>here</a> to read full story</div>
      </div>}
    </div>
  );
};

export default PDFViewer;
