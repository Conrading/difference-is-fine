
import React, { useState,  useEffect } from 'react';
import './storyReader.css';


const PDFViewer = () => {
  const [preReadingToggle, setPreReadingToggle] = useState("close");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 900);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //PDFReading
  const pdfWidth = "100%"
  const pdfHeight = "100%"
  const storyMandarinSource = "https://conrading.github.io/difference-is-fine/在所不息試閱2024版.pdf";
  const pdfUrlMandarin = `${storyMandarinSource}`;
  //const pdfUrl = `${storySource}#toolbar=0`;
  const storyMEnglishSource = "https://conrading.github.io/difference-is-fine/DifferenceIsFine_2024trail.pdf";
  const pdfUrlEnglish = `${storyMEnglishSource}`;

  const switchMandarinPreReading = () => {
    if (preReadingToggle === "close") {setPreReadingToggle("Mandarin")} else {alert('System Error')}
  }
  const switchEnglishPreReading = () => {
    if (preReadingToggle === "close") {setPreReadingToggle("English")} else {alert('System Error')}
  }
  return (
    <div>
      {preReadingToggle === "close" && 
      <div className='preReadingContainer'>
        <div className='preReadingText'>English Translation progress: <b>24%</b> in 2024 November</div>
        {isMobile ? 
        (
          <div className='preReadingText'>
            <br />
            <div>抱歉手機無法試閱 | Sorry Trail Version is not available on cell phone</div>
          </div>
        ): (
          <div>
            <div onClick={switchMandarinPreReading} className='preReadingToggle'>試閱100頁</div>
            <div onClick={switchEnglishPreReading} className='preReadingToggle'>English Trial Version</div>
          </div>
        )
        }
      </div>}
      {preReadingToggle === "Mandarin" && 
      <div>
        <div className="pdf-viewer-container">
          <iframe src={pdfUrlMandarin} className="pdf-iframe" title="PDF Viewer" width={pdfWidth} height={pdfHeight}/>
        </div>
        <div className='jumpToPudu'>到 <a href='https://www.pubu.com.tw/ebook/451257'>Pubu</a> 閱讀全部 | click <a href='https://www.pubu.com.tw/ebook/451257'>Pubu</a> to read full story</div>
      </div>}
      {preReadingToggle === "English" && 
      <div>
        <div className="pdf-viewer-container">
          <iframe src={pdfUrlEnglish} className="pdf-iframe" title="PDF Viewer" width={pdfWidth} height={pdfHeight}/>
        </div>
      </div>}
    </div>
  );
};

/*
const JSONPageViewer = () => {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    fetch('/Mandarin.json')
      .then((response) => response.json())
      .then((data) => {
        setPages(data.page_data);
      })
      .catch((error) => console.error('Error loading JSON:', error));
  }, []);

  return (
    <div className="json-page-viewer">
      {pages.map((page, index) => (
        <div key={index} className="json-page">
          <img src={page.image_url} alt={`Page ${index + 1}`} width="100%" />
        </div>
      ))}
    </div>
  );
};
*/

export default PDFViewer;
