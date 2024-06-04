import generatePDF from '@/lib/GeneratePDF/generatePDF';

export const POST = async (request) => {
    try {
        // Your order completion logic here...
        // After the order is successfully completed, generate the PDF
        const pdfBuffer = await generatePDF(order);

        // Write the PDF buffer to a file
        fs.writeFileSync('order-confirmation.pdf', pdfBuffer);

        // Return the file path or any other information you may need
        return { success: true, message: 'PDF generated successfully' };
    } catch (error) {
        // Handle errors
        console.error('Error completing order:', error);
        return { success: false, message: 'An error occurred while completing the order' };
    }
};
