// src/PDFViewer.js
import React, { useState } from 'react';
import './storyReader.css';

const PDFViewer = () => {
  const [pageNum, setPageNum] = useState(1);
  const storySource = "https://conrading.github.io/wroclaw-project/differenceIsFine.pdf";

  const handlePrevPage = () => {
    if (pageNum > 1) {
      setPageNum(pageNum - 1);
    }
  };

  const handleNextPage = () => {
    // Assuming you know the total number of pages or you can fetch it
    const totalPages = 100; // Example: Set to your PDF's total pages
    if (pageNum < totalPages) {
      setPageNum(pageNum + 1);
    }
  };

  const handleJumpToPage = (e) => {
    const inputPageNum = parseInt(e.target.value, 10);
    if (inputPageNum > 0) {
      setPageNum(inputPageNum);
    }
  };

  // Assuming the PDF URL supports the '#page' parameter for page navigation
  const pdfUrl = `${storySource}#toolbar=0#page=${pageNum}`;

  return (
    <div className="pdf-viewer-container">
      <iframe src={pdfUrl} className="pdf-iframe" title="PDF Viewer" />
      <div className="navigation">
        <button onClick={handlePrevPage} disabled={pageNum <= 1}>
          Previous
        </button>
        <span>Page {pageNum}</span>
        <button onClick={handleNextPage}>
          Next
        </button>
      </div>
      <div className="search-bar">
        <input
          type="number"
          placeholder="Page number"
          min="1"
          onChange={handleJumpToPage}
        />
      </div>
    </div>
  );
};

export default PDFViewer;
