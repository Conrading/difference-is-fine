
import React, { useState } from 'react';
import './storyReader.css';


const PDFViewer = () => {
  const [preReadingToggle, setPreReadingToggle] = useState(true);

  const pdfWidth = "100%"
  const pdfHeight = "100%"
  const storySource = "https://conrading.github.io/difference-is-fine/在所不息試閱2024版.pdf";
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
        <div className='preReadingText'>sorry, the story currently is only available in Chinese</div>
        <div className='preReadingText'>English Translation progress: <b>4%</b> in 2024 October</div>
        {isMobile ? 
        (
          <div className='preReadingText'>
            <br />
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
        <div className='jumpToPudu'>到 <a href='https://www.pubu.com.tw/ebook/451257'>Pubu</a> 閱讀全部 | click <a href='https://www.pubu.com.tw/ebook/451257'>Pubu</a> to read full story</div>
      </div>}
    </div>
  );
};

export default PDFViewer;
