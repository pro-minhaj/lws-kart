'use client';
import { useEffect } from 'react';

const PDFDownloader = ({ pdfPath }) => {
    useEffect(() => {
        if (pdfPath) {
            // Create a link element to download the PDF file
            const link = document.createElement('a');
            link.href = pdfPath;
            link.download = 'order-confirmation.pdf';
            link.click();
            console.log(pdfPath);
        }
    }, [pdfPath]);

    return null;
};

export default PDFDownloader;
