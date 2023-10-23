import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Table } from 'flowbite-react';
import DonorInfo from '../components/donorInfo';

const DonorList = () => {
    const list = useLoaderData()

    console.log(list)
    return (
        <div className='pt-10 md:pt-20'>
            <Table className="bg-white mx-auto md:w-2/3 rounded-lg">
                <Table.Head>
                    <Table.HeadCell>
                        DONOR Name
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Blood Group
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Phone
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Address
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {
                        list.map(donor=> <DonorInfo key={donor._id} donor={donor}></DonorInfo> )
                    }
                </Table.Body>
            </Table>
        </div>
    );
};

export default DonorList;