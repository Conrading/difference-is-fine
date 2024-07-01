import React, { useState } from 'react';
import { Document, Page } from 'react-pdf'
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import './storyReader.css'
//import StoryFile from './differenceIsFine.pdf' //the file is at the same folder under "components"
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const StoryReader = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [inputPage, setInputPage] = useState("");
    const [inputSize, setInputSize] = useState(511);
    const [showingSize, setShowingSize] = useState("Page Size: 100%")
    const pdfUrl = "https://conrading.github.io/wroclaw-project/differenceIsFine.pdf";
  
    const onDocumentLoadSuccess = ({ numPages }) => {
      setNumPages(numPages);
    };

    pdfjs.GlobalWorkerOptions.workerSrc = new URL(
        'pdfjs-dist/build/pdf.worker.min.mjs',
        import.meta.url,
      ).toString();
  
    const handlePageInputChange = (event) => {
    setInputPage(event.target.value);
    };

    const handlePageInputSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        const pageNumber = parseInt(inputPage, 10);
        if (pageNumber >= 1 && pageNumber <= numPages) {
        setPageNumber(pageNumber);
        } else {
        alert(`Please enter a page number between 1 and ${numPages}`);
        }
    };

    const handlePageSize = () => {
        if (inputSize === 511) {
            setInputSize(711);
            setShowingSize("Page Size: 125%")
        }
        if (inputSize === 711) {
            setInputSize(311);
            setShowingSize("Page Size: 75%")
        }
        if (inputSize === 311) {
            setInputSize(511);
            setShowingSize("Page Size: 100%")
        }
    }

    return (
      <div>
        <div className='upper-page-container'>
            <p className='upper-page-text'>
                Page {pageNumber} of {numPages}
            </p>
            <form onSubmit={handlePageInputSubmit} className="upper-page-input-form">
                <input
                type="number"
                value={inputPage}
                onChange={handlePageInputChange}
                placeholder={`Enter page (1-${numPages})`}
                className="upper-page-input"
                />
                <button type="submit" className="upper-page-go-button">
                Go
                </button>
            </form>
            <button className='upper-page-size-button' onClick={handlePageSize}>{showingSize}</button>
        </div>
        <div className='pdf-body'>
            <Document className='pdf-container'
            file={{ url: `https://cors-anywhere.herokuapp.com/${pdfUrl}` }}
            //consititue from project url "https://conrading.github.io/wroclaw-project/" + file name "differenceIsFine.pdf" in "Public" folder
            //works at local site by loading PDF from url

            //below the way loading PDf file from folder, either Public or Component works only at local side
            //file={`${process.env.PUBLIC_URL}/differenceIsFine.pdf`}
            //file={process.env.PUBLIC_URL + '/differenceIsFine.pdf'}
            onLoadError={console.error}
            onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page pageNumber={pageNumber} width={inputSize}/>
            </Document>
        </div>
        <div className='button-container'>
        <button className='button-page' disabled={pageNumber <= 1} onClick={() => setPageNumber(pageNumber - 1)}>
            Previous
        </button>
        <button className='button-page' disabled={pageNumber >= numPages} onClick={() => setPageNumber(pageNumber + 1)}>
            Next
        </button>
        </div>
      </div>
    );
  };
  
  export default StoryReader;