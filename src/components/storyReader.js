
import React, { useState } from 'react';

const PDFViewer = () => {
    const sotrySource = "https://conrading.github.io/wroclaw-project/differenceIsFine.pdf"
 return (
 <div>
 <iframe src={sotrySource} width={710} height={1170}/>
 </div>
 );
};
export default PDFViewer;
