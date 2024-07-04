// src/PDFViewer.js
import React from 'react';
import './storyReader.css';

const PDFViewer = () => {
  const storySource = "https://conrading.github.io/wroclaw-project/Difference_is_Fine[githubVersion].pdf";
  //const pdfUrl = `${storySource}#toolbar=0`;
  const pdfUrl = `${storySource}`;

  return (
    <div className="pdf-viewer-container">
      <iframe src={pdfUrl} className="pdf-iframe" title="PDF Viewer" />
    </div>
  );
};

export default PDFViewer;
