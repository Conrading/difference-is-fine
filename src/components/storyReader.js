import React, { useState } from 'react';
import { Document, Page } from 'react-pdf'
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import './storyReader.css'
//import StoryFile from './differenceIsFine.pdf' //load from local file, same folder under "components"
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

/*
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
  ).toString();
*/

const StoryReader = () => {
    const [totalPages, setTotalPages] = useState(null);
    const [eachPageNumber, setEachPageNumber] = useState(1);
    const [inputPage, setInputPage] = useState("");
    const [inputSize, setInputSize] = useState(511);
    const [showingSize, setShowingSize] = useState("Page Size: 100%")

    const pdfUrl = "https://conrading.github.io/wroclaw-project/differenceIsFine.pdf";

    const onDocumentLoadSuccess = ({ numPages }) => {
      console.log("total number of page of pdf is: " + numPages)
      setTotalPages(numPages);
    };

    const handlePageInputChange = (event) => {
        setInputPage(event.target.value);
    };

    const handlePageInputSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        const eachPage = parseInt(inputPage, 10);
        if (eachPage >= 1 && eachPage <= totalPages) {
            setEachPageNumber(eachPage);
        } else {
            alert(`Please enter a page number between 1 and ${totalPages}`);
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
                Page {eachPageNumber} of {totalPages}
            </p>
            <form onSubmit={handlePageInputSubmit} className="upper-page-input-form">
                <input
                type="number"
                value={inputPage}
                onChange={handlePageInputChange}
                placeholder={`Enter page (1-${totalPages})`}
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
            file={{ url: pdfUrl }}
            //below the way loading PDf file from folder, either Public or Component, but works only at local side
            //file={`${process.env.PUBLIC_URL}/differenceIsFine.pdf`}
            //file={StoryFile} //when we need load from local side
            onLoadError={console.error}
            onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page pageNumber={eachPageNumber} width={inputSize}/>
                {/*<Page pageNumber={eachPageNumber} width={inputSize}/> */}
            </Document>
        </div>
        <div className='button-container'>
        <button className='button-page' disabled={eachPageNumber <= 1} onClick={() => setEachPageNumber(eachPageNumber - 1)}>
            Previous
        </button>
        <button className='button-page' disabled={eachPageNumber >= totalPages} onClick={() => setEachPageNumber(eachPageNumber + 1)}>
            Next
        </button>
        </div>
      </div>
    );
  };
  
  export default StoryReader;