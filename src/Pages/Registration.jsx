import React, { useContext } from 'react';
import { Button, Checkbox, Label, TextInput, Radio, Alert } from 'flowbite-react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Registration = () => {
    const { createUser, user } = useContext(AuthContext)

    const navigate=useNavigate()

    if (user) {
        return (
            <Alert
                color="failure"
            >
                <span>
                    <p>
                        <span className="font-bold text-2xl">
                            Info alert !
                        </span>
                        You already joined.
                    </p>
                </span>
            </Alert>
        )
    }


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target
        const userName = form.donorName.value
        const bloodGroup = form.bloodGroup.value
        const email = form.email.value
        const phone=form.phone.value
        const address = form.donorAddress.value
        const password1 = form.password1.value
        const password2 = form.password2.value
        if (password1 !== password2) {
            return alert("password not matched")
        }
        if (password1.length < 8) {
            return alert('password must have 8 characters')
        }
        const newDonor = {
            userName,
            bloodGroup,
            email,
            phone,
            address
        }

        createUser(email, password1)
            .then(result => {
                console.log(result)
                fetch('https://blood-management-server-py1oktes5-md-tanvir-hasans-projects.vercel.app/profile', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newDonor)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data) {
                            alert('successfully registered')
                        }
                        else {
                            alert('registration failed')
                        }
                    })
                    navigate('/profile')
            })
            .catch(error => {
                console.log(error)
            })
            event.target.reset()
            
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
                            htmlFor="email"
                            value="Donor Email"
                        />
                    </div>
                    <TextInput
                        color="failure"
                        id="email"
                        placeholder="new@email.com"
                        required
                        shadow
                        type="email"
                    />
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
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            color="failure"
                            htmlFor="password1"
                            value="password"
                        />
                    </div>
                    <TextInput
                        color="failure"
                        id="password1"
                        required
                        shadow
                        type="password"
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            color="failure"
                            htmlFor="password2"
                            value="Repeat password"
                        />
                    </div>
                    <TextInput
                        color="failure"
                        id="password2"
                        required
                        shadow
                        type="password"
                    />
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox id="agree" />
                    <Label
                        color="failure"
                        className="flex"
                        htmlFor="agree"
                    >
                        <p>
                            I agree with the
                        </p>
                        <a
                            className="text-cyan-600 hover:underline dark:text-cyan-500"
                            href="/forms"
                        >
                            <p>
                                terms and conditions
                            </p>
                        </a>
                    </Label>
                </div>
                <Button color="failure" type="submit">
                    Register new account
                </Button>
                <h1>Already have account?<Link className='text-red-500' to='/login'> Go To Login</Link></h1>
            </form>

        </div>
    );
};

export default Registration;