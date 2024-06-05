import { Table } from '@radix-ui/themes';
import InvoiceDownloadButton from './buttons/InvoiceDownloadButton';
import getOrderSummary from '@/app/server/getData/accountPage/getOrderSummary';
import moment from 'moment';

const OrderInformation = async () => {
    const ordersRequest = await getOrderSummary();
    const orders = JSON.parse(ordersRequest);

    return (
        <>
            {orders && (
                <div className='grid w-2/3 py-10 grid-cols-1 gap-4 mx-auto'>
                    <div className='p-5 bg-white rounded shadow'>
                        <h3 className='mb-4 text-2xl font-medium text-gray-800'>Order Summary</h3>
                        <Table.Root size='3'>
                            <Table.Header>
                                <Table.Row>
                                    <Table.ColumnHeaderCell>Bill No</Table.ColumnHeaderCell>
                                    <Table.ColumnHeaderCell>Payment Date</Table.ColumnHeaderCell>
                                    <Table.ColumnHeaderCell>Quantity</Table.ColumnHeaderCell>
                                    <Table.ColumnHeaderCell>Total Cost</Table.ColumnHeaderCell>
                                    <Table.ColumnHeaderCell justify='end'>
                                        Download Invoice
                                    </Table.ColumnHeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                {orders.map((order, i) => (
                                    <>
                                        <Table.Row align='baseline' key={order._id}>
                                            <Table.RowHeaderCell>{i + 1}</Table.RowHeaderCell>
                                            <Table.Cell>
                                                {moment(order.createdAt).format(
                                                    'D MMM YYYY [at] h:mm:ss a'
                                                )}
                                            </Table.Cell>

                                            <Table.Cell>{order.products.length}</Table.Cell>
                                            <Table.Cell>${order.total.toFixed(2)}</Table.Cell>
                                            <Table.Cell justify='end'>
                                                <InvoiceDownloadButton pdfPath={order.pdfPath} />
                                            </Table.Cell>
                                        </Table.Row>
                                    </>
                                ))}
                            </Table.Body>
                        </Table.Root>
                    </div>
                </div>
            )}
        </>
    );
};

export default OrderInformation;
