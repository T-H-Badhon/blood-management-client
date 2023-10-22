import React, { useContext } from 'react';
import { Button, Checkbox, Label, TextInput, Radio, Alert } from 'flowbite-react';
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const UpdateProfile = () => {
    const { user } = useContext(AuthContext)
    const navigate=useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target
        const userName = form.donorName.value
        const bloodGroup = form.bloodGroup.value
        const email = user.email
        const phone = form.phone.value
        const address = form.donorAddress.value

        const newDonor = {
            userName,
            bloodGroup,
            email,
            phone,
            address
        }

        fetch('http://localhost:5000/update', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newDonor)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount >0 || data.upsertedCount >0){
                alert("profile updated")
                navigate('/profile')
            }
            else{
                alert('update incomplete')
            }
        })
    }
    return (
        <div className='pt-5 md:py-20'>
            <form onSubmit={handleSubmit} className="flex max-w-md flex-col gap-4 p-4 rounded-lg bg-white mx-auto">
                <div>
                    <div className="mb-2 block">
                        <Label
                            color="failure"
                            htmlFor="donorName"
                            value="Donor Name"
                        />
                    </div>
                    <TextInput
                        color="failure"
                        id="donorName"
                        placeholder="Enter name"
                        required
                        shadow
                        type="text"
                    />
                </div>
                <div>
                    <fieldset
                        className="grid grid-cols-4 max-w-md gap-4"
                        id="radio"
                    >
                        <legend className="mb-4">
                            Choose your blood group
                        </legend>
                        <div className="flex items-center gap-2">
                            <Radio

                                id="A+"
                                name="bloodGroup"
                                value="A+"
                            />
                            <Label htmlFor="A+">
                                A+
                            </Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Radio
                                id="A-"
                                name="bloodGroup"
                                value="A-"
                            />
                            <Label htmlFor="A-">
                                A-
                            </Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Radio
                                id="B+"
                                name="bloodGroup"
                                value="B+"
                            />
                            <Label htmlFor="B+">
                                B+
                            </Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Radio
                                id="B-"
                                name="bloodGroup"
                                value="B-"
                            />
                            <Label htmlFor="B-">
                                B-
                            </Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Radio
                                id="O+"
                                name="bloodGroup"
                                value="O+"
                            />
                            <Label
                                htmlFor="O+"
                            >
                                O+
                            </Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Radio
                                id="O-"
                                name="bloodGroup"
                                value="O-"
                            />
                            <Label
                                htmlFor="O-"
                            >
                                O-
                            </Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Radio
                                id="AB+"
                                name="bloodGroup"
                                value="AB+"
                            />
                            <Label
                                htmlFor="AB+"
                            >
                                AB+
                            </Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Radio
                                id="AB-"
                                name="bloodGroup"
                                value="AB-"
                            />
                            <Label
                                htmlFor="AB-"
                            >
                                AB-
                            </Label>
                        </div>
                    </fieldset>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            color="failure"
                            htmlFor="phone"
                            value="Donor phone"
                        />
                    </div>
                    <TextInput
                        color="failure"
                        id="phone"
                        placeholder="017XXXXXXXX"
                        required
                        shadow
                        type="phone"
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            color="failure"
                            htmlFor="address"
                            value="Donor address"
                        />
                    </div>
                    <TextInput
                        color="failure"
                        id="donorAddress"
                        placeholder="Enter present address"
                        required
                        shadow
                        type="text"
                    />
                    <Button className='mt-5' color="failure" type="submit">
                        Update
                    </Button>
                </div>
            </form>

        </div>
    );
};

export default UpdateProfile;