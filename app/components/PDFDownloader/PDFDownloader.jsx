'use client';
import { useEffect } from 'react';

const PDFDownloader = ({ pdfPath }) => {
    useEffect(() => {
        if (pdfPath) {
            console.log({ pdfPath });
            // Create a link element to download the PDF file
            const link = document.createElement('a');
            link.href = `/${pdfPath}`; // Ensure the correct path is used
            link.download = pdfPath.split('/').pop(); // Set the download attribute
            link.click();
        }
    }, [pdfPath]);

    return null;
};

export default PDFDownloader;
