'use client';

const InvoiceDownloadButton = ({ pdfPath }) => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = pdfPath; // Path to the PDF file in your public folder
        link.download = pdfPath; // The name of the file to be downloaded
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        console.log({ pdfPath });
    };

    return (
        <button
            type='button'
            onClick={handleDownload}
            className='inline-flex items-center justify-end gap-2 px-4 py-2 text-sm font-medium transition-colors border rounded-md shadow-sm whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 !hover:bg-transparent text-white !bg-[#DF3B3B] focus:!bg-green-600 hover:!bg-[#DF3B3B]/85'
        >
            Download
        </button>
    );
};

export default InvoiceDownloadButton;
