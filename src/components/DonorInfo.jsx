import React from 'react';
import { Table } from 'flowbite-react';
const DonorInfo = ({donor}) => {
    return (
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {donor.userName}
            </Table.Cell>
            <Table.Cell>
                {donor.bloodGroup}
            </Table.Cell>
            <Table.Cell>
                {donor.phone}
            </Table.Cell>
            <Table.Cell>
                {donor.address}
            </Table.Cell>
        </Table.Row>
    );
};

export default DonorInfo;