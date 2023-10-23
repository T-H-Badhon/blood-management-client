import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Button } from 'flowbite-react';
import { Card, Dropdown } from 'flowbite-react';
import { DropdownItem } from 'flowbite-react/lib/esm/components/Dropdown/DropdownItem';
import { Link, useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate=useNavigate()
    const { logOut, user, deleteProfile } = useContext(AuthContext)
    const [profile, setProfile] = useState({})
    const logOutB = () => {
        logOut();
    }

    const deleteAccount = () => {
        deleteProfile()
        fetch(`http://localhost:5000/${user.email}`, {
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
        
        navigate('/')
    }



    useEffect(() => {
        fetch(`http://localhost:5000/${user.email}`)
            .then(res => res.json())
            .then(data => setProfile(data[0]))
    }, [])
    return (
        <div className='pt-32 md:pt-44'>
            <Card className='w-2/3 mx-auto'>
                <div className="flex justify-end px-4 pt-4">
                    <Dropdown
                        inline
                        label=""
                    >
                        <DropdownItem>
                            <Link
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                to='/updateProfile'
                            >
                                <p>
                                    Update profile
                                </p>
                            </Link>
                        </DropdownItem>
                        <DropdownItem>
                            <button
                                onClick={deleteAccount}
                                className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                href="#"
                            >
                                <p>
                                    Delete Account
                                </p>
                            </button>
                        </DropdownItem>
                    </Dropdown>
                </div>
                <div className="flex flex-col items-center pb-10">
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                        {profile?.userName}
                    </h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                        Blood Donor
                    </span>
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                        {profile?.bloodGroup}
                    </h5>
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                        {profile?.email}
                    </h5>
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                        {profile?.phone}
                    </h5>
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                        {profile?.address}
                    </h5>


                    <Button className='mt-20' onClick={logOutB}>Sign out</Button>
                </div>
            </Card>

        </div>
    );
};

export default Profile;