import { PDFDocument, rgb } from 'pdf-lib';

const generatePDF = async (order) => {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 800]);

    try {
        // Add order details to the PDF
        page.drawText(`Order Confirmation`, { x: 50, y: 750, size: 20, color: rgb(0, 0, 0) });
        page.drawText(`Email: ${order.email}`, { x: 50, y: 720, size: 15, color: rgb(0, 0, 0) });
        page.drawText(`Subtotal: $${order.subTotal.toFixed(2)}`, {
            x: 50,
            y: 700,
            size: 15,
            color: rgb(0, 0, 0)
        });
        page.drawText(`Shipping: $${order.shipping.toFixed(2)}`, {
            x: 50,
            y: 680,
            size: 15,
            color: rgb(0, 0, 0)
        });
        page.drawText(`Tax: $${order.tax.toFixed(2)}`, {
            x: 50,
            y: 660,
            size: 15,
            color: rgb(0, 0, 0)
        });
        page.drawText(`Total: $${order.total.toFixed(2)}`, {
            x: 50,
            y: 640,
            size: 15,
            color: rgb(0, 0, 0)
        });

        // Add product details to the PDF
        let yOffset = 620;
        order.products.forEach((product, index) => {
            page.drawText(`Product ${index + 1}:`, {
                x: 50,
                y: yOffset,
                size: 12,
                color: rgb(0, 0, 0)
            });
            page.drawText(`ID: ${product._id}`, {
                x: 70,
                y: yOffset - 15,
                size: 12,
                color: rgb(0, 0, 0)
            });
            page.drawText(`Name: ${product.name}`, {
                x: 70,
                y: yOffset - 30,
                size: 12,
                color: rgb(0, 0, 0)
            });
            page.drawText(`Price: $${product.price.toFixed(2)}`, {
                x: 70,
                y: yOffset - 45,
                size: 12,
                color: rgb(0, 0, 0)
            });
            page.drawText(`Quantity: ${product.quantity}`, {
                x: 70,
                y: yOffset - 60,
                size: 12,
                color: rgb(0, 0, 0)
            });
            page.drawText(`Total Price: $${(product.price * product.quantity).toFixed(2)}`, {
                x: 70,
                y: yOffset - 75,
                size: 12,
                color: rgb(0, 0, 0)
            });
            page.drawText(`Size: ${product.size}`, {
                x: 70,
                y: yOffset - 90,
                size: 12,
                color: rgb(0, 0, 0)
            });
            yOffset -= 105;
        });

        // Save the PDF and return its content as a buffer
        const pdfBytes = await pdfDoc.save();
        return Buffer.from(pdfBytes);
    } catch (error) {
        throw new Error(error);
    }
};

export default generatePDF;
